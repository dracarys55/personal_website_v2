import my_pic from "./assets/images/my_pic.jpg";
import projectimage_1 from "./assets/projectImages/rise_of_elves_2.jpg";
import projectimage_admin from "./assets/projectImages/rise_of_elves_admin.jpg";
import projectimage_2 from "./assets/projectImages/S8.webp";
import projectimage_3 from "./assets/projectImages/E_commerce.png";
import projectimage_4 from "./assets/projectImages/tesla_mimic.webp";
import projectimage_5 from "./assets/projectImages/super_chain.webp";
import projectimage_waiting from "./assets/projectImages/waiting.webp";

import dataMylife_img_1 from "./assets/projectImages/dataMylife_img_14519.webp";
import dataMylife_img_2 from "./assets/projectImages/dataMylife_img_15485.webp";
import dataMylife_img_3 from "./assets/projectImages/dataMylife_img_15616.webp";
import dataMylife_img_4 from "./assets/projectImages/dataMylife_img_84892.webp";
import dataMylife_img_5 from "./assets/projectImages/dataMylife_img_8946.webp";
import dataMylife_img_6 from "./assets/projectImages/dataMylife_img_121459.webp";
import dataMylife_img_7 from "./assets/projectImages/dataMylife_img_85461.webp";
import dataMylife_img_8 from "./assets/projectImages/dataMylife_img_12232.webp";
import dataMylife_img_9 from "./assets/projectImages/dataMylife_img_156489.webp";

const logotext = "J A C K";
const meta = {
  title: "Jack Liu",
  description: "I’m Jack Liu frontend devloper.",
};

const introdata = {
  /*   title: 'I’m Jack Liu.',
  animated: {
    first: 'A Front-End Engineer',
    second: 'An English Teacher',
    third: 'A Fitness Enthusiast',
  },
  description:
    'Enjoy learning all kinds of stuff, especially languages. No matter is computer language or human language. By the way, I write cool website using JavaScript.', */
  your_img_url: my_pic,
};

const dataabout = {
  /* title: 'About myself',
  aboutme: `Hello, my name is Jack. I am currently a 
  front-end engineer with one year of work experience. 
  I mainly use javaScript and TypeScript for development,
   and for front-end framework I mainly use React. 
   I also have a golden certificate from TOEIC English Test,
   and have been an English tutor for almost three years.
    `, */
};

const worktimeline = [
  {
    jobtitle: "jobTitle_1",
    where: "where_1",
    date: "date_1",
  },
  {
    jobtitle: "jobTitle_2",
    where: "where_2",
    date: "date_2",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 80,
  },
  {
    name: "TypeScript",
    value: 70,
  },
  {
    name: "React",
    value: 70,
  },
  {
    name: "Next",
    value: 80,
  },
  {
    name: "Node.js",
    value: 70,
  },
];

const dataportfolio = [
  {
    img: projectimage_1,
    desctiption: "project_desctiption_1",
    link: "https://www.riseofelves.com/",
  },
  {
    img: projectimage_admin,
    desctiption: "project_desctiption_admin",
    link: "/static/media/rise_of_elves_admin.7f27b4e8.jpg",
  },
  {
    img: projectimage_2,
    desctiption: "project_desctiption_2",
    link: "https://s8-official-website.vercel.app/",
    github: "https://github.com/dracarys55/S8_official_website",
  },
  {
    img: projectimage_3,
    desctiption: "project_desctiption_3",
    link: "https://github.com/dracarys55/E-commerce",
    github: "#",
    /* 'https://supershop54.herokuapp.com/' */
  },
  {
    img: projectimage_4,
    desctiption: "project_desctiption_4",
    link: "https://teslamimic.vercel.app/",
    github: "https://github.com/dracarys55/teslamimic",
  },
  {
    img: projectimage_5,
    desctiption: "project_desctiption_5",
    link: "https://superchaingroup.com/",
  },
  {
    img: projectimage_waiting,
    desctiption: "project_more",
    link: "#",
  },

  {
    img: projectimage_waiting,
    desctiption: "project_more",
    link: "#",
  },
];

const dataMylife = [
  {
    img: dataMylife_img_1,
    desctiption: "desctiption_1",
  },
  {
    img: dataMylife_img_2,
    desctiption: "desctiption_2",
  },
  {
    img: dataMylife_img_3,
    desctiption: "desctiption_3",
  },
  {
    img: dataMylife_img_4,
    desctiption: "desctiption_4",
  },
  {
    img: dataMylife_img_5,
    desctiption: "desctiption_5",
  },
  {
    img: dataMylife_img_6,
    desctiption: "desctiption_6",
  },
  {
    img: dataMylife_img_7,
    desctiption: "desctiption_7",
  },
  {
    img: dataMylife_img_8,
    desctiption: "desctiption_8",
  },
  {
    img: dataMylife_img_9,
    desctiption: "desctiption_9",
  },
];

const contactConfig = {
  YOUR_EMAIL: "jackliuwork55@gmail.com",
  YOUR_FONE: "(+886)979-760-220",
  description: "desctiption",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_zlgdl49",
  YOUR_TEMPLATE_ID: "template_n9qo85a",
  YOUR_USER_ID: "KgMuF4M5OeD-w2wDF",
};

const socialprofils = {
  github: "https://github.com/dracarys55/",
  medium: "https://blog-plum-ten-93.vercel.app/",
  linkedin: "https://www.linkedin.com/in/jack-liu-2b95a0121/",
  facebook: "",
  instagram: "",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  dataMylife,
};
