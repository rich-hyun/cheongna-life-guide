'use strict';

let currentRotation = 0;
let isSpinning = false;
let activeQrProvider = 0;
let lastFocusedElement = null;
let resizeTimer = null;

const DEFAULT_DEPLOY_URL = 'https://rich-hyun.github.io/cheongna-life-guide/';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wheelColors = ['#006c5a', '#009178', '#00a886', '#dff9ef', '#f4fffb', '#bdebdc'];

const navEl = document.getElementById('gateNav');
const listEl = document.getElementById('gate-list');
const rouletteGateEl = document.getElementById('rouletteGate');
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas?.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const resultEl = document.getElementById('rouletteResult');
const qrImage = document.getElementById('qrImage');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const spaceModal = document.getElementById('spaceModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImage = document.getElementById('modalImage');
const modalType = document.getElementById('modalType');
const modalTitle = document.getElementById('modalTitle');
const modalMood = document.getElementById('modalMood');
const modalDesc = document.getElementById('modalDesc');

function gateById(id) {
  return GATES.find((gate) => gate.id === id) || GATES[0];
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[character]);
}

function safeLink(url) {
  const value = String(url ?? '');
  return /^https:\/\//i.test(value) ? value : '#';
}

function renderNav() {
  if (!navEl) return;
  navEl.innerHTML = GATES.map((gate, index) => `
    <a href="#gate-${escapeHtml(gate.id)}" data-gate-link="${escapeHtml(gate.id)}" class="${index === 0 ? 'active' : ''}">
      <span aria-hidden="true">${gate.icon}</span> ${escapeHtml(gate.label)}
    </a>
  `).join('');
}

function renderInternalPlaceCard(place, gateId, index) {
  return `
    <article class="place-card has-media">
      <div class="card-media">
        <img src="${escapeHtml(place.image)}" alt="${escapeHtml(place.imageAlt || place.name)}" loading="lazy" decoding="async">
      </div>
      <div class="card-content">
        <span class="type">${escapeHtml(place.type)}</span>
        <h3>${escapeHtml(place.name)}</h3>
        <p class="mood">${escapeHtml(place.mood)}</p>
        <p class="desc">${escapeHtml(place.desc)}</p>
        <button class="detail-btn" type="button" data-space-gate="${escapeHtml(gateId)}" data-space-index="${index}" aria-label="${escapeHtml(place.name)} 상세 이미지 보기">공간 자세히 보기</button>
      </div>
    </article>
  `;
}

function renderPlaceCard(place, gateId, index) {
  if (place.internal && place.image) {
    return renderInternalPlaceCard(place, gateId, index);
  }

  if (place.coming) {
    return `
      <article class="place-card placeholder">
        <div class="placeholder-icon" aria-hidden="true">${escapeHtml(place.travelIcon)}</div>
        <h3>${escapeHtml(place.name)}</h3>
        <p class="mood">${escapeHtml(place.mood)}</p>
        <span class="coming-pill">coming soon</span>
      </article>
    `;
  }

  const rating = Number.isFinite(Number(place.rating))
    ? Math.max(0, Math.min(5, Number(place.rating)))
    : 0;
  const ratingHtml = rating
    ? `<span class="card-rating" aria-label="추천도 ${rating}점">${'★'.repeat(rating)}<span class="empty">${'★'.repeat(5 - rating)}</span></span>`
    : '';
  const photoCredit = place.photoCredit
    ? `<span class="photo-credit">${escapeHtml(place.photoCredit)}</span>`
    : '';

  if (place.image) {
    return `
      <article class="place-card has-media external-photo" data-place-kind="${escapeHtml(gateId)}">
        <div class="card-media">
          <img src="${escapeHtml(place.image)}" alt="${escapeHtml(place.imageAlt || place.name)}" loading="lazy" decoding="async">
          ${photoCredit}
        </div>
        <div class="card-content">
          <span class="type">${escapeHtml(place.type)}</span>
          <div class="card-title-row">
            <h3>${escapeHtml(place.name)}</h3>
            ${ratingHtml}
          </div>
          <p class="mood">${escapeHtml(place.mood)}</p>
          <p class="desc">${escapeHtml(place.desc)}</p>
          <div class="travel-chip"><span aria-hidden="true">${escapeHtml(place.travelIcon)}</span><strong>${escapeHtml(place.travel)}</strong></div>
          <a class="map-link" href="${safeLink(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(place.name)} 네이버지도에서 보기">네이버지도</a>
        </div>
      </article>
    `;
  }

  return `
    <article class="place-card">
      <span class="type">${escapeHtml(place.type)}</span>
      <div class="card-title-row">
        <h3>${escapeHtml(place.name)}</h3>
        ${ratingHtml}
      </div>
      <p class="mood">${escapeHtml(place.mood)}</p>
      <p class="desc">${escapeHtml(place.desc)}</p>
      <div class="travel-chip"><span aria-hidden="true">${escapeHtml(place.travelIcon)}</span><strong>${escapeHtml(place.travel)}</strong></div>
      <a class="map-link" href="${safeLink(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(place.name)} 네이버지도에서 보기">네이버지도</a>
    </article>
  `;
}

