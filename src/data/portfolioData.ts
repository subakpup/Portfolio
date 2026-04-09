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
  ],

  projects: [
    {
      title: '예시 프로젝트 1',
      period: '2024.10 - 2024.12',
      description:
        '이 프로젝트는 예시입니다. portfolioData.js 파일에서 실제 프로젝트 정보로 교체해주세요.',
      role: 'Backend Developer',
      techStack: ['Spring Boot', 'JPA', 'MySQL', 'Docker'],
      highlights: [
        'REST API 설계 및 구현',
        'Docker 기반 배포 환경 구축',
      ],
      githubUrl: 'https://github.com/subakpup',
    },
    {
      title: '예시 프로젝트 2',
      period: '2025.01 - 2025.03',
      description:
        '이 프로젝트도 예시입니다. 실제 프로젝트 정보로 교체해주세요.',
      role: 'Full Stack Developer',
      techStack: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Redis'],
      highlights: [
        'Vue.js 프론트엔드 개발',
        'Redis 캐싱으로 응답 속도 개선',
      ],
      githubUrl: 'https://github.com/subakpup',
    },
  ],
};

export default portfolioData;
