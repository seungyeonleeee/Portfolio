// Nav Menu
export const navMenus = ["home", "about", "project", "contact"];

// Home Title
export const titles = [
  {
    keyword: "Connection",
    description:
      "대화 속에서 사람들과의 연결을 소중히 여기며, \n그 안에서 함께 성장하고 발전할 수 있는 가능성을 발견합니다.",
  },
  {
    keyword: "Communication",
    description:
      "소통은 서로를 이해하는 첫걸음입니다. \n명확하고 진심 어린 대화를 통해 아이디어와 감정을 이어갑니다.",
  },
  {
    keyword: "Collaboration",
    description:
      "함께하는 힘이 더 큰 가치를 만듭니다. \n다양한 관점과 능력을 하나로 모아 새로운 가능성을 열어갑니다.",
  },
];

// About Skill
export const skills = [
  {
    icon: "node-js",
    title: "Node.js",
    description:
      "Node.js를 활용해 백엔드 서버와 API를 구축하며, 비동기 처리로 데이터 흐름을 관리합니다.",
  },
  {
    icon: "next-js",
    title: "Next.js",
    description:
      "Next.js를 활용해 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현합니다.",
  },
  {
    icon: "ts",
    title: "Typescript",
    description:
      "TypeScript를 통해 코드의 안정성과 가독성을 높이고, 타입 시스템을 활용해 오류를 사전에 방지합니다.",
  },
  {
    icon: "react",
    title: "React.js",
    description:
      "React를 활용해 컴포넌트 기반으로 재사용 가능한 UI를 구현합니다.",
  },
  {
    icon: "recoil",
    title: "Recoil",
    description: "Recoil을 활용해 전역 상태를 효율적으로 관리합니다.",
  },
  {
    icon: "react-query",
    title: "React-Query",
    description: "React Query를 활용해 서버 상태를 관리합니다.",
  },
  {
    icon: "redux",
    title: "Redux",
    description: "Redux를 활용해 복잡한 상태를 체계적으로 관리합니다.",
  },
  {
    icon: "router",
    title: "React Router",
    description: "React Router를 활용해 유연한 라우팅을 구현합니다.",
  },
  {
    icon: "styled-components",
    title: "Styled-Components",
    description:
      "Styled Components를 통해 컴포넌트 기반으로 모듈화된 스타일을 작성합니다.",
  },
  {
    icon: "js",
    title: "Javascript",
    description:
      "JavaScript를 통해 동적인 웹 페이지를 구현하며, 사용자와의 상호작용을 자연스럽게 설계할 수 있습니다.",
  },
  {
    icon: "scss",
    title: "SCSS",
    description:
      "SCSS를 활용해 변수와 믹스인 등으로 효율적인 스타일링을 구현합니다.",
  },
  {
    icon: "css3",
    title: "CSS3",
    description:
      "CSS3를 활용해 반응형 웹 디자인과 시각적으로 매력적인 레이아웃을 구현할 수 있습니다.",
  },
  {
    icon: "html5",
    title: "HTML5",
    description:
      "HTML5를 활용해 구조적이고 의미 있는 웹 페이지를 구현할 수 있습니다.",
  },
  {
    icon: "github",
    title: "GitHub",
    description: "GitHub를 활용해 버전 관리를 효율적으로 수행합니다.",
  },
  {
    icon: "figma",
    title: "Figma",
    description:
      "Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간 협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.",
  },
];

