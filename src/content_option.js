import my_pic from './assets/images/my_pic.jpg';
import projectimage_1 from './assets/projectImages/rise_of_elves.png';
import projectimage_2 from './assets/projectImages/S8.png';
import projectimage_3 from './assets/projectImages/E_commerce.png';
import projectimage_4 from './assets/projectImages/waiting.jpg';

import dataMylife_img_1 from './assets/projectImages/dataMylife_img_14519.jpg';
import dataMylife_img_2 from './assets/projectImages/dataMylife_img_15485.jpg';
import dataMylife_img_3 from './assets/projectImages/dataMylife_img_15616.jpg';
import dataMylife_img_4 from './assets/projectImages/dataMylife_img_84892.jpg';
import dataMylife_img_5 from './assets/projectImages/dataMylife_img_8946.jpg';
import dataMylife_img_6 from './assets/projectImages/dataMylife_img_121459.jpg';
import dataMylife_img_7 from './assets/projectImages/dataMylife_img_85461.jpg';
import dataMylife_img_8 from './assets/projectImages/dataMylife_img_12232.jpg';
import dataMylife_img_9 from './assets/projectImages/dataMylife_img_156489.jpg';

const logotext = 'J A C K';
const meta = {
  title: 'Jack Liu',
  description: 'I’m Jack Liu frontend devloper.',
};

const introdata = {
  title: 'I’m Jack Liu.',
  animated: {
    first: 'A Front-End Engineer',
    second: 'An English Teacher',
    third: 'A Fitness Enthusiast',
  },
  description:
    'Enjoy learning all kinds of stuff, especially languages. No matter is computer language or human language. By the way, I write cool website using JavaScript.',
  your_img_url: my_pic,
};

const dataabout = {
  title: 'About myself',
  aboutme: `Hello, my name is Jack. I am currently a 
  front-end engineer with one year of work experience. 
  I mainly use javaScript and TypeScript for development,
   and for front-end framework I mainly use React. 
   I also have a golden certificate from TOEIC English Test,
   and have been an English tutor for almost three years.
    `,
};

const worktimeline = [
  {
    jobtitle: 'Front-end Engineer',
    where: 'Hengwei Technology Co., Ltd',
    date: '2020.09 - 2021.08',
  },
];

const skills = [
  {
    name: 'JavaScript',
    value: 80,
  },
  {
    name: 'TypeScript',
    value: 70,
  },
  {
    name: 'React',
    value: 70,
  },
  {
    name: 'Node.js',
    value: 70,
  },
  {
    name: 'Jenkins',
    value: 60,
  },
];

const dataportfolio = [
  {
    img: projectimage_1,
    desctiption: 'Rise of elves 區塊鏈遊戲官方網站',
    link: 'https://www.riseofelves.com/',
  },
  {
    img: projectimage_2,
    desctiption: 'S 8 遊戲官方網站',
    link: '#',
    github: '#',
  },
  {
    img: projectimage_3,
    desctiption: ' 電 商 購 物 網 站 ',
    link: 'https://github.com/dracarys55/E-commerce',
    github: 'https://supershop54.herokuapp.com/',
  },
  {
    img: projectimage_4,
    desctiption: '未來即將有更多專案，請稍待。',
    link: '#',
  },
  {
    img: projectimage_4,
    desctiption: '未來即將有更多專案，請稍待。',
    link: '#',
  },
  {
    img: projectimage_4,
    desctiption: '未來即將有更多專案，請稍待。',
    link: '#',
  },

  {
    img: projectimage_4,
    desctiption: '未來即將有更多專案，請稍待。',
    link: '#',
  },
];

const dataMylife = [
  {
    img: dataMylife_img_1,
    desctiption: 'Sometimes,This is what you have to do as a teacher.',
  },
  {
    img: dataMylife_img_2,
    desctiption: 'Taking a pic with my physique idol !!',
  },
  {
    img: dataMylife_img_3,
    desctiption: 'After work routine : Traing.',
  },
  {
    img: dataMylife_img_4,
    desctiption: 'Last day of work.',
  },
  {
    img: dataMylife_img_5,
    desctiption: 'Go hiking with my lovely college/best designer ever.',
  },
  {
    img: dataMylife_img_6,
    desctiption: 'College graduation with weight traning club.',
  },
  {
    img: dataMylife_img_7,
    desctiption: 'Summer Time !',
  },
  {
    img: dataMylife_img_8,
    desctiption: 'During Covid-19,but still training.',
  },
  {
    img: dataMylife_img_9,
    desctiption: 'Having a farewell dinner with all the colleagues.',
  },
];

const contactConfig = {
  YOUR_EMAIL: 's6263269@gmail.com',
  YOUR_FONE: '(+886)979-760-220',
  description: `I’m  currently looking for new opportunities, my inbox is always open. 
    Whether you have a question or just want to say hi, let me know !!`,
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: 'service_zlgdl49',
  YOUR_TEMPLATE_ID: 'template_n9qo85a',
  YOUR_USER_ID: 'KgMuF4M5OeD-w2wDF',
};

const socialprofils = {
  github: 'https://github.com/dracarys55/',
  medium: 'https://jackliu-61470.medium.com/',
  linkedin: 'https://www.linkedin.com/in/jack-liu-2b95a0121/',
  facebook: 'https://www.facebook.com/profile.php?id=100002098647412',
  instagram: 'https://www.instagram.com/jack_liu_555/',
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
