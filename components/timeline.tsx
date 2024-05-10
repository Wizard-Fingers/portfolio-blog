// components/Timeline.tsx
// import React from "react";
import TimelineItem from "./timeline-item";

interface WorkplaceData {
  year: string;
  title: string;
  details: string;
  isLatest?: boolean;
}

const Timeline: React.FC = () => {
  const workplaces: WorkplaceData[] = [
    {
      year: "2024 - Present",
      title: "Junior Developer, Code Institute",
      details:
        "I'm currently enrolled in an immersive full-stack development program at Code Institute. Through this course, I'm gaining hands-on experience in building web applications using the Django framework and collaborating with fellow students on various projects. My goal is to become a proficient full-stack developer with a strong background in Python and Django.",
      isLatest: true,
    },
    {
      year: "January 10th 2024 - March 2024",
      title: "Web Development Bootcamp, Ungo Solutions",
      details:
        "I participated in an intensive 10-week bootcamp at Ungo Solutions, focusing on web development and software engineering. During this program, I learned how to build full-stack applications using the MERN (MongoDB, Express, React, Node.js) stack. Additionally, I gained experience in agile methodologies, collaborative development, version control with Git and GitHub, and deploying applications to the web using various hosting platforms and tools.",
      isLatest: false,
    },
    {
      year: "March 2023 - December 2023",
      title: "Founder, Bear Digital Studio",
      details:
        "I founded Bear Digital Studio, a design-focused web development company. During this time, I worked closely with eight clients, developing product pages for their websites and applications. I was responsible for updating and maintaining existing sites, optimizing for search engine performance (SEO), and collaborating with vendors and customers to enhance their overall digital experience.",
      isLatest: false,
    },
    {
      year: "January 2023 - March 2023",
      title: "Web Developer, Hodgesnet",
      details:
        "At Hodgesnet, I worked as a solo web developer, utilizing the company's custom page-builder tool to create and maintain client websites. During this role, I also trained and mentored a junior developer. In addition to site development, I focused on improving SEO, implementing UX best practices, and collaborating with vendors and customers to ensure optimal performance and user experience.",
      isLatest: false,
    },
    {
      year: "January 2022 - January 2023",
      title: "Junior Developer, Joytech",
      details:
        "I worked as a junior developer at Joytech, gaining real-world experience in building websites for clients. This role involved collaborating with senior developers, working in a team environment, and applying my skills to various projects. Additionally, I contributed to the Joy of Coding Academy by mentoring and coaching junior developers, helping them with their projects and guiding them through their learning journey.",
      isLatest: false,
    },
    {
      year: "June 2021 - January 2022",
      title: "Student, Joy of Coding Academy",
      details:
        "I enrolled in the Joy of Coding Academy program, where I learned Python as the primary language and acquired essential software development skills. The program emphasized teamwork, real-world problem-solving, and hands-on project experience. As part of the program, I also mentored and assisted junior developers, conducting coaching sessions and helping them with their projects.",
      isLatest: false,
    },
    {
      year: "February 2021 - June 2021",
      title: "Junior Dart and Flutter Developer, D & K Development (Remote)",
      details:
        "I worked remotely as a junior Dart and Flutter developer for D & K Development, a Dutch startup. My role involved contributing to the development of an English-teaching application for a university client. This was a contracted position, allowing me to gain experience in remote work and collaborating with an international team while based in the UK.",
      isLatest: false,
    },
    {
      year: "September 2020 - February 2021",
      title: "ESL Teacher",
      details:
        "I worked as an English as a Second Language (ESL) teacher, helping students from various parts of the world develop their English language skills and prepare for exams such as IELTS. In this role, I designed and delivered lessons, provided feedback and guidance, and supported students in improving their English proficiency.",
      isLatest: false,
    },
    {
      year: "March 2010 - August 2020",
      title: "Police Officer, St. Helena Island (British Foreign Office)",
      details:
        "I served as a police officer on the island of St. Helena, working under the British Foreign Office. During my tenure, I took on various roles and responsibilities, including being the first Family Liaison Officer in the island's history. I worked on numerous cases, assisted families during difficult times, and served as a detective, uniformed officer, and member of various specialized teams such as firearms, emergency planning, child protection, domestic violence, sexual offenses, missing persons, major incidents, critical incidents, hostage negotiation, armed response, public order, and search teams.",
      isLatest: false,
    },
    {
      year: "January 2007 - December 2009",
      title: "Anglican Minister",
      details:
        "I served as an Anglican minister, providing spiritual guidance and support to the community. My responsibilities included conducting religious services, delivering sermons, counseling individuals, and offering pastoral care.",
      isLatest: false,
    },
    {
      year: "September 2004 - January 2007",
      title: "Goldsmith",
      details:
        "I worked as a goldsmith, learning the art of jewelry making and repair. My duties involved working with precious metals and stones, designing and creating custom jewelry pieces, consulting with clients, and collaborating with other goldsmiths. Additionally, I mentored and trained junior goldsmiths, sharing my knowledge and expertise through coaching sessions and hands-on guidance.",
      isLatest: false,
    },
  ];

  return (
    <div className="relative pl-4">
      <ol className="relative border-l border-b border-brandCol5 dark:border-brandCol6">
        {workplaces.map((workplace, index) => (
          <TimelineItem
            key={index}
            year={workplace.year}
            title={workplace.title}
            details={workplace.details}
            isLatest={workplace.isLatest}
          />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
