import { 
  FileText, 
  MessageSquare, 
  LayoutDashboard, 
  Bell,
  UserCheck
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 'ai-lawyer',
    title: 'AI-Lawyer',
    subtitle: '올라운드 법률 에이전트',
    heroTagline: '어렵고 복잡한 법률 리스크, AI와 함께라면 명확해집니다.',
    heroDescription: '전문적인 계약서 분석부터 실시간 사후 감시까지, 올라운드 법률 에이전트 AI-Lawyer를 소개합니다.',
    heroBg: `${baseUrl}assets/projects/ai-lawyer/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/human13th2team/test-repository',
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
    title: 'StockLab',
    subtitle: '데이터 분석 기반의 올인원 모의 주식 투자 플랫폼',
    heroTagline: 'Investigate & Simulate, Innovate Your Investment',
    heroDescription: '현대적인 웹 환경에서 데이터 분석과 안정적인 주식 매매를 지원하는 플랫폼입니다. Flask의 모듈형 아키텍처와 실시간 통신 기술을 활용하여 사용자에게 직관적이고 강력한 투자 도구를 제공합니다.',
    heroBg: `${baseUrl}assets/projects/stocklab/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/human13th2team/StockLab',
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
  // 추후 새로운 프로젝트를 여기에 추가할 수 있습니다.
];
