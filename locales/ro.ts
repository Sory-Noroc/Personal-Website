import { Translations } from "./en";

export const ro: Translations = {
  nav: {
    home: "Acasă",
    about: "Despre",
    skills: "Abilități",
    experience: "Experiență",
    projects: "Proiecte",
    testimonials: "Testimoniale",
    contact: "Contact",
  },
  hero: {
    greeting: "Salut, sunt",
    rolePart1: "Student la Calculatoare & ",
    roleHighlight: "Dezvoltator",
    description: "Pasionat de construirea de software care rezolvă probleme reale. De la aplicații Android și Game Dev la Web Scraping și automatizare. Bazat în Iași, România.",
    viewWork: "Vezi Lucrările Mele",
    downloadCV: "Descarcă CV",
  },
  about: {
    title: "Despre",
    titleHighlight: "Mine",
    subtitle: "Motivat de curiozitate, definit de cod.",
    description1: "Sunt student la Facultatea de Automatică și Calculatoare din Iași (TUIASI), pasionat de dezvoltarea software și rezolvarea problemelor complexe. Călătoria mea a început cu simpla curiozitate despre cum funcționează lucrurile, care a evoluat rapid într-o pasiune pentru crearea de software.",
    description2: "Fie că e vorba de optimizarea codului, construirea de aplicații Android intuitive sau automatizarea sarcinilor plictisitoare cu scripturi Python, iubesc sentimentul de a rezolva un puzzle. Experiența mea de lucru variază de la freelancing pe Fiverr la roluri tehnice practice în Italia, Spania și SUA.",
    experienceTitle: "Experiență",
    experienceDesc: "Roluri internaționale multiple",
    educationTitle: "Educație",
    educationDesc: "Student la Calculatoare",
    beyondCodingTitle: "Dincolo de Cod",
    hobbies: [
      {
        tag: "Amintire #1",
        title: "Aventură Skydiving",
        description: "\"Săritul din avion m-a învățat că frica este doar o reacție, dar curajul este o decizie. Adrenalina este inegalabilă!\""
      },
      {
        tag: "Pasiune",
        title: "Entuziast Auto",
        description: "Întotdeauna am fost fascinat de mecanică. Lucrul la mașini este modul meu de a face debugging în lumea fizică."
      },
      {
        tag: "Hobby",
        title: "Ciclism",
        description: "Evadarea mea de la ecran. Mă ajută să-mi limpezesc mintea și să găsesc noi perspective."
      }
    ]
  },
  skills: {
    title: "Abilități",
    titleHighlight: "Tehnice",
    categories: [
      { category: "Limbaje", items: ["Python", "C++", "C", "Kotlin", "SQL", "HTML/CSS", "JavaScript"] },
      { category: "Framework-uri & Unelte", items: ["Android Studio", "Selenium", "SDL", "Gradle", "Next.js", "Tailwind CSS"] },
      { category: "Hardware & IoT", items: ["Arduino", "Raspberry Pi", "Tehnologii Energie Regenerabilă"] },
      { category: "Baze de date", items: ["MySQL", "MongoDB", "MSSQL"] },
    ]
  },
  experience: {
    title: "Experiență",
    titleHighlight: "Profesională",
    jobs: [
      {
        title: "Tehnician Panouri Solare",
        company: "Sunnerg Group",
        location: "Milano, Italia",
        period: "Iun 2023 - Oct 2023",
        description: "Îmbunătățirea producției de electricitate prin instalarea structurilor de susținere pentru trackere solare. Colaborarea cu echipele pentru asigurarea standardelor înalte."
      },
      {
        title: "Data Analist",
        company: "Fiverr (Freelance)",
        location: "Remote",
        period: "Aug 2019 - Mai 2023",
        description: "Dezvoltarea proiectelor de web parsing folosind Python și Selenium. Livrarea rezultatelor precise și primirea de feedback pozitiv pentru respectarea termenelor limită."
      }
    ]
  },
  projects: {
    title: "Proiecte",
    titleHighlight: "Reprezentative",
    viewCode: "Vezi Codul",
    items: [
      {
        title: "Space Shooter",
        description: "Un joc C++ dezvoltat folosind biblioteca SDL. Include nave inamice, urmărirea scorului și bucle de joc optimizate. Demonstrează managementul memoriei la nivel scăzut și implementarea logicii de joc.",
        tech: ["C++", "SDL", "Game Dev"],
        github: "https://github.com/Sory-Noroc/space-shooter",
        image: "/space_shooter_image.png",
        featured: true
      },
      {
        title: "JobAcer - AI Interview Coach",
        description: "O aplicație lansată în AWS ce utilizează AI pentru a oferi sesiuni de interviuri simulate. Ai posibilitatea să îți înregistrezi răspunsurile și să primești feedback din partea AI-ului.",
        tech: ["AWS", "Gemini AI", "Kotlin", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Sory-Noroc/Smart-Interview-Coach",
        image: "/ui_dashboard_feedback_1.png",
        featured: true
      }
    ]
  },
  testimonials: {
    title: "Testimoniale",
    titleHighlight: "Clienți",
    description: "Feedback de la clienți mulțumiți de pe Fiverr.",
    reviews: [
      {
        name: "jaaprozemeijer",
        country: "Netherlands",
        countryCode: "NL",
        rating: 5,
        text: "Nice and fast thanks",
        projectType: "Scripting"
      },
      {
        name: "milanus",
        country: "United States",
        countryCode: "US",
        rating: 5,
        text: "Just the Best of the Best. This is my 2nd order! Recommended for sure",
        projectType: "Data Scraping"
      },
      {
        name: "milanus",
        country: "United States",
        countryCode: "US",
        rating: 5,
        text: "This gentlemen is very cooperative and follow the directions well. I am happy and will order again. Good Job He built me a web research toll using Python. He is really knowledgeable. I recommend.",
        projectType: "Data Scraping"
      },
      {
        name: "pranishs320",
        country: "United States",
        countryCode: "US",
        rating: 5,
        text: "Helpful/ fast/ just very good at what he does!!!",
        projectType: "Data Scraping"
      },
      {
        name: "pleighs",
        country: "New Zealand",
        countryCode: "NZ",
        rating: 5,
        text: "Great experience working with this seller, highly recommended. Will be back for more on my next project.",
        projectType: "Android App Development"
      }
    ],
    viewOnFiverr: "Verifică pe Fiverr"
  },
  contact: {
    title: "Hai să luăm legătura",
    description: "Sunt mereu deschis să discut despre proiecte noi, idei creative sau oportunități de a face parte din viziunile tale.",
    socialsTitle: "Social Media",
    copyright: "© " + new Date().getFullYear() + " Sorin Noroc. Toate drepturile rezervate.",
    builtWith: "Construit cu Next.js & Tailwind CSS"
  }
};