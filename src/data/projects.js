import {
  FileText,
  MessageSquare,
  LayoutDashboard,
  Bell,
  UserCheck,
  MapPin,
  Calendar
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 'ai-lawyer',
    category: 'web',
    title: 'AI-Lawyer',
    subtitle: '올라운드 법률 에이전트',
    heroTagline: '어렵고 복잡한 법률 리스크, AI와 함께라면 명확해집니다.',
    heroDescription: '전문적인 계약서 분석부터 실시간 사후 감시까지, 올라운드 법률 에이전트 AI-Lawyer를 소개합니다.',
    heroBg: `${baseUrl}assets/projects/ai-lawyer/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/ashfortune/AI-Lawyer',
    about: 'AI-Lawyer는 복잡한 법률 용어와 높은 자문 비용으로 인해 법적 접근성이 낮은 개인 및 소상공인을 위해 개발되었습니다. 사용자가 업로드한 계약서의 유불리 조항을 정밀 분석하고, 실시간 RAG 기반 챗봇 상담을 통해 법률 리스크를 사전에 예방합니다.',
    features: [
      {
        icon: FileText,
        title: '빠른 계약서 분석',
        description: '업로드된 계약서의 핵심 내용을 AI가 즉시 파악하여 요약해 드립니다. 주요 조항과 리스크 요소를 한눈에 확인하세요.',
        videoSrc: `${baseUrl}assets/projects/ai-lawyer/videos/quick-analysis.mp4`,
        poster: '',
        reverse: true
      },
      {
        icon: FileText,
        title: '상세 독소조항 분석',
        description: 'Gemini 2.5 Pro를 활용하여 계약서 내의 잠재적 리스트와 독소 조항을 정밀하게 추출합니다. 각 조항에 대한 법적 근거와 대응 방안을 제시합니다.',
        videoSrc: `${baseUrl}assets/projects/ai-lawyer/videos/detailed-analysis.mp4`,
        poster: ''
      },
      {
        icon: FileText,
        title: '계약서 조항 비교',
        description: '표준 계약서와 당신의 계약서를 평행하게 비교하여 빠진 조항이나 수정이 필요한 부분을 명확하게 짚어냅니다.',
        videoSrc: `${baseUrl}assets/projects/ai-lawyer/videos/contract-comparison.mp4`,
        poster: '',
        reverse: true
      },
      {
        icon: LayoutDashboard,
        title: '실시간 관리 대시보드',
        description: '전체 계약 현황과 리스크 분포를 한눈에 파악하세요. Recharts를 활용한 데이터 시각화로 직관적인 분석 결과를 확인 할 수 있습니다.',
        videoSrc: `${baseUrl}assets/projects/ai-lawyer/videos/dashboard.mp4`,
        poster: ''
      },
      {
        icon: UserCheck,
        title: '간편 회원가입 및 로그인',
        description: '보안이 강화된 간편 인증 시스템을 통해 누구나 쉽게 가입하고 안전하게 계약서를 관리할 수 있습니다.',
        videoSrc: `${baseUrl}assets/projects/ai-lawyer/videos/auth-flow.mp4`,
        poster: '',
        reverse: true
      }
    ],
    techStack: [
      { title: "Backend", items: ["Spring Boot 3.5", "Java 17", "JPA / Hibernate", "Spring Security"] },
      { title: "Frontend", items: ["Next.js 15", "React 19", "Tailwind CSS 4", "Recharts"] },
      { title: "AI & DB", items: ["LangChain4j", "Gemini / Groq LLM", "Supabase", "pgvector"] },
      { title: "DevOps", items: ["Docker", "Koyeb (BE)", "Netlify (FE)", "Git / GitHub"] }
    ],
    team: [
      { name: "유재복 (PM)", role: "문서분석 / RAG 챗봇" },
      { name: "탁유제 (PL)", role: "대시보드 / UI 설계" },
      { name: "문광명 (Dev)", role: "계약 분석 / DB 설계" },
      { name: "강민재 (Dev)", role: "알림 시스템 구축" },
      { name: "박시원 (Dev)", role: "회원가입 / 보안" },
      { name: "이진영 (Dev)", role: "로그인 / 인증" }
    ]
  },
  {
    id: 'stocklab',
    category: 'web',
    title: 'StockLab',
    subtitle: '데이터 분석 기반의 올인원 모의 주식 투자 플랫폼',
    heroTagline: 'Investigate & Simulate, Innovate Your Investment',
    heroDescription: '현대적인 웹 환경에서 데이터 분석과 안정적인 주식 매매를 지원하는 플랫폼입니다. Flask의 모듈형 아키텍처와 실시간 통신 기술을 활용하여 사용자에게 직관적이고 강력한 투자 도구를 제공합니다.',
    heroBg: `${baseUrl}assets/projects/stocklab/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/ashfortune/StockLab',
    about: 'StockLab은 실제 자산 손실 없이 투자 전략을 테스트하고 싶은 사용자를 위해 개발되었습니다. KIS API의 실시간 시세를 바탕으로 정교한 가상 매매를 지원하며, AI가 사용자의 투자 성향을 분석하여 최적화된 리밸런싱 전략을 제안하는 "투자 실험실"입니다.',
    features: [
      {
        icon: LayoutDashboard,
        title: '통합 대시보드 및 분석 리포트',
        description: 'Charts.js와 D3.js를 활용하여 주가 변동 및 포트폴리오 비중을 시각화하고, 진보된 알고리즘을 기반으로 한 상세 투자 분석 리포트를 제공합니다.',
        videoSrc: `${baseUrl}assets/projects/stocklab/videos/dashboard-report.mp4`,
        poster: '',
        reverse: true
      },
      {
        icon: MessageSquare,
        title: '실시간 트레이딩 시스템',
        description: 'Socket.IO 연동을 통한 실시간 체결 엔진으로 정교한 매수/매도 로직을 가동하며, 자산 동결 처리 및 서비스 레이어 패턴으로 데이터 무결성을 확보했습니다.',
        videoSrc: `${baseUrl}assets/projects/stocklab/videos/trading-system.mp4`,
        poster: ''
      },
      {
        icon: UserCheck,
        title: '데이터 기반 관리 및 주문 분석',
        description: '매매 내역의 상세 추적과 체계적인 관리를 위해 주문 로그 및 관리 콘솔을 제공합니다. 실시간 데이터 동기화를 통해 모든 거래의 흐름을 한눈에 파악하고 전략을 점검할 수 있습니다.',
        videoSrc: `${baseUrl}assets/projects/stocklab/videos/auth-security.mp4`,
        poster: '',
        reverse: true
      }
    ],
    techStack: [
      { title: "Backend", items: ["Flask 3.0.3", "Python 3.10", "Flask-SocketIO", "Flask-JWT-Extended"] },
      { title: "Frontend", items: ["Jinja2", "Vanilla JavaScript", "Tailwind CSS", "Charts.js", "D3.js"] },
      { title: "Database", items: ["MariaDB", "Redis (Pub-Sub / Token Management)"] },
      { title: "External API", items: ["KIS API", "Gemini AI"] }
    ],
    team: [
      { name: "유재복 (PM)", role: "실시간 체결 엔진 (Execution Engine)" },
      { name: "탁유제 (PL)", role: "시장 데이터 및 관리자 API (Market Data)" },
      { name: "박시원", role: "보안 인증 및 인프라 (Auth & Infra)" },
      { name: "이진영", role: "보안 인증 및 초기 자금 로직 (Auth & Infra)" },
      { name: "문광명", role: "트레이딩 시스템 설계 (Trading System)" },
      { name: "강민재", role: "AI 분석 및 스케줄러 (AI & Analytics)" }
    ]
  },
  {
    id: 'haruseoul',
    category: 'web',
    title: 'HaruSeoul',
    subtitle: '서울의 하루를 특별하게 만드는 로컬 경험',
    heroTagline: '현지인과 함께하는 특별한 서울의 하루',
    heroDescription: '개인 호스트가 기획한 창의적인 투어를 통해 획일화된 여행을 넘어 진짜 서울을 만납니다.',
    heroBg: `${baseUrl}assets/projects/haruseoul/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/ashfortune/HaruSeoul',
    about: 'HaruSeoul은 서울 시민이 직접 가이드가 되어 자신만의 독창적인 여행 프로그램을 공유하는 예약 플랫폼입니다. 낮은 진입 장벽으로 누구나 호스트가 될 수 있으며, 게스트는 실시간 SSE 알림 시스템을 통해 끊김 없는 예약 경험을 누릴 수 있습니다.',
    features: [
      {
        icon: MapPin,
        title: '직관적인 프로그램 탐색 (Guest)',
        description: '카테고리, 날짜, 상태별 다중 필터를 적용하여 원하는 로컬 경험을 즉시 찾아낼 수 있는 고도화된 검색 시스템을 구축했습니다.',
        videoSrc: `${baseUrl}assets/projects/haruseoul/images/guest-portal.jpg`,
        poster: ''
      },
      {
        icon: Calendar,
        title: '호스트 예약 관리 거버넌스',
        description: '호스트는 프로그램 등록부터 게스트의 예약 신청을 실시간으로 승인하거나 거절하며 유연하게 운영할 수 있습니다.',
        videoSrc: `${baseUrl}assets/projects/haruseoul/images/host-portal.jpg`,
        poster: '',
        reverse: true
      },
      {
        icon: Bell,
        title: '실시간 SSE 알림 시스템',
        description: 'ConcurrentHashMap 기반의 세션 관리와 생명주기 콜백을 활용하여, 예약 상태 변화를 호스트와 게스트에게 즉각적이고 안정적으로 전달합니다.',
        videoSrc: `${baseUrl}assets/projects/haruseoul/images/notification.jpg`,
        poster: ''
      }
    ],
    techStack: [
      { title: "Backend", items: ["Spring Boot 3.3", "Java 21", "Spring Security", "JPA / MyBatis"] },
      { title: "Frontend", items: ["Nuxt 3", "Vue 3", "SCSS", "Axios"] },
      { title: "System", items: ["MariaDB", "SSE (Real-time Notification)", "JWT Auth"] }
    ],
    team: [
      { name: "김민지 (PM)", role: "호스트 관리 시스템 구축" },
      { name: "김민석 (PL)", role: "예약 승인 로직 및 관리" },
      { name: "유재복", role: "프로그램 필터 고도화" },
      { name: "김준성", role: "예약 신청 및 마이페이지" }
    ]
  },
  {
    id: 'food-analyzer',
    category: 'ai',
    title: 'Food Analyzer',
    subtitle: 'YOLOv8 기반의 실시간 음식 인식 및 영양 분석 솔루션',
    heroTagline: '당신의 식탁을 더 스마트하게, 영양까지 꼼꼼하게',
    heroDescription: 'YOLOv8 딥러닝 모델을 활용하여 사진 속 음식을 자동으로 인식하고, 실시간 영양 정보(칼로리, 탄단지)를 분석하여 식단 관리를 돕습니다.',
    heroBg: `${baseUrl}assets/projects/food-analyzer/images/results4.png`,
    githubUrl: 'https://github.com/ashfortune/DeepLearning',
    about: 'Food Analyzer는 현대인의 체계적인 식단 관리를 위해 개발된 인공지능 솔루션입니다. 사용자가 식사 전 사진을 찍으면 YOLOv8 알고리즘이 163종의 음식을 정밀 탐지하며, FatSecret API 연동을 통해 즉각적인 영양 성분 보고서를 생성합니다.',
    features: [
      {
        icon: FileText,
        title: '커스텀 데이터셋 분석',
        description: '163개 클래스로 구성된 finalfood 커스텀 데이터셋의 라벨 분포와 객체 크기 분포를 분석하여 학습 품질을 관리합니다.',
        videoSrc: `${baseUrl}assets/projects/food-analyzer/images/labels.jpg`,
        poster: ''
      },
      {
        icon: LayoutDashboard,
        title: '정밀한 모델 성능 지표',
        description: '학습 과정에서 Box, Class, DFL 손실 함수의 수렴 과정을 모니터링하며 mAP50 및 mAP50-95 지표를 통해 모델의 탐지 정밀도를 확보했습니다.',
        videoSrc: `${baseUrl}assets/projects/food-analyzer/images/results4.png`,
        poster: '',
        reverse: true
      },
      {
        icon: UserCheck,
        title: '혼동 행렬(Confusion Matrix) 분석',
        description: '총 163종의 음식 클래스 간 분류 성능을 시각적으로 분석하여, 유사한 음식 간의 오인식 가능성을 사전에 파악하고 개선합니다.',
        videoSrc: `${baseUrl}assets/projects/food-analyzer/images/confusion_matrix_normalized.png`,
        poster: ''
      }
    ],
    techStack: [
      { title: "Deep Learning", items: ["Python", "Ultralytics YOLOv8", "Roboflow"] },
      { title: "Application", items: ["Streamlit", "PIL", "OpenCV", "NumPy"] },
      { title: "Data & API", items: ["FatSecret Platform API", "JSON Database", "Pandas"] },
      { title: "Environment", items: ["Dotenv", "Git / GitHub"] }
    ],
    team: [
      { name: "유재복 (Ash Fortune)", role: "PM / ML Engineer / App Dev" }
    ]
  },
  {
    id: 'house-pricing',
    category: 'ai',
    title: 'Seoul Real Estate Predictor',
    subtitle: '서울시 부동산 실거래가 예측 인공지능 엔진',
    heroTagline: '데이터로 예측하는 서울의 내일, 부동산 가치의 재발견',
    heroDescription: '서울시 전역의 실거래 데이터를 XGBoost 알고리즘으로 학습하여, 정밀한 주택 매매가 예측과 핵심 가격 결정 요인 분석을 제공합니다.',
    heroBg: `${baseUrl}assets/projects/house-pricing/images/actual_vs_predicted_xgb.png`,
    githubUrl: 'https://github.com/ashfortune/MachineLearning',
    about: 'Seoul Real Estate AI Price Predictor는 복잡한 서울 부동산 시장의 흐름을 데이터로 읽어내기 위해 개발되었습니다. 2024-2026년 실거래 데이터를 바탕으로 주택의 물리적 특성과 지리적 요인을 종합 분석하여, 결정계수(R²) 0.9162에 달하는 높은 예측 성능을 보여줍니다.',
    features: [
      {
        icon: LayoutDashboard,
        title: '자치구별 거래 분석 및 시각화',
        description: '서울시 전역의 거래 비중을 분석하여 지역적 특성에 따른 가격 편차를 학습 변수로 활용합니다. 거래 데이터의 분포를 한눈에 파악할 수 있는 대시보드를 제공합니다.',
        videoSrc: `${baseUrl}assets/projects/house-pricing/images/transaction_count_by_district.png`,
        poster: ''
      },
      {
        icon: Code,
        title: 'XGBoost 기반 고정밀 예측',
        description: '선형 회귀 모델의 한계를 극복하기 위해 XGBoost와 GridSearchCV 최적화를 도입했습니다. 실제 거래가와 예측값 간의 오차를 최소화하여 91% 이상의 설명력을 확보했습니다.',
        videoSrc: `${baseUrl}assets/projects/house-pricing/images/model_comparison_r2.png`,
        poster: '',
        reverse: true
      },
      {
        icon: FileText,
        title: '핵심 가격 결정 요인 분석',
        description: '전용면적, 자치구 위치 등 주택 가격 형성에 결정적인 영향을 미치는 변수들의 중요도를 시각화하여 제공합니다. 데이터 기반의 합리적인 의사결정을 돕습니다.',
        videoSrc: `${baseUrl}assets/projects/house-pricing/images/feature_importance.png`,
        poster: ''
      }
    ],
    techStack: [
      { title: "Machine Learning", items: ["Python 3.12", "XGBoost", "Scikit-learn", "GridSearchCV"] },
      { title: "Visualization", items: ["Seaborn", "Matplotlib", "Plotly"] },
      { title: "Engineering", items: ["Pandas", "NumPy", "Joblib (.pkl Serialization)"] },
      { title: "Frontend", items: ["Streamlit"] }
    ],
    team: [
      { name: "유재복 (Ashfortune)", role: "Data Analysis / ML Modeling" }
    ]
  }
];
