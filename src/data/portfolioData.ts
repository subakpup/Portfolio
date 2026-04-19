import type { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  personal: {
    name: '함지수',
    nameEn: 'Ham Jisu',
    role: 'Backend Developer',
    phone: '010-2304-7557',
    email: 'hjsu0825@naver.com',
    github: 'https://github.com/subakpup',
    velog: 'https://velog.io/@subakpup',
    tagline: '안정적이고 확장 가능한 API를 설계하는 백엔드 개발자입니다.',
    aboutParagraphs: [
      'Java와 Spring Boot를 중심으로 백엔드 개발을 하고 있습니다. 안정적이고 유지보수하기 좋은 코드를 작성하는 것을 중요하게 생각하며, 사용자 경험을 고려한 API 설계에 관심이 많습니다.',
      'Samsung SW·AI Academy For Youth(SSAFY)에서 실무 중심의 프로젝트 경험을 쌓고 있으며 Docker, Jenkins 등을 활용한 CI/CD 파이프라인 구축과 클라우드 인프라 운영 경험을 보유하고 있습니다.',
    ],
  },

  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Java', icon: 'SiOpenjdk' },
        { name: 'Python', icon: 'SiPython' },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Spring', icon: 'SiSpring' },
        { name: 'Spring Boot', icon: 'SiSpringboot' },
        { name: 'JPA', icon: 'SiHibernate' },
        { name: 'MyBatis', icon: 'SiApache' },
        { name: 'JWT', icon: 'SiJsonwebtokens' },
        { name: 'Flask', icon: 'SiFlask' },
        { name: 'Vue.js', icon: 'SiVuedotjs' },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: 'SiMysql' },
        { name: 'PostgreSQL', icon: 'SiPostgresql' },
        { name: 'Redis', icon: 'SiRedis' },
      ],
    },
    {
      category: 'DevOps & Infra',
      items: [
        { name: 'AWS EC2', icon: 'FaAws' },
        { name: 'Jenkins', icon: 'SiJenkins' },
        { name: 'Nginx', icon: 'SiNginx' },
        { name: 'Docker', icon: 'SiDocker' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: 'SiGit' },
        { name: 'GitHub', icon: 'SiGithub' },
        { name: 'GitLab', icon: 'SiGitlab' },
        { name: 'IntelliJ IDEA', icon: 'SiIntellijidea' },
        { name: 'Eclipse', icon: 'SiEclipseide' },
        { name: 'VS Code', icon: 'FaCode' },
        { name: 'Postman', icon: 'SiPostman' },
        { name: 'Swagger', icon: 'SiSwagger' },
        { name: 'Notion', icon: 'SiNotion' },
        { name: 'Jira', icon: 'SiJira' },
      ],
    },
  ],

  experience: [
    {
      title: 'Samsung SW·AI Academy For Youth (SSAFY) 14기',
      organization: '삼성전자',
      period: '2025.07 - 2026.06',
      status: '재학 중',
      description: 'SW 개발 역량 강화를 위한 집중 교육 과정 수료 중',
      highlights: [
        'Java, Spring Boot 기반 백엔드 개발 심화 학습',
        '팀 프로젝트를 통한 실무 협업 경험',
      ],
    },
  ],

  education: [
    {
      institution: '광주숭일고등학교',
      period: '2016.03 - 2019.02',
      degree: '졸업',
    },
    {
      institution: '국립목포대학교',
      department: '융합소프트웨어학과',
      period: '2019.03 - 2025.02',
      degree: '졸업',
    },
  ],

  certifications: [
    {
      name: '정보처리기사',
      issuer: '한국산업인력공단',
      date: '2024.09.10',
    },
    {
      name: 'SQLD',
      issuer: '한국데이터산업진흥원',
      date: '2025.04.04',
    },
    {
      name: 'ADsP',
      issuer: '한국데이터산업진흥원',
      date: '2025.06.13',
    },
    {
      name: 'TOEIC Speaking · IM2',
      issuer: '한국TOEIC위원회',
      date: '2026.03.08',
    },
  ],

  awards: [
    {
      name: '카이로스 해커톤',
      rank: '대상',
      issuer: '국립목포대학교 융합소프트웨어학과',
      date: '2025.02.27',
    },
  ],

  projects: [
    {
      title: '방방봐',
      period: '2025.11.14 - 2025.12.26',
      description:
        '"방 구하러 멀리 가지 말고 방구석에서 찾아 봐!" — 지도 기반 매물 검색, 주변 인프라 분석, AI 맞춤 추천까지 제공하는 부동산 중개 플랫폼.',
      role: 'Team Leader · Full Stack',
      techStack: [
        'Vue.js',
        'Pinia',
        'Tailwind CSS',
        'Kakao Maps SDK',
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MyBatis',
        'MySQL',
        'Spring AI',
      ],
      highlights: [
        'Kakao Maps SDK 기반 지도 UI 및 매물 리스트·상세 페이지 프론트엔드 전반 구현 — 마커 클러스터링 및 리스트/지도 동기화',
        '하버사인 공식을 적용한 반경 500m 매물 필터링 및 주변 인프라(버스정류장/편의점/지하철역) 검색 API 구현',
        'Spring AI + OpenAI 연동으로 사용자 선호 인프라 조건을 반영한 AI 맞춤 매물 추천 기능 설계·구현',
        '예약 현황·가상 결제 페이지 및 사업자 전용 매물 등록·수정·관리 페이지 프론트엔드 구현',
        '동네 커뮤니티 게시판 CRUD(글·댓글 작성/조회/수정/삭제, 분류 기능) API 구현',
        '2인 팀의 리더로서 일정 관리, 이해관계자 분석, WBS·ERD·API 명세 등 설계 산출물을 주도',
      ],
      image:
        'https://velog.velcdn.com/images/subakpup/post/d3bc3159-0ea9-496f-8ee8-d6cf68c45b63/image.png',
      githubUrl: 'https://github.com/subakpup/BangBangBwa',
      notionUrl: 'https://www.notion.so/BangBangBwa-2ebfecb033488111979de73cf510cf41?source=copy_link',
    },
    {
      title: 'Loggy',
      period: '2026.01.12 - 2026.02.09',
      description:
        'Git Flow(Branch-Commit-PR-Merge) 메타포를 도입해 회의 흐름을 시각화하고, AI로 결정문·회의록을 자동 생성하는 개발자 대상 실시간 채팅 협업툴.',
      role: 'Team Leader · Full Stack',
      techStack: [
        'React',
        'TypeScript',
        'Java',
        'Spring Boot',
        'Spring Security',
        'JPA',
        'WebSocket (STOMP)',
        'WebRTC',
        'PostgreSQL',
        'Redis',
        'Python',
        'FastAPI',
        'Docker',
        'Nginx',
        'Jenkins',
      ],
      highlights: [
        '팀 관리 도메인 API 구현 — 팀 생성·조회·상세, 초대/응답, 멤버 목록·추방, 팀 정보 수정·삭제',
        'WebSocket(STOMP) 기반 실시간 채팅 API 구현 — 메시지 전송/답장 및 브로드캐스트 구독 처리',
        '커밋 시스템 설계·구현 — 일반 메시지를 유형별(INFO/OPINION/QUESTION/ANSWER/TODO) 커밋으로 변환·영구 보존, 커밋 목록 조회 API 제공',
        '회의 종료 시 휘발성 메시지 자동 삭제 로직 구현으로 "핵심 발언만 보존" 컨셉 실현',
        'PR·리뷰 API 구현 — PR 생성/근거 작성, 목록·상세 조회, 리뷰 작성 등 의사결정 파이프라인의 백엔드 구축',
        'WebRTC 기반 화이트보드 시그널링 서버 구현 — 세션 생성 및 실시간 드로잉 동기화 처리',
        '팀 내 프론트엔드 개발 공백이 발생한 상황에서 AI 바이브 코딩을 적극 활용해 프론트엔드 전 페이지를 단독 구현, 프로젝트 완수 및 일정 준수에 기여',
      ],
      githubUrl: 'https://github.com/subakpup/Loggy',
      notionUrl:
        'https://www.notion.so/Loggy-2e1fecb03348807aaf28e52d9cfe31d7?source=copy_link',
      image: 'https://velog.velcdn.com/images/subakpup/post/454427da-04b7-4121-b395-ff706a997737/image.png',
    },
    {
      title: '알맹이',
      period: '2026.02.19 - 2026.03.30',
      description:
        '카페·식당 등 소상공인을 위한 근태 기록, 주휴수당 자동 계산, 급여명세서 발송, 전자 근로계약까지 모바일 하나로 끝내는 올인원 PWA 플랫폼.',
      role: 'Backend · Infra',
      techStack: [
        'React',
        'TypeScript',
        'Spring Boot',
        'Spring Security',
        'JPA',
        'Java',
        'FastAPI',
        'Python',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Nginx',
        'Jenkins',
        'AWS EC2',
      ],
      highlights: [
        '근로기준법 기반 급여 자동 정산 엔진 설계 — 주휴수당, 연장·야간 수당, 3.3% 사업소득세/4대 보험 공제 자동 처리',
        '알바생용 실시간 예상 급여 대시보드 구현 — 누적 근무시간·수당·예상 실수령액 실시간 제공',
        '사장님용 월말 급여 확인·승인 대시보드 구현 — 전 직원 급여 일괄 검토 및 승인 플로우',
        '전자 근로계약서 자동 생성 및 모바일 서명 기능 구현 - 설정 정보 기반 계약서 자동 생성, 서명 이미지 저장',
        '문서함(서류 보관) 구현 — 보건증 등 필수 서류 업로드·조회·다운로드',
        '이메일/비밀번호 회원가입·로그인 및 퇴사 처리 플로우(최종 정산·계약 종료) 구현',
        'AWS EC2 환경에 각 서버를 Docker 컨테이너로 패키징하여 배포, Nginx를 리버스 프록시로 구성해 프론트엔드 서빙 및 API 라우팅 처리',
        'Jenkins 기반 CI/CD 파이프라인 구축 — 브랜치 푸시 시 자동 빌드·테스트·배포까지 일원화',
      ],
      githubUrl: 'https://github.com/subakpup/Almaengi',
      notionUrl:
        'https://www.notion.so/Almaengi-30cfecb03348810b8f97eae49c251fb7?source=copy_link',
      image:
        'https://velog.velcdn.com/images/subakpup/post/406b03b8-2425-48d2-bd9d-078c71e702e1/image.png',
    },
  ],
};

export default portfolioData;
