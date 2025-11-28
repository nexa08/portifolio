// app/data/portfolioData.ts
import { PortfolioData } from '../types/portifolio';

export const portfolioData: PortfolioData = {
  name: "Paul M Paul",
  title: "Software Developer",
  bio: "Passionate React Native developer creating amazing cross-platform applications with Expo.",
  skills: [
    { name: "React Native", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Expo", level: "Advanced" },
    { name: "Node", level: "Advanced" },
    { name: "Mysql", level: "Intermediate" },
    { name: "PHP", level: "Advanced" },
    { name: "Laravel", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "Boostrap", level: "Intermediate" },
  ],
  projects: [
    {
      id: "1",
      title: "Crime Report App",
      description: "A beautifulcrime report application with real-time reporting and tracking report preogress",
      technologies: ["React Native", "Expo", "Mysql","Node","JavaScript"],
      githubUrl: "https://github.com/pau49"
    },
    {
      id: "2", 
      title: "Vcard App",
      description: "Contact sharing  app for tracking daily scan logs from the shared qr codes in real time",
      technologies: ["React Native", "Expo", "Mysql","Node","JavaScript"],
      githubUrl: "https://gitlab.com/nexa.theicon/vcard_app"
    },
      {
      id: "3", 
      title: "Qr Hub",
      description: "Static qr code generating, customization sharing, information  like url, text, contacts,payment details, wifi credentials  ",
      technologies: ["React Native", "Expo","JavaScript"],
      githubUrl: "https://github.com/nexa08/qrhub"
    }
  ],
  contact: {
    email: "nexa.theicon@gmail.com",
    phone: "+255 (0)622 255 496",
    linkedin: "https://linkedin.com/in/musolidmuyoung",
    github: "https://github.com/nexa08",
    telegram:"makimonsa",
    location:"Arusha, Tanzania"
  }
};