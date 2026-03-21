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
    subtitle: '주식 자동매매 시스템',
    heroTagline: '데이터 기반의 스마트한 투자 전략, StockLab',
    heroDescription: 'Flask 기반의 주식 데이터 분석 및 자동매매 시스템입니다. 효율적인 자산 관리와 시장 분석을 지원합니다.',
    heroBg: `${baseUrl}assets/projects/stocklab/images/hero-bg.jpg`,
    githubUrl: 'https://github.com/ashfortune/StockLab',
    about: 'StockLab은 Flask 프레임워크를 활용하여 구축된 주식 자동매매 시스템입니다. 현재 초기 개발 단계이며, 실시간 시장 데이터 수집부터 전략 실행까지 아우르는 통합 플랫폼을 목표로 합니다.',
    features: [
      {
        icon: LayoutDashboard,
        title: '시장 데이터 수집',
        description: '다양한 API를 통해 실시간 주식 시장 데이터를 수집하고 정규화합니다.',
        videoSrc: `${baseUrl}assets/projects/stocklab/videos/market-data.mp4`,
        poster: '',
        reverse: true
      },
      {
        icon: MessageSquare,
        title: '자동 매매 엔진',
        description: '설정된 알고리즘 전략에 따라 자동으로 주문을 체결하고 관리합니다.',
        videoSrc: `${baseUrl}assets/projects/stocklab/videos/trading-engine.mp4`,
        poster: ''
      }
    ],
    techStack: [
      { title: "Backend", items: ["Flask", "Python", "SQLAlchemy", "PyMySQL"] },
      { title: "Database", items: ["MariaDB / MySQL"] },
      { title: "AI & Data", items: ["Pandas (추후 예정)"] }
    ],
    team: [
      { name: "유재복", role: "Project PM / Developer" }
    ]
  },
  // 추후 새로운 프로젝트를 여기에 추가할 수 있습니다.
];
