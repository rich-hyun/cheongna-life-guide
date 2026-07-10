const GATES = [
  {
    id: 'hq',
    label: '본부 공항',
    title: '본부 공항 내부 COMING SOON',
    subtitle: '청라 HQ 내부 공간 안내는 추후 업데이트 예정',
    tag: 'HQ AIRPORT',
    icon: '🏢',
    tone: 'emerald',
    intro: '청라 라이프 가이드의 출발점입니다. 내부 장소는 현재처럼 비워두고, 실제 동선 확인 후 채워 넣을 수 있게 Coming Soon 카드로 유지했습니다.',
    places: [
      {
        name: '로비 라운지',
        type: '본부 내부',
        mood: '첫 방문 체크인',
        desc: '청라 HQ 방문과 미션 시작을 안내할 공간입니다.',
        travel: 'coming soon',
        travelIcon: '⏳',
        map: '#',
        coming: true
      },
      {
        name: '카페테리아',
        type: '본부 내부',
        mood: '사내 식사·휴식',
        desc: '사내 식사와 휴게공간 정보 입력 예정입니다.',
        travel: 'coming soon',
        travelIcon: '⏳',
        map: '#',
        coming: true
      },
      {
        name: '회의존',
        type: '본부 내부',
        mood: '미팅·업무',
        desc: '회의실과 협업 공간 정보 입력 예정입니다.',
        travel: 'coming soon',
        travelIcon: '⏳',
        map: '#',
        coming: true
      }
    ]
  },
  {
    id: 'lunch',
    label: '런치 Gate',
    title: '런치 Gate',
    subtitle: '든든한 점심 추천',
    tag: 'LUNCH',
    icon: '🍽️',
    tone: 'mint',
    intro: '점심시간에 빠르게 다녀오기 좋은 청라 HQ 주변 식당 코스입니다.',
    places: [
      {
        name: '삼대청국장 청라본점',
        type: '한식',
        mood: '든든한 한식',
        desc: '속 편하게 먹기 좋은 한식 점심 코스입니다.',
        travel: '차로 약 9분 · 3.8km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%82%BC%EB%8C%80%EC%B2%AD%EA%B5%AD%EC%9E%A5%20%EC%B2%AD%EB%9D%BC%EB%B3%B8%EC%A0%90'
      },
      {
        name: '두진옥 수제순두부',
        type: '순두부',
        mood: '부담 없는 점심',
        desc: '가볍지만 든든하게 먹기 좋은 순두부 코스입니다.',
        travel: '차로 약 10분 · 4.1km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EB%91%90%EC%A7%84%EC%98%A5%20%EC%88%98%EC%A0%9C%EC%88%9C%EB%91%90%EB%B6%80'
      },
      {
        name: '은옥 청라본점',
        type: '돈까스',
        mood: '정갈한 돈까스',
        desc: '깔끔한 메뉴 구성이 필요한 점심에 어울립니다.',
        travel: '차로 약 11분 · 4.6km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%9D%80%EC%98%A5%20%EC%B2%AD%EB%9D%BC%EB%B3%B8%EC%A0%90'
      },
      {
        name: '해밀루',
        type: '식당',
        mood: '점심 회식에도 좋은 곳',
        desc: '여럿이 가도 무난한 점심·식사 후보입니다.',
        travel: '차로 약 8분 · 3.4km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%ED%95%B4%EB%B0%80%EB%A3%A8%20%EC%B2%AD%EB%9D%BC'
      }
    ]
  },
  {
    id: 'meeting',
    label: '미팅 Gate',
    title: '미팅 Gate',
    subtitle: '편안한 미팅 장소',
    tag: 'MEETING',
    icon: '☕',
    tone: 'aqua',
    intro: '외부 미팅, 짧은 회의, 아이디어 정리에 어울리는 카페형 게이트입니다.',
    places: [
      {
        name: 'COSMO 40',
        type: '대형 카페',
        mood: '공간감 좋은 대형 카페',
        desc: '넓은 공간과 분위기가 필요한 미팅에 어울립니다.',
        travel: '차로 약 8분 · 3.5km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/COSMO%2040'
      },
      {
        name: 'Cafe Rari 청라점',
        type: '카페',
        mood: '가벼운 미팅용 카페',
        desc: '짧은 대화나 커피 미팅에 적합한 후보입니다.',
        travel: '차로 약 10분 · 4.2km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/Cafe%20Rari%20%EC%B2%AD%EB%9D%BC%EC%A0%90'
      },
      {
        name: '6층 커피집',
        type: '카페',
        mood: '조용한 좌석',
        desc: '차분하게 앉아 이야기하기 좋은 카페 코스입니다.',
        travel: '차로 약 12분 · 4.9km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/6%EC%B8%B5%20%EC%BB%A4%ED%94%BC%EC%A7%91%20%EC%B2%AD%EB%9D%BC'
      },
      {
        name: '카페 개제',
        type: '카페',
        mood: '감성 있는 티타임',
        desc: '분위기 있는 대화와 티타임에 어울리는 카페입니다.',
        travel: '차로 약 14분 · 5.6km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%20%EA%B0%9C%EC%A0%9C%20%EC%B2%AD%EB%9D%BC'
      }
    ]
  },
  {
    id: 'after',
    label: '애프터 Gate',
    title: '애프터 Gate',
    subtitle: '퇴근 후 힐링 & 저녁',
    tag: 'AFTER',
    icon: '🥂',
    tone: 'blue',
    intro: '퇴근 후 저녁, 산책, 야간 카페 무드까지 하루를 마무리하는 코스입니다.',
    places: [
      {
        name: '쇼미더크랩 청라점',
        type: '해산물',
        mood: '퇴근 후 특별한 저녁',
        desc: '조금 특별한 저녁 모임이 필요할 때 추천하는 코스입니다.',
        travel: '차로 약 12분 · 5.0km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%87%BC%EB%AF%B8%EB%8D%94%ED%81%AC%EB%9E%A9%20%EC%B2%AD%EB%9D%BC%EC%A0%90'
      },
      {
        name: 'Taco Dot',
        type: '멕시칸',
        mood: '캐주얼한 저녁 모임',
        desc: '퇴근 후 가볍게 분위기를 바꾸기 좋은 저녁 후보입니다.',
        travel: '차로 약 15분 · 6.1km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/Taco%20Dot%20%EC%B2%AD%EB%9D%BC'
      },
      {
        name: '카페다이브',
        type: '야간 카페',
        mood: '야간 카페 무드',
        desc: '식사 후 대화하거나 가볍게 쉬기 좋은 카페 코스입니다.',
        travel: '차로 약 13분 · 5.4km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%EB%8B%A4%EC%9D%B4%EB%B8%8C%20%EC%B2%AD%EB%9D%BC'
      },
      {
        name: '청라호수공원',
        type: '공원',
        mood: '가볍게 산책하는 코스',
        desc: '퇴근 후 머리 식히며 걷기 좋은 청라 대표 산책지입니다.',
        travel: '도보 약 18분 · 1.4km',
        travelIcon: '🚶',
        map: 'https://map.naver.com/p/search/%EC%B2%AD%EB%9D%BC%ED%98%B8%EC%88%98%EA%B3%B5%EC%9B%90'
      }
    ]
  },
  {
    id: 'local',
    label: '하나로컬 Gate',
    title: '하나로컬 Gate',
    subtitle: '청라의 명소 & 핫플',
    tag: 'LOCAL',
    icon: '📍',
    tone: 'lime',
    intro: '청라에 처음 오는 사람에게 소개하기 좋은 지역 공간과 주말 코스입니다.',
    places: [
      {
        name: '정서진',
        type: '일몰 명소',
        mood: '석양 명소',
        desc: '서해 노을을 보기 좋은 인천 서구 대표 로컬 명소입니다.',
        travel: '차로 약 18분 · 10.5km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%A0%95%EC%84%9C%EC%A7%84'
      },
      {
        name: '청라 커낼웨이',
        type: '수변 산책',
        mood: '청라를 느끼는 산책 코스',
        desc: '청라 중심 생활권 분위기를 느낄 수 있는 수변 산책 코스입니다.',
        travel: '도보 약 16분 · 1.2km',
        travelIcon: '🚶',
        map: 'https://map.naver.com/p/search/%EC%B2%AD%EB%9D%BC%20%EC%BB%A4%EB%82%BC%EC%9B%A8%EC%9D%B4'
      },
      {
        name: '아라타워 전망대',
        type: '전망대',
        mood: '탁 트인 전망',
        desc: '정서진과 아라뱃길을 함께 둘러보기 좋은 전망 코스입니다.',
        travel: '차로 약 20분 · 11.8km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EC%95%84%EB%9D%BC%ED%83%80%EC%9B%8C%20%EC%A0%84%EB%A7%9D%EB%8C%80'
      },
      {
        name: '국립생물자원관',
        type: '전시·문화',
        mood: '주말 가볍게 둘러보기',
        desc: '생태 전시와 교육 콘텐츠를 볼 수 있는 지역 문화 공간입니다.',
        travel: '차로 약 12분 · 5.0km',
        travelIcon: '🚗',
        map: 'https://map.naver.com/p/search/%EA%B5%AD%EB%A6%BD%EC%83%9D%EB%AC%BC%EC%9E%90%EC%9B%90%EA%B4%80'
      }
    ]
  }
];
