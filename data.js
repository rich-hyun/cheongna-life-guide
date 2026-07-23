const GATES = [
  {
    "id": "hq",
    "label": "청라 HQ",
    "title": "청라 HQ AIRPORT",
    "subtitle": "사옥 안에서 완성되는 하나의 업무 생태계",
    "tag": "CHEONGNA HQ",
    "icon": "🏢",
    "tone": "emerald",
    "roulette": false,
    "heroImage": "pictures/hq/hq-exterior.webp",
    "heroAlt": "하나금융그룹 청라 HQ 외관 콘셉트 이미지",
    "intro": "청라 HQ의 핵심 공간을 정리했습니다. 실제 운영·출입 가능 범위와 세부 시설은 현장 안내에 따라 달라질 수 있습니다.",
    "highlights": [
      "약 1.1km 나선형 보행 램프",
      "개방형 업무 공간",
      "스카이파크",
      "배달존·개별 양치실"
    ],
    "places": [
      {
        "name": "나선형 보행 램프",
        "type": "공용 동선",
        "mood": "1층부터 15층까지 이어지는 약 1.1km 보행 램프",
        "desc": "365일 지역사회와 호흡하려는 하나금융의 철학을 담은 열린 동선입니다.",
        "image": "pictures/hq/hq-atrium.webp",
        "imageAlt": "여러 층을 연결하는 청라 HQ 내부 동선 콘셉트 이미지",
        "internal": true
      },
      {
        "name": "개방형 업무 공간",
        "type": "워크스페이스",
        "mood": "원하는 장소에서 자유롭게 몰입하고 협업하는 공간",
        "desc": "공간의 경계를 낮춰 개인 업무와 팀 협업을 유연하게 전환할 수 있도록 구성된 업무 공간입니다.",
        "image": "pictures/hq/hq-collaboration.webp",
        "imageAlt": "청라 HQ 개방형 업무·협업 공간 콘셉트 이미지",
        "internal": true
      },
      {
        "name": "스카이파크",
        "type": "루프·휴식",
        "mood": "청라 전경과 서해 바다를 바라보며 쉬어가는 공간",
        "desc": "일상 속 재충전을 돕는 청라 HQ 상부의 힐링 공간입니다.",
        "image": "pictures/hq/hq-rooftop.webp",
        "imageAlt": "청라 HQ 스카이파크 콘셉트 이미지",
        "internal": true
      },
      {
        "name": "배달존 & 개별 양치실",
        "type": "임직원 편의",
        "mood": "일상 속 재충전을 위한 세심한 편의 공간",
        "desc": "식사와 휴식 이후의 동선까지 고려해 임직원 편의와 컨디션 관리를 지원합니다.",
        "image": "pictures/hq/hq-lounge.webp",
        "imageAlt": "청라 HQ 임직원 편의 공간 콘셉트 이미지",
        "internal": true
      }
    ]
  },
  {
    "id": "lunch",
    "label": "런치 Gate",
    "title": "GATE 01 | 런치 게이트",
    "subtitle": "오늘 점심, 고민 대신 탑승하세요",
    "tag": "LUNCH",
    "icon": "🍽️",
    "tone": "mint",
    "intro": "청라 HQ 인근의 점심 코스입니다. 이동시간과 거리는 제작 시점 기준이며 교통 상황에 따라 달라질 수 있습니다.",
    "places": [
      {
        "name": "양양입암막국수 THE청라",
        "image": "pictures/gate1/lunch1.png",
        "imageAlt": "양양입암막국수 THE청라 매장 외관",
        "type": "막국수",
        "mood": "시원한 물막국수",
        "desc": "사옥에서 가장 가까운 점심 후보로 소개된 시원한 막국수 코스입니다.",
        "travel": "차로 약 11분 · 5.9km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%96%91%EC%96%91%EC%9E%85%EC%95%94%EB%A7%89%EA%B5%AD%EC%88%98%20THE%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "삼대청국장 청라본점",
        "image": "pictures/gate1/lunch2.png",
        "imageAlt": "삼대청국장 청라본점 매장 외관",
        "type": "청국장·한식",
        "mood": "3대째 끓이는 든든한 청국장 한 상",
        "desc": "따뜻한 청국장과 정식 메뉴로 든든하게 점심을 채우기 좋은 한식 코스입니다.",
        "travel": "차로 약 12분 · 5.5km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%82%BC%EB%8C%80%EC%B2%AD%EA%B5%AD%EC%9E%A5%20%EC%B2%AD%EB%9D%BC%EB%B3%B8%EC%A0%90"
      },
      {
        "name": "두진옥 수제순두부",
        "image": "pictures/gate1/lunch3.png",
        "imageAlt": "두진옥 수제순두부 매장 외관",
        "type": "순두부·한식",
        "mood": "매일 직접 만드는 순두부 정식",
        "desc": "부드러운 수제 순두부와 정식 메뉴를 편안하게 즐길 수 있는 점심 코스입니다.",
        "travel": "차로 약 14분 · 6.3km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EB%91%90%EC%A7%84%EC%98%A5%20%EC%88%98%EC%A0%9C%EC%88%9C%EB%91%90%EB%B6%80%EC%A0%84%EB%AC%B8%EC%A0%90%20%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "상차이 청라점",
        "image": "pictures/gate1/lunch4.png",
        "imageAlt": "상차이 청라점 매장 외관",
        "type": "중식",
        "mood": "고급스러운 분위기와 합리적인 중식 코스",
        "desc": "점심 식사부터 팀 모임까지 활용하기 좋은 청라 중식 코스입니다.",
        "travel": "차로 약 12분 · 5.4km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%83%81%EC%B0%A8%EC%9D%B4%20%EC%B2%AD%EB%9D%BC%EC%A0%90"
      }
    ]
  },
  {
    "id": "meeting",
    "label": "미팅 Gate",
    "title": "GATE 02 | 미팅 게이트",
    "subtitle": "공간 선택부터 성공적인 미팅의 시작",
    "tag": "MEETING",
    "icon": "☕",
    "tone": "aqua",
    "intro": "소규모 대화, 전망을 즐기는 미팅, 중요한 행사까지 목적에 맞게 고를 수 있는 카페 코스입니다.",
    "places": [
      {
        "name": "Café 84KM",
        "image": "pictures/gate2/meet1.png",
        "imageAlt": "Café 84KM 매장 외관",
        "type": "감성 카페",
        "mood": "편안한 소규모 모임에 추천",
        "desc": "차분한 분위기에서 짧은 회의나 캐주얼한 대화를 나누기 좋은 공간입니다.",
        "travel": "차로 약 14분 · 6.2km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%2084KM%20%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "6층커피집",
        "image": "pictures/gate2/meet2.png",
        "imageAlt": "6층커피집 내부 좌석",
        "type": "루프탑 카페",
        "mood": "멋진 루프탑 뷰를 즐기고 싶을 때 추천",
        "desc": "커낼웨이 전망과 다양한 좌석을 갖춰 여유 있는 미팅에 어울리는 공간입니다.",
        "travel": "차로 약 14분 · 6.3km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/6%EC%B8%B5%EC%BB%A4%ED%94%BC%EC%A7%91%20%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "육츠커피 플래그십 스토어",
        "image": "pictures/gate2/meet3.png",
        "imageAlt": "육츠커피 플래그십 스토어 내부",
        "type": "플래그십 카페",
        "mood": "중요한 미팅과 행사에 추천",
        "desc": "넓은 공간과 전문적인 커피 경험을 함께 원하는 미팅에 적합한 후보입니다.",
        "travel": "차로 약 23분 · 13km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%9C%A1%EC%B8%A0%EC%BB%A4%ED%94%BC%20%EC%B2%AD%EB%9D%BC%EB%B3%B8%EC%A0%90"
      }
    ]
  },
  {
    "id": "after",
    "label": "애프터 Gate",
    "title": "GATE 03 | 애프터 게이트",
    "subtitle": "수고한 하루를 맛있게 마무리하세요!",
    "tag": "AFTER",
    "icon": "🥂",
    "tone": "blue",
    "intro": "곱창, 시푸드, 퓨전 일식, 우대갈비까지 퇴근 후 분위기와 모임 성격에 맞춰 선택할 수 있는 저녁 코스입니다.",
    "places": [
      {
        "name": "곱창남 청라점",
        "image": "pictures/gate3/after-01.png",
        "imageAlt": "곱창 요리가 차려진 곱창남 청라점 참고 이미지",
        "type": "곱창·회식",
        "mood": "팀 회식 1순위 · 알찬 곱창",
        "desc": "푸짐한 곱창 메뉴를 함께 즐기며 하루를 든든하게 마무리하기 좋은 팀 회식 코스입니다.",
        "travel": "차로 약 15분 · 6.6km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EA%B3%B1%EC%B0%BD%EB%82%A8%20%EC%B2%AD%EB%9D%BC%EC%A0%90"
      },
      {
        "name": "쇼미더크랩 청라점",
        "image": "pictures/gate3/after-02.png",
        "imageAlt": "시푸드 메뉴 참고 이미지",
        "type": "시푸드",
        "mood": "푸짐한 시푸드 회식",
        "desc": "보일링크랩을 비롯한 풍성한 시푸드 메뉴를 여러 사람이 함께 나누기 좋은 저녁 코스입니다.",
        "travel": "차로 약 16분 · 7.1km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%87%BC%EB%AF%B8%EB%8D%94%ED%81%AC%EB%9E%A9%20%EC%B2%AD%EB%9D%BC%EC%A0%90"
      },
      {
        "name": "오다치",
        "image": "pictures/gate3/after-03.png",
        "imageAlt": "오다치 퓨전 일식 메뉴 이미지",
        "type": "퓨전 일식",
        "mood": "느낌 좋은 퓨전 일식당",
        "desc": "감각적인 분위기에서 다양한 퓨전 일식 메뉴를 즐기며 하루를 마무리하기 좋은 저녁 코스입니다.",
        "travel": "차로 약 15분 · 6.7km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%98%A4%EB%8B%A4%EC%B9%98%20%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "돌담우대갈비 청라점",
        "image": "pictures/gate3/after-04.png",
        "imageAlt": "돌담우대갈비 청라점 우대갈비 이미지",
        "type": "우대갈비·회식",
        "mood": "참숯 직화로 굽는 갈비 전문점",
        "desc": "참숯 직화로 초벌한 우대갈비를 편안한 공간에서 즐길 수 있어 단체 모임과 회식에 잘 어울리는 저녁 코스입니다.",
        "travel": "차로 약 16분 · 7.0km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EB%8F%8C%EB%8B%B4%EC%9A%B0%EB%8C%80%EA%B0%88%EB%B9%84%20%EC%B2%AD%EB%9D%BC%EC%A0%90"
      }
    ]
  },
  {
    "id": "local",
    "label": "하나로컬 Gate",
    "title": "GATE 04 | 하나 로컬 게이트",
    "subtitle": "노을과 물길을 따라 만나는 청라의 매력",
    "tag": "LOCAL",
    "icon": "📍",
    "tone": "lime",
    "intro": "노을, 전망, 수변 산책, 생태 전시를 한 번에 만나는 청라 대표 로컬 코스입니다.",
    "places": [
      {
        "name": "정서진",
        "image": "pictures/gate4/local-01.png",
        "imageAlt": "노을이 아름다운 정서진",
        "type": "노을 명소",
        "mood": "서해로 지는 아름다운 노을",
        "desc": "노을과 함께하는 청라·아라뱃길 권역의 대표 명소입니다.",
        "travel": "차로 약 10분 · 4.5km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%A0%95%EC%84%9C%EC%A7%84"
      },
      {
        "name": "아라타워 전망대",
        "image": "pictures/gate4/local-02.png",
        "imageAlt": "아라타워 전망대",
        "type": "전망대",
        "mood": "아라뱃길과 청라 도심을 한눈에",
        "desc": "서해와 아라뱃길 주변 풍경을 감상할 수 있는 무료 전망 코스입니다.",
        "travel": "차로 약 10분 · 4.6km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%95%84%EB%9D%BC%ED%83%80%EC%9B%8C%20%EC%A0%84%EB%A7%9D%EB%8C%80"
      },
      {
        "name": "커낼웨이 수변공원",
        "image": "pictures/gate4/local-03.png",
        "imageAlt": "청라 커낼웨이 수변 산책로",
        "type": "수변 산책",
        "mood": "물길 따라 펼쳐진 산책길",
        "desc": "수로를 따라 산책로와 상가, 휴식 공간이 이어지는 청라의 대표 수변 코스입니다.",
        "travel": "차로 약 13분 · 5.8km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EC%BB%A4%EB%82%BC%EC%9B%A8%EC%9D%B4%20%EC%88%98%EB%B3%80%EA%B3%B5%EC%9B%90%20%EC%B2%AD%EB%9D%BC"
      },
      {
        "name": "국립생물자원관",
        "image": "pictures/gate4/local-04.png",
        "imageAlt": "국립생물자원관 생물 전시 공간",
        "type": "생태·문화",
        "mood": "다양한 생물 전시를 만나는 공간",
        "desc": "생물다양성과 생태를 전시와 체험으로 살펴볼 수 있는 실내 문화 코스입니다.",
        "travel": "차로 약 13분 · 6.0km",
        "travelIcon": "🚗",
        "map": "https://map.naver.com/p/search/%EA%B5%AD%EB%A6%BD%EC%83%9D%EB%AC%BC%EC%9E%90%EC%9B%90%EA%B4%80"
      }
    ]
  }
];
