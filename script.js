let currentRotation = 0;
const navEl = document.getElementById('gateNav');
const listEl = document.getElementById('gate-list');
const rouletteGateEl = document.getElementById('rouletteGate');
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const resultEl = document.getElementById('rouletteResult');
const qrImage = document.getElementById('qrImage');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const wheelColors = ['#006c5a','#009178','#00a886','#dff9ef','#f4fffb'];

function gateById(id){
  return GATES.find(g => g.id === id) || GATES[0];
}

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>'"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[s]));
}

function renderNav(){
  navEl.innerHTML = GATES.map(g => `<a href="#gate-${g.id}">${g.icon} ${escapeHtml(g.label)}</a>`).join('');
}

function renderPlaceCard(place){
  if(place.coming){
    return `
      <article class="place-card placeholder">
        <div class="placeholder-icon">${escapeHtml(place.travelIcon)}</div>
        <h3>${escapeHtml(place.name)}</h3>
        <p class="mood">${escapeHtml(place.mood)}</p>
        <span class="coming-pill">coming soon</span>
      </article>
    `;
  }
  return `
    <article class="place-card">
      <span class="type">${escapeHtml(place.type)}</span>
      <h3>${escapeHtml(place.name)}</h3>
      <p class="mood">${escapeHtml(place.mood)}</p>
      <p class="desc">${escapeHtml(place.desc)}</p>
      <div class="travel-chip"><span>${escapeHtml(place.travelIcon)}</span><strong>${escapeHtml(place.travel)}</strong></div>
      <a class="map-link" href="${place.map}" target="_blank" rel="noopener">네이버지도</a>
    </article>
  `;
}

function renderGateList(){
  listEl.innerHTML = GATES.map(g => `
    <section class="gate-block" id="gate-${g.id}" data-tone="${escapeHtml(g.tone)}">
      <header class="gate-head">
        <div class="gate-title"><span>${g.icon}</span><span>${escapeHtml(g.title)}</span></div>
        <div class="gate-subtitle">${escapeHtml(g.subtitle)}</div>
      </header>
      <p class="gate-intro">${escapeHtml(g.intro)}</p>
      <div class="place-grid">
        ${g.places.map(renderPlaceCard).join('')}
      </div>
    </section>
  `).join('');
}

function renderRouletteSelect(){
  const playable = GATES.filter(g => !g.places.every(p => p.coming));
  rouletteGateEl.innerHTML = playable.map(g => `<option value="${g.id}">${g.icon} ${escapeHtml(g.label)}</option>`).join('');
  rouletteGateEl.value = playable[0]?.id || 'lunch';
}

function drawWheel(gate){
  const dpr = window.devicePixelRatio || 1;
  const size = 420;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = `${size}px`;
  canvas.style.maxWidth = '100%';
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,size,size);

  const places = gate.places.filter(p => !p.coming);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 14;
  const slice = Math.PI * 2 / places.length;

  places.forEach((p, i) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, i * slice, (i + 1) * slice);
    ctx.closePath();
    ctx.fillStyle = wheelColors[i % wheelColors.length];
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255,255,255,.9)';
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(i * slice + slice / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = i >= 3 ? '#00463c' : '#ffffff';
    ctx.font = '900 18px system-ui, sans-serif';
    const label = p.name.length > 8 ? `${p.name.slice(0, 8)}…` : p.name;
    ctx.fillText(label, radius - 24, 6);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(cx, cy, 58, 0, Math.PI * 2);
  ctx.fillStyle = '#00463c';
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.font = '1000 23px system-ui, sans-serif';
  ctx.fillText('시작', cx, cy + 8);
}

function spinWheel(){
  const gate = gateById(rouletteGateEl.value);
  const places = gate.places.filter(p => !p.coming);
  const picked = Math.floor(Math.random() * places.length);
  const sliceDeg = 360 / places.length;
  const targetDeg = 270 - (picked * sliceDeg + sliceDeg / 2);
  const extra = 360 * (5 + Math.floor(Math.random() * 3));
  currentRotation += extra + targetDeg - (currentRotation % 360);
  canvas.style.transform = `rotate(${currentRotation}deg)`;
  spinBtn.disabled = true;
  resultEl.innerHTML = `<span>SPINNING</span><strong>오늘의 장소를 고르는 중...</strong><p>Gate와 이동 정보를 함께 확인해요.</p>`;

  window.setTimeout(() => {
    const p = places[picked];
    resultEl.innerHTML = `
      <span>${escapeHtml(gate.label)}</span>
      <strong>${escapeHtml(p.name)}</strong>
      <p>${escapeHtml(p.travelIcon)} ${escapeHtml(p.travel)} · ${escapeHtml(p.mood)}</p>
      <a class="map-link" href="${p.map}" target="_blank" rel="noopener">네이버지도에서 길 확인</a>
    `;
    spinBtn.disabled = false;
  }, 4300);
}

function setupQr(){
  const url = window.location.href.split('#')[0];
  qrImage.src = `https://quickchart.io/qr?size=300&margin=1&text=${encodeURIComponent(url)}`;
  copyLinkBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(url);
      copyLinkBtn.textContent = '복사 완료';
      setTimeout(() => copyLinkBtn.textContent = '현재 주소 복사', 1500);
    }catch(err){
      window.prompt('주소를 복사하세요', url);
    }
  });
}

rouletteGateEl.addEventListener('change', e => drawWheel(gateById(e.target.value)));
spinBtn.addEventListener('click', spinWheel);
window.addEventListener('resize', () => drawWheel(gateById(rouletteGateEl.value)));

renderNav();
renderGateList();
renderRouletteSelect();
drawWheel(gateById(rouletteGateEl.value));
setupQr();
