# 하나로 PASS — 청라 HQ 모바일 가이드

하나금융그룹 제20기 SMART 홍보대사 활동용 정적 웹페이지입니다. 별도 빌드 과정 없이 HTML·CSS·JavaScript 파일만으로 실행됩니다.

## 최종 반영 내용

- 메인 타이틀을 `청라 라이프 가이드 미션`에서 `하나로 PASS`로 변경
- `본부 공항` 명칭을 모두 `청라 HQ`로 변경
- 청라 HQ 외관 및 내부 공간 콘셉트 이미지 7종 추가
- 기존 Coming Soon 영역을 청라 HQ 공간 미리보기 카드 6개로 교체
- 공간 카드의 `공간 자세히 보기` 버튼과 이미지 모달 기능 추가
- 런치·미팅·애프터·하나로컬 Gate 룰렛 정상 작동 및 중복 클릭 방지
- 모바일 터치 영역, 포커스 표시, 반응형 배치 및 가로 넘침 개선
- Gate 바로가기 활성 상태 표시 및 현재 섹션 연동
- QR 코드 2개 공급처 자동 대체 및 현재 주소 복사 기능 추가
- 배치 자료의 상세 도면은 외부 페이지에 포함하지 않고 공간 콘셉트만 반영

## 실행 방법

`index.html`을 더블클릭하거나, 폴더에서 아래 명령을 실행한 뒤 브라우저로 접속합니다.

```bash
python -m http.server 8000
```

접속 주소: `http://localhost:8000`

## GitHub Pages 배포

이 폴더 안의 파일과 `assets` 폴더를 저장소 최상단에 그대로 업로드합니다. GitHub Pages의 배포 주소가 아래 기본값과 다르면 `script.js` 상단의 `DEFAULT_DEPLOY_URL`만 실제 주소로 변경합니다.

```js
const DEFAULT_DEPLOY_URL = 'https://rich-hyun.github.io/cheongna-life-guide/';
```

정상 배포 후 `index.html`, `style.css`, `data.js`, `script.js`, 이미지 파일과 `assets` 폴더가 모두 같은 저장소에 있어야 합니다.