// Project Process
export const accordionItems = [
  {
    title: "Planning",
    content:
      "WBS 일정표를 기반으로 체계적으로 진행 일정을 수립했습니다.\n또한, 사용자를 이해하기 위해 페르소나를 작성하고, 정보 구조(IA)를 체계적으로 설계하여 프로젝트의 방향성을 명확히 설정했습니다.",
    mainImg: "process_planning01.jpg",
    subImg01: "process_planning02.jpg",
    subImg02: "process_planning03.jpg",
  },
  {
    title: "Design",
    content:
      "Figma를 활용해 와이어프레임을 제작하고, UI/UX 디자인을 완성했습니다.\n디자인 과정에서 팀원들과 협업하여 실시간 피드백과 의견 교환을 통해 사용자 중심의 디자인을 구현했습니다.",
    mainImg: "process_design01.jpg",
    subImg01: "process_design02.jpg",
    subImg02: "process_design03.jpg",
  },
  {
    title: "Development",
    content:
      "GitHub를 통해 코드를 버전 관리하며, 브랜치를 나누어 작업을 분배했습니다.\nPull Request와 코드 리뷰를 통해 협업 품질을 높였으며, 팀원들과 적극적으로 소통하며 개발을 진행했습니다.",
    mainImg: "process_development01.jpg",
    subImg01: "process_development02.jpg",
    subImg02: "process_development03.jpg",
  },
  {
    title: "Presentation",
    content:
      "프로젝트 발표에서 피드백을 수집하고, 이를 기반으로 개선 사항을 반영하여 결과물을 수정했습니다.\n평가에 맞춰 팀원들과 함께 프로젝트의 완성도를 한 단계 높였습니다.",
    mainImg: "process_development01.jpg",
    subImg01: "process_development02.jpg",
    subImg02: "process_development03.jpg",
  },
];
// Project List
export const projectCategory = ["Javascript", "React", "Typescript", "Node.js"];
export const projectLists = [
  {
    id: 1,
    skill: "Javascript",
    title: "Hyndai E&C",
    description:
      "현대건설의 홈페이지를 애니메이션 효과로 생동감을 더하고, 페이지 전환을 통해 콘텐츠를 자연스럽게 이어가며 커스터마이징 했습니다.",
    tools: ["Anime.js", "Fullpage"],
  },
  {
    id: 2,
    skill: "Javascript",
    title: "INNISFREE",
    description:
      "브랜드의 자연 친화적인 이미지를 돋보이게 하는 부드러운 슬라이드와 인터랙션을 구현했습니다.",
    tools: ["Slick"],
  },
  {
    id: 3,
    skill: "React",
    title: "Hyndai E&C",
    description:
      "현대건설의 홈페이지를 애니메이션 효과로 생동감을 더하고, 페이지 전환을 통해 콘텐츠를 자연스럽게 이어가며 커스터마이징 했습니다.",
    tools: ["Anime.js", "Fullpage"],
  },
  {
    id: 4,
    skill: "React",
    title: "INNISFREE",
    description:
      "브랜드의 자연 친화적인 이미지를 돋보이게 하는 부드러운 슬라이드와 인터랙션을 구현했습니다.",
    tools: ["Slick"],
  },
  {
    id: 5,
    skill: "Typescript",
    title: "To Do List",
    description:
      "Vite의 빠른 빌드 속도와 styled-components의 모듈화된 스타일링을 통해 간결하면서도 직관적인 UI를 구현했습니다.",
    tools: ["Vite", "Styled-components"],
  },
  {
    id: 6,
    skill: "Typescript",
    title: "Emotion Diary",
    description:
      "Vite의 빠른 빌드 속도와 styled-components의 모듈화된 스타일링을 통해 간결하면서도 직관적인 UI를 구현했습니다.",
    tools: ["Motion", "Styled-components"],
  },
  {
    id: 7,
    skill: "Node.js",
    title: "To Do List",
    description:
      "Vite의 빠른 빌드 속도와 styled-components의 모듈화된 스타일링을 통해 간결하면서도 직관적인 UI를 구현했습니다.",
    tools: ["Vite", "Styled-components"],
  },
  {
    id: 8,
    skill: "Node.js",
    title: "Emotion Diary",
    description:
      "Vite의 빠른 빌드 속도와 styled-components의 모듈화된 스타일링을 통해 간결하면서도 직관적인 UI를 구현했습니다.",
    tools: ["Motion", "Styled-components"],
  },
];
