import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated, Post Graduate Certificate",
    location: "Toronto, ON",
    description:
      "Major: Computer Software and Database Development. Dean's list honoree.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Colombo, SL",
    description:
      "Worked on two projects. Please refer the resume for detailed description.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Colombo, SL",
    description:
      "Worked on two primary projects and other implementations related to two ERP systems. Please refer the resume for detailed description.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Trainee Software Engineer",
    location: "Colombo, SL",
    description:
      "Please refer the resume for detailed description.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Graduated, Bachelor of Science (Honours) in Information Technology.",
    location: "Colombo, SL",
    description:
      "Major: Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Adv. Legal Document Analysis Tool",
    description:
      "Created a tool to help legal professionals to analyze, clarify points, provide summarizations from the legal documents.",
    tags: ["React", "Node.js", "Python", "Flask", "RAG", "GPT-4", "MongoDB", "Azure"],
    // imageUrl: corpcommentImg,
    githubUrl: "https://github.com/Thamaltw97/Advanced-Legal-Document-Analysis-Tool",
    exploreUrl: "https://thamal1997.wixsite.com/codebreakers",
  },
  {
    title: "Mahaweli Agricultural App",
    description:
      "Developed an Intelligent System for Agriculture in Sri Lanka as a research project, provided healthiness levels using image capturing to help farmers and relevant parties.",
    tags: ["Android", "Java", "Python", "Machine Learning", "TensorFlow", "Image Classification", "MS SQL"],
    githubUrl: "https://github.com/Thamaltw97/Mahaweli-Agricultural-App",
    exploreUrl: "#",
  },
  {
    title: "Lucy Crypt",
    description:
      "Developed an app that includes Blockchain connection, MetaMask pairing, Smart contract interaction to send Ethereum with solidity code.",
    tags: ["React", "Web 3.0", "Blockchain", "Solidity", "Smart Contract"],
    githubUrl: "https://github.com/Thamaltw97/Lucy-Crypt-Web3.0",
    exploreUrl: "luci-crypt.netlify.app",
  },
  {
    title: "Parcel Delivery Application",
    description:
      "Implemented an Android app for a parcel delivery system that can be used by senders, drivers, and admins with specific roles.",
    tags: ["Android", "Java", "Spring Boot"],
    githubUrl: "https://github.com/Thamaltw97/Parcel-Delivery-App",
    exploreUrl: "#",
  },
  {
    title: "Fire Alarm Monitoring System",
    description:
      "Developed a fire alarm monitoring system prototype for an undergrad project, including the web client, desktop client for admins.",
    tags: ["React", "Node.js", "RMI", "C#", "Java"],
    githubUrl: "https://github.com/Thamaltw97/Fire-Alarm-Monitoring-System-SLIIT",
    exploreUrl: "youtube.com/watch?v=Bx7n9zJnrBs&t=385s&ab_channel=ThamalWijetunge",
  },
] as const;

export const skillsData = [
  "React",
  "C#",
  ".NET",
  "NodeJS",
  "JavaScript",
  "ES6",
  "TypeScript",
  "Java",
  "Python",
  "Express",
  "Next.js",
  "Redux",
  "jQuery",
  "Swing",
  "HTML",
  "CSS",
  "Android",
  "SQL",
  "Oracle",
  "MySQL",
  "MSSQL",
  "NoSQL",
  "MongoDB",
  "Azure",
  "Git",
  "GitHub",
  "BitBucket",
  "SVN",
  "Jenkins",
  "JIRA",
  "Nginx",
  "Machine Learning",
  "Visual Studio",
  "Agile",
  "HTTP",
] as const;
