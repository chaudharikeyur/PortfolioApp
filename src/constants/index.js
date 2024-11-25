import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a knack for crafting robust and scalable web applications. With almost 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Ui5, as well as back-end technologies like Node.js, MySQL, Php, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, JavaScript, Node.js, MySQL, Php , and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Associate Software Engineer(Full-Time)",
    company: " Initium Digital Pvt. Ltd.",
    description: `As a Front-End Developer, I have hands-on experience in building responsive and scalable web applications using ReactJS, Tailwind CSS, and NodeJS. I have developed applications with JavaScript and utilized Redux for effective state management, focusing on enhancing user experience through rigorous performance testing. One of my key projects was designing the “Discipline Management Portal” for HR, which significantly improved the efficiency of discipline reporting. I have experience in creating and consuming RESTful APIs, ensuring smooth integration and functionality across different components. My work follows the MVC architecture for code maintainability, and I leverage Webpack for asset optimization. I manage projects using Git/GitHub, which has facilitated seamless collaboration and effective project tracking. Ensuring high-quality user experiences is a priority for me; I thoroughly review designs and implement best practices in UI/UX. Additionally, I contributed to the development of "Accelerate," a user automation tool that streamlines tasks, improving user productivity and efficiency.`,
    technologies: [ "ReactJs", "TailwindCss" , "NodeJs" , "CAPM"],
  },
  {
    year: "2024 - 2024",
    role: "CSD Intern",
    company: "Cognizant",
    description: `During my internship at Cognizant, I received comprehensive training in Oracle SQL/PLSQL and Node.js. I gained practical experience in database management and backend development, honing my skills in querying databases efficiently and developing server-side applications using Node.js.`,
    technologies: ["Javascript", "Express" , "NodeJs", "mySQL"],
  },
  {
    year: "2022 - 2022",
    role: " Software Engineer Intern",
    company: "  Salahkaar Consultants",
    description: `I developed wireframes for an Employee Management System and explored various features of HR software. My role involved working on the payroll management system, where I implemented client-side features using HTML5, CSS3, jQuery, and Bootstrap 5. For the server side, I utilized PHP and MySQL to build and maintain the system. I also designed and optimized CRUD operations in MySQL to ensure efficient data handling. Additionally, I explored and integrated the Google Chart API to visualize and analyze information related to team members, enhancing the system's data presentation capabilities.`,
    technologies: [" PHP ", "HTML/CSS", "JavaScript", "SQL"],
  },
  {
    year: "2021 - 2021",
    role: " Machine learning Engineer Intern",
    company: " AiBorne Tech",
    description: ` I worked in a dynamic environment where I utilized the Label-Me software for data annotation. My responsibilities included gathering data from colleagues, classifying it, and organizing it into appropriate categorical folders for efficient storage and retrieval. Additionally, I collaborated with team members using version control systems like Git to manage modifications and assign tasks effectively. In parallel, I developed and trained several Convolutional Neural Network (CNN) models using the TensorFlow library, contributing to the advancement of our machine learning projects.`,
    technologies: ["Python", "ML", "DL" , "LabelMe"],
  },
];

export const PROJECTS = [
  {
    title: "Discipline Management Portal",
    image: project1,
    description:
      "A Portal is a digital platform designed to streamline the processes related to managing discipline and behavior within an organization, such as a school, workplace, or other institutional setting.",
    technologies: [ "CSS", "ReactJs", "HANA", "JQuery"],
  },
  {
    title: "SweetNdCrunch",
    image: project4,
    description:
      "SweetNdCrunch is a web application for discovering and managing pastries, built with React, Firebase, and Tailwind CSS. It includes a user-friendly interface for browsing and ordering pastries, and an admin interface for efficient inventory management.",
    technologies: [ "NodeJs", "Firebase" , "RectJs" ],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: [ "NodeJs", "Express" , "RectJs" , "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwindcss", "React"],
  },
  {
    title: "EBloodMart",
    image: project4,
    description:
      "The purpose of this mini-project was to study blood donation systems and how they work and also to come up with a solution which will help manage blood donation and make sure that blood requirements of the patients are fulfilled.",
    technologies: ["HTML",  "Python", "Django", "SQL"],
  },
];

export const CONTACT = {
  address: " Address : 767 Fifth Avenue, Pune, 457001 ",
  phoneNo: " Call me On : +91 9834219909",
  email: " Email me At : keyurchaudhari300@gmail.com",
};