function renderGateFeature(gate) {
  if (!gate.heroImage) return '';
  const highlights = Array.isArray(gate.highlights)
    ? `<ul class="highlight-list">${gate.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  return `
    <div class="hq-feature">
      <img src="${escapeHtml(gate.heroImage)}" alt="${escapeHtml(gate.heroAlt || gate.title)}" loading="eager" decoding="async">
      <div class="hq-feature-copy">
        <p class="hq-feature-kicker">HANA DREAM TOWN · GROUP HQ</p>
        <h3>사옥 안에서 완성되는 하나의 업무 생태계</h3>
        <p>걷고, 일하고, 쉬고, 교류하는 경험이 하나의 흐름으로 연결되는 청라 HQ의 핵심 공간을 만나보세요.</p>
        ${highlights}
      </div>
    </div>
    <p class="hq-source-note"><span aria-hidden="true">ℹ️</span><span>공간 이미지는 제공된 콘셉트 자료를 바탕으로 구성했으며, 세부 배치와 실제 출입 가능 공간은 운영 안내에 따라 달라질 수 있습니다.</span></p>
  `;
}

function renderGateList() {
  if (!listEl) return;
  listEl.innerHTML = GATES.map((gate) => `
    <section class="gate-block" id="gate-${escapeHtml(gate.id)}" data-tone="${escapeHtml(gate.tone)}" data-gate-section="${escapeHtml(gate.id)}">
      <header class="gate-head">
        <div class="gate-title"><span aria-hidden="true">${gate.icon}</span><span>${escapeHtml(gate.title)}</span></div>
        <div class="gate-subtitle">${escapeHtml(gate.subtitle)}</div>
      </header>
      <p class="gate-intro">${escapeHtml(gate.intro)}</p>
      ${renderGateFeature(gate)}
      <div class="place-grid ${gate.id === 'hq' ? 'hq-grid' : ''} ${gate.places.length === 3 ? 'three-grid' : ''}">
        ${gate.places.map((place, index) => renderPlaceCard(place, gate.id, index)).join('')}
      </div>
    </section>
  `).join('');
}

function playableGates() {
  return GATES.filter((gate) => gate.roulette !== false && gate.places.some((place) => !place.coming));
}

function renderRouletteSelect() {
  if (!rouletteGateEl) return;
  const gates = playableGates();
  rouletteGateEl.innerHTML = gates.map((gate) => `
    <option value="${escapeHtml(gate.id)}">${gate.icon} ${escapeHtml(gate.label)}</option>
  `).join('');
  rouletteGateEl.value = gates[0]?.id || '';
}

function drawWheel(gate) {
  if (!canvas || !ctx || !gate) return;

  const places = gate.places.filter((place) => !place.coming);
  if (!places.length) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const size = 420;
  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);
  canvas.style.width = `${size}px`;
  canvas.style.maxWidth = '100%';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 14;
  const slice = Math.PI * 2 / places.length;

  places.forEach((place, index) => {
    const start = index * slice;
    const end = (index + 1) * slice;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = wheelColors[index % wheelColors.length];
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255,255,255,.92)';
    ctx.stroke();

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(start + slice / 2);
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = index >= 3 ? '#00463c' : '#ffffff';
    ctx.font = '900 18px system-ui, sans-serif';
    const label = place.name.length > 8 ? `${place.name.slice(0, 8)}…` : place.name;
    ctx.fillText(label, radius - 24, 0);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(centerX, centerY, 58, 0, Math.PI * 2);
  ctx.fillStyle = '#00463c';
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '1000 23px system-ui, sans-serif';
  ctx.fillText('시작', centerX, centerY + 1);
}

function showRouletteResult(gate, place) {
  if (!resultEl) return;
  resultEl.innerHTML = `
    <span>${escapeHtml(gate.label)}</span>
    <strong>${escapeHtml(place.name)}</strong>
    <p>${escapeHtml(place.travelIcon)} ${escapeHtml(place.travel)} · ${escapeHtml(place.mood)}</p>
    <a class="map-link" href="${safeLink(place.map)}" target="_blank" rel="noopener noreferrer">네이버지도에서 길 확인</a>
  `;
}

function spinWheel() {
  if (isSpinning || !rouletteGateEl || !canvas || !spinBtn || !resultEl) return;

  const gate = gateById(rouletteGateEl.value);
  const places = gate.places.filter((place) => !place.coming);
  if (!places.length) return;

  isSpinning = true;
  spinBtn.disabled = true;
  rouletteGateEl.disabled = true;

  const pickedIndex = Math.floor(Math.random() * places.length);
  const sliceDegrees = 360 / places.length;
  const selectedCenter = pickedIndex * sliceDegrees + sliceDegrees / 2;
  const desiredAngle = 270 - selectedCenter;
  const normalizedCurrent = ((currentRotation % 360) + 360) % 360;
  const forwardAdjustment = ((desiredAngle - normalizedCurrent) % 360 + 360) % 360;
  const extraTurns = 360 * (5 + Math.floor(Math.random() * 3));
  currentRotation += extraTurns + forwardAdjustment;

  canvas.style.transform = `rotate(${currentRotation}deg)`;
  resultEl.innerHTML = '<span>SPINNING</span><strong>오늘의 장소를 고르는 중...</strong><p>Gate와 이동 정보를 함께 확인해요.</p>';

  const finishDelay = prefersReducedMotion ? 120 : 4300;
  window.setTimeout(() => {
    showRouletteResult(gate, places[pickedIndex]);
    spinBtn.disabled = false;
    rouletteGateEl.disabled = false;
    isSpinning = false;
  }, finishDelay);
}

function openSpaceModal(gateId, placeIndex, triggerElement) {
  if (!spaceModal || !modalImage || !modalType || !modalTitle || !modalMood || !modalDesc) return;
  const gate = gateById(gateId);
  const place = gate?.places?.[Number(placeIndex)];
  if (!place || !place.internal) return;

  lastFocusedElement = triggerElement || document.activeElement;
  modalImage.src = place.image;
  modalImage.alt = place.imageAlt || place.name;
  modalType.textContent = place.type;
  modalTitle.textContent = place.name;
  modalMood.textContent = place.mood;
  modalDesc.textContent = place.desc;
  spaceModal.hidden = false;
  document.body.classList.add('modal-open');
  modalCloseBtn?.focus();
}

function closeSpaceModal() {
  if (!spaceModal || spaceModal.hidden) return;
  spaceModal.hidden = true;
  document.body.classList.remove('modal-open');
  if (modalImage) modalImage.src = '';
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

function setupSpaceModal() {
  listEl?.addEventListener('click', (event) => {
    const button = event.target.closest('.detail-btn');
    if (!button) return;
    openSpaceModal(button.dataset.spaceGate, button.dataset.spaceIndex, button);
  });

  modalCloseBtn?.addEventListener('click', closeSpaceModal);
  spaceModal?.querySelector('[data-modal-close]')?.addEventListener('click', closeSpaceModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && spaceModal && !spaceModal.hidden) {
      closeSpaceModal();
    }
  });
}

function resolvePublicUrl() {
  const localHosts = new Set(['localhost', '127.0.0.1', '::1']);
  if (window.location.protocol === 'file:' || localHosts.has(window.location.hostname)) {
    return DEFAULT_DEPLOY_URL;
  }
  return window.location.href.split('#')[0];
}

function qrProviderUrl(providerIndex, url) {
  const encodedUrl = encodeURIComponent(url);
  const providers = [
    `https://quickchart.io/qr?size=300&margin=1&text=${encodedUrl}`,
    `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=${encodedUrl}`
  ];
  return providers[providerIndex] || providers[0];
}

