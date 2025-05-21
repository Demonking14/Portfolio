export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
 
];

export const myProjects =[
  {
    title: 'ChatyFi - Random Chat & Video Call App',
    desc: 'ChatyFi is a real-time communication platform where users can connect randomly with others based on their preferred language. It supports instant messaging and seamless video calls, making it easy to make new friends from around the world.',
    subdesc:
      'Built with real-time technologies and language-based matchmaking logic, ChatyFi is focused on delivering smooth and meaningful connections. It’s a step toward building smarter and more inclusive social platforms.',
    href: 'https://chatyfi.onrender.com/',
    texture: '/assets/ChatyFiPreview.mp4', // Optional: Replace with your actual preview video
    logo: '/assets/logo.png', // Optional: Replace with your project logo path
    logoStyle: {
      backgroundColor: '#1E1E2F',
      border: '0.2px solid #2E2E3E',
      boxShadow: '0px 0px 60px 0px #5D5FEF4D',
    },
    spotlight: '/assets/spotlight2.png', 
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 4,
        name: 'getStream',
        path: '/assets/getStream.jpg', 
      },
      {
        id: 5,
        name: 'TranStack Query',
        path: '/assets/transtack.png', 
      },
    ],
  },
  // More projects can be added here
]


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
   {
    id: 1,
    name: 'C++ Fundamentals',
    pos: 'Beginner Programmer',
    duration: '2021 - 2022',
    title: "My journey began with mastering C++, which helped me understand programming logic and problem-solving fundamentals. This laid the groundwork for everything I learned later.",
    icon: '/assets/cplus.svg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Frontend & UI Design',
    pos: 'Frontend Developer',
    duration: '2022 - 2023',
    title: "In my first year of college, I explored frontend development using HTML, CSS, JavaScript, and Tailwind. I also started working on UI design to build aesthetic, user-friendly interfaces.",
    icon: '/assets/frontend.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'MERN Stack & Animations',
    pos: 'Full Stack Developer',
    duration: '2023 - 2024',
    title: "In my second year, I delved into full stack development with the MERN stack. I also explored animation libraries like GSAP and Framer Motion to enhance interactivity in web apps.",
    icon: '/assets/mern.svg', 
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'ChatyFi',
    pos: 'Web App Creator',
    duration: '2024 - Present',
    title: "At the start of my third year, I built my first complete web application — ChatyFi. It connects users randomly for real-time chat and video calls, helping them find friends by language preference.",
    icon: '/assets/logo.png', 
    animation: 'victory',
  },
];
