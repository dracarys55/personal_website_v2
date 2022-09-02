import my_pic from './assets/images/my_pic.jpg';
import projectimage_1 from './assets/projectImages/H5.png';
import projectimage_2 from './assets/projectImages/S8.png';
import projectimage_3 from './assets/projectImages/E_commerce.png';
import projectimage_4 from './assets/projectImages/waiting.jpg';

const logotext = 'J A C K';
const meta = {
  title: 'Jack Liu',
  description: 'I’m Jack Liu frontend devloper.',
};

const introdata = {
  title: 'I’m Jack Liu.',
  animated: {
    first: 'I love coding',
    second: 'I code cool websites',
    third: 'I develop mobile apps',
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum',
  your_img_url: my_pic,
};

const dataabout = {
  title: 'abit about my self',
  aboutme:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.',
};
const worktimeline = [
  {
    jobtitle: 'Designer of week',
    where: 'YAdfi',
    date: '2020',
  },
  {
    jobtitle: 'Designer of week',
    where: 'Jamalya',
    date: '2019',
  },
  {
    jobtitle: 'Designer of week',
    where: 'ALquds',
    date: '2019',
  },
];

const skills = [
  {
    name: 'Python',
    value: 90,
  },
  {
    name: 'Djano',
    value: 85,
  },
  {
    name: 'Javascript',
    value: 80,
  },
  {
    name: 'React',
    value: 60,
  },
  {
    name: 'Jquery',
    value: 85,
  },
];

const services = [
  {
    title: 'UI & UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
  {
    title: 'Mobile Apps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
  {
    title: 'Wordpress Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
];

const dataportfolio = [
  {
    img: projectimage_1,
    desctiption: 'HTML5 多國語系遊戲',
    link: '#',
  },
  {
    img: projectimage_2,
    desctiption: 'S 8 遊戲官方網站',
    link: '#',
  },
  {
    img: projectimage_3,
    desctiption: ' 電 商 購 物 網 站 ',
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

  {
    img: projectimage_4,
    desctiption: '未來即將有更多專案，請稍待。',
    link: '#',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'name@domain.com',
  YOUR_FONE: '(555)123-4567',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ',
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
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
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
