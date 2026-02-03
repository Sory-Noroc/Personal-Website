export const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    rolePart1: "Computer Engineering Student & ",
    roleHighlight: "Developer",
    description: "Passionate about building software that solves real-world problems. From Android apps and Game Dev to Web Scraping and automation. Based in Iasi, Romania.",
    viewWork: "View My Work",
    downloadCV: "Download CV",
  },
  about: {
    title: "About",
    titleHighlight: "Me",
    subtitle: "Driven by Curiosity, Defined by Code.",
    description1: "I am a Computer Engineering and Automatics student at TUIASI \"Gheorghe Asachi\" in Iasi. My journey started with a simple curiosity about how things work, which quickly evolved into a passion for creating software.",
    description2: "Whether it's optimizing code, building intuitive Android apps, or automating boring tasks with Python scripts, I love the feeling of solving a puzzle. My work experience spans from freelancing on Fiverr to hands-on technical roles in Italy, Spain, and the USA.",
    experienceTitle: "Experience",
    experienceDesc: "Multiple International roles",
    educationTitle: "Education",
    educationDesc: "Computer Engineering Student",
    beyondCodingTitle: "Beyond Coding",
    hobbies: [
      {
        tag: "Memory #1",
        title: "Skydiving Adventure",
        description: "\"Jumping out of a plane taught me that fear is just a reaction, but courage is a decision. The adrenaline rush is unmatched!\""
      },
      {
        tag: "Passion",
        title: "Car Enthusiast",
        description: "I've always been fascinated by mechanics. Working on cars is my way of debugging the physical world."
      },
      {
        tag: "Hobby",
        title: "Cycling",
        description: "My escape from the screen. It helps me clear my mind and find new perspectives."
      }
    ]
  },
  skills: {
    title: "Technical",
    titleHighlight: "Skills",
    categories: [
      { category: "Languages", items: ["Python", "C++", "C", "Kotlin", "SQL", "HTML/CSS", "JavaScript"] },
      { category: "Frameworks & Tools", items: ["Android Studio", "Selenium", "SDL", "Gradle", "Next.js", "Tailwind CSS"] },
      { category: "Hardware & IoT", items: ["Arduino", "Raspberry Pi", "Renewable Energy Tech"] },
      { category: "Databases", items: ["MySQL", "MongoDB", "MSSQL"] },
    ]
  },
  experience: {
    title: "Work",
    titleHighlight: "Experience",
    jobs: [
      {
        title: "Solar Panel Technician",
        company: "Novaluxe Dynamics",
        location: "Palma del Rio, Spain",
        period: "Jun 2025 - Sep 2025",
        description: "Provided maintenance of solar panels, participated in installation lifecycles, and managed teams. Increased company revenue by 10%."
      },
      {
        title: "Solar Panel Technician",
        company: "Sunnerg Group",
        location: "Milano, Italy",
        period: "Jun 2023 - Oct 2023",
        description: "Enhanced electricity output by installing supporting structures for solar trackers. Collaborated with teams to ensure high standards."
      },
      {
        title: "Data Miner and Analyst",
        company: "Fiverr (Freelance)",
        location: "Remote",
        period: "Aug 2019 - May 2023",
        description: "Developed web scraping projects using Python and Selenium. Delivered accurate results and received positive feedback for meeting deadlines."
      },
      {
        title: "Busser / Food Runner",
        company: "Casa Del Cabo",
        location: "Eastham, USA",
        period: "Aug 2024 - Sep 2024",
        description: "Recognized for exceptional teamwork and efficiency during peak hours in a fast-paced environment."
      },
      {
        title: "House Attendant",
        company: "Chatham Bars Inn",
        location: "Eastham, USA",
        period: "Jun 2024 - Sep 2024",
        description: "Maintained high standards of cleanliness and organization for a premium hospitality venue."
      }
    ]
  },
  projects: {
    title: "Featured",
    titleHighlight: "Projects",
    viewCode: "View Code",
    items: [
      {
        title: "Space Shooter",
        description: "A C++ game developed using the SDL library. Features include enemy battleships, score tracking, and optimized game loops. Demonstrates low-level memory management and game logic implementation.",
        tech: ["C++", "SDL", "Game Dev"],
        github: "https://github.com/Sory-Noroc/space-shooter",
        image: "/space_shooter_image.png",
        featured: true
      },
      {
        title: "LibroRead",
        description: "An intuitive Android e-book reader app. Features automatic scanning of device files, customizable reading themes, and a user-friendly interface built with Kotlin and XML.",
        tech: ["Android", "Kotlin", "XML", "Gradle"],
        github: "https://github.com/Sory-Noroc/LibroRead",
        image: "/ebook_kindle.jpg",
        featured: true
      },
      {
        title: "ElectriCost",
        description: "Android utility app for calculating electricity costs of various appliances. Helps users track consumption and estimate bills. Built with modern Android guidelines.",
        tech: ["Kotlin", "Android", "Utility"],
        github: "https://github.com/Sory-Noroc/ElectricCalculator",
        image: "/lightning.jpg",
        featured: false
      }
    ]
  },
  contact: {
    title: "Let's Connect",
    description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    socialsTitle: "Socials",
    copyright: "© " + new Date().getFullYear() + " Sorin Noroc. All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS"
  }
};

export type Translations = typeof en;