function setupQr() {
  if (!qrImage || !copyLinkBtn) return;
  const publicUrl = resolvePublicUrl();
  activeQrProvider = 0;
  qrImage.src = qrProviderUrl(activeQrProvider, publicUrl);
  qrImage.addEventListener('error', () => {
    if (activeQrProvider >= 1) {
      qrImage.alt = 'QR 코드를 불러오지 못했습니다. 현재 주소 복사 버튼을 이용해 주세요.';
      return;
    }
    activeQrProvider += 1;
    qrImage.src = qrProviderUrl(activeQrProvider, publicUrl);
  });

  copyLinkBtn.addEventListener('click', async () => {
    const originalText = '현재 주소 복사';
    try {
      await navigator.clipboard.writeText(publicUrl);
      copyLinkBtn.textContent = '복사 완료';
      window.setTimeout(() => {
        copyLinkBtn.textContent = originalText;
      }, 1500);
    } catch (error) {
      window.prompt('아래 주소를 복사하세요.', publicUrl);
    }
  });
}

function setupActiveGateNav() {
  if (!navEl) return;

  const links = new Map(
    [...navEl.querySelectorAll('[data-gate-link]')].map((link) => [link.dataset.gateLink, link])
  );
  const sections = [...document.querySelectorAll('[data-gate-section]')];
  let lockedGateId = null;
  let scrollEndTimer = null;
  let fallbackUnlockTimer = null;
  let programmaticScrollStarted = false;

  // 탭 전체를 매번 가운데로 이동시키지 않고, 화면 밖으로 가려진 경우에만 최소한으로 노출합니다.
  const revealLink = (link) => {
    if (!link) return;
    const navRect = navEl.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const edgePadding = 8;
    let delta = 0;

    if (linkRect.left < navRect.left + edgePadding) {
      delta = linkRect.left - navRect.left - edgePadding;
    } else if (linkRect.right > navRect.right - edgePadding) {
      delta = linkRect.right - navRect.right + edgePadding;
    }

    if (Math.abs(delta) > 1) {
      navEl.scrollBy({
        left: delta,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  const setActive = (gateId, reveal = false) => {
    links.forEach((link, id) => {
      const isActive = id === gateId;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'location' : 'false');
    });

    if (reveal) revealLink(links.get(gateId));
  };

  const releaseClickLock = () => {
    if (!lockedGateId) return;
    const gateId = lockedGateId;
    lockedGateId = null;
    programmaticScrollStarted = false;
    window.clearTimeout(scrollEndTimer);
    window.clearTimeout(fallbackUnlockTimer);
    setActive(gateId, false);
  };

  navEl.addEventListener('click', (event) => {
    const link = event.target.closest('[data-gate-link]');
    if (!link) return;

    const gateId = link.dataset.gateLink;
    const target = document.getElementById(`gate-${gateId}`);
    if (!target) return;

    event.preventDefault();
    lockedGateId = gateId;
    programmaticScrollStarted = false;
    setActive(gateId, true);

    // 주소의 해시는 갱신하되, 브라우저의 기본 점프 동작은 막습니다.
    if (history.replaceState) {
      history.replaceState(null, '', `#gate-${gateId}`);
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });

    window.clearTimeout(fallbackUnlockTimer);
    fallbackUnlockTimer = window.setTimeout(releaseClickLock, prefersReducedMotion ? 160 : 1800);
  });

  // 스크롤 도중에는 지나가는 다른 Gate가 선택 상태를 빼앗지 못하게 합니다.
  window.addEventListener('scroll', () => {
    if (!lockedGateId) return;
    programmaticScrollStarted = true;
    window.clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(releaseClickLock, 180);
  }, { passive: true });

  if ('onscrollend' in window) {
    window.addEventListener('scrollend', () => {
      if (lockedGateId && programmaticScrollStarted) releaseClickLock();
    }, { passive: true });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (lockedGateId) {
        setActive(lockedGateId, false);
        return;
      }

      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries[0]) {
        setActive(visibleEntries[0].target.dataset.gateSection, false);
      }
    }, {
      rootMargin: '-28% 0px -58% 0px',
      threshold: [0, 0.05, 0.2]
    });

    sections.forEach((section) => observer.observe(section));
  }
}

function setupEvents() {
  rouletteGateEl?.addEventListener('change', (event) => {
    if (isSpinning) return;
    currentRotation = 0;
    if (canvas) canvas.style.transform = 'rotate(0deg)';
    drawWheel(gateById(event.target.value));
    if (resultEl) {
      resultEl.innerHTML = '<span>READY</span><strong>Gate를 선택하고 룰렛을 돌려주세요</strong><p>추천 장소와 이동시간·거리까지 바로 확인할 수 있어요.</p>';
    }
  });

  spinBtn?.addEventListener('click', spinWheel);

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (!isSpinning && rouletteGateEl?.value) {
        drawWheel(gateById(rouletteGateEl.value));
      }
    }, 120);
  });
}

function init() {
  if (!Array.isArray(GATES) || !GATES.length) return;
  renderNav();
  renderGateList();
  renderRouletteSelect();
  drawWheel(gateById(rouletteGateEl?.value));
  setupEvents();
  setupSpaceModal();
  setupQr();
  setupActiveGateNav();
}

init();
