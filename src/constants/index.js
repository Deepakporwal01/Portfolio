import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1,ecomhero,ecom1,ecom2,ecom3,chattyhero,chatty1,chatty2,chatty3,porthero,port1,port2,Ayurhero,Ayur1,Ayur2,Ayur3 , responsive, react, fullstack,
  Ayur4,
  studynotion1,
  studynotion2,
  studynotion4,
  studynotion3,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kaungmyatkyaw/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/linthantkhai',
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/rhaegar_121',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/Rhaegar121',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/Rhaegar121',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'RSpec',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Docker',
    icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'ShopSphere',
    desc: 
  "ShopsSphere is a full-featured eCommerce web applicatio. Designed specifically for the electronics market, with real-time cart updates, user authentication, and order tracking features."
    ,
    tech: ['React', 'Redux', 'Express','Node', 'MongoDb','TailwindCSS'],
    img:ecomhero ,
    carousel: [ecom1, ecom2, ecom3],
    source_link: 'https://github.com/Deepakporwal01/ShopSphere',
    live_link: 'https://shopspheree.onrender.com/',
  },
  {
    id: 2,
    name: 'AyurWell',
    desc: ' A holistic wellness platform blending ancient Ayurvedic wisdom with modern AI to offer personalized insights, diagnostics, remedies, and lifestyle recommendations.',
    tech: ['React', 'Node', 'Express','TailWind','flask ','MongoDb','Python'],
    img: Ayurhero,
    carousel: [Ayur1,Ayur2, Ayur3, Ayur4],
    source_link: 'https://github.com/Deepakporwal01/AyurWell',
    live_link: 'https://ayurwell.onrender.com',
  },
  {
    id: 3,
    name: 'Chatty',
    desc:
"A Real time Messaging App which allows users to create accounts and chat with each other in real-time.",
    tech: ['React', 'Node', 'DaisyUI', 'Socket.io','WebRtc','MongoDb','Express'],
    img: chattyhero,
    carousel: [chatty1, chatty2, chatty3],
    source_link: 'https://github.com/Deepakporwal01/Chatty',
    live_link: 'https://chattyfrontend.onrender.com',
  },
  {
    id: 4,
    name: 'Portfolio',
    desc: ' This is my personal portfolio website, designed to showcase my skills, projects, and experiences as a web developer. It features a clean and modern design, with sections for my biography, skills, projects, testimonials, and contact information.',
    img: porthero,
     tech: ['React', 'framermotion', 'Threejs','CSS','Tailwind CSS'],
    carousel: [port1, port2],
    source_link: 'https://deepaksportfolio.vercel.app/',
    live_link: 'https://deepaksportfolio.vercel.app/',
  },
  {
    id: 5,
    name: 'StudyNotion',
    desc: "Study Notion is an ED Tech (Education Technology) web application developed using the MERN stack.",
    tech: ['React', 'Node', 'Express','MongoDb'],
    img: studynotion1,
    carousel: [studynotion2, studynotion3, studynotion4],
    source_link: 'https://github.com/Deepakporwal01/StudyNotion',
    live_link: ' ',
  },
 
];

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hasan Rony',
    image: 'https://avatars.githubusercontent.com/u/77187003?v=4',
    text: 'I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/ahroniy/',
  },
  {
    id: 2,
    name: 'Rachel Isaac',
    image: 'https://media.licdn.com/dms/image/D4D35AQHOKsZ2nSaTjg/profile-framedphoto-shrink_400_400/0/1665541124692?e=1721469600&v=beta&t=Evk76YZRsti88Lyr1khjrlxcZKF8v2hrbA3G7YLhIz4',
    text: "Throughout our collaboration, I was consistently impressed by Barry's professionalism, attention to detail, and ability to adapt to changing requirements.",
    country: 'United Arab Emirates',
    linkedIn: 'https://www.linkedin.com/in/racheleno/',
  },
  {
    id: 3,
    name: 'Muhammad Talha Hanif',
    image: 'https://media.licdn.com/dms/image/D4D03AQF6A-cET7akGQ/profile-displayphoto-shrink_400_400/0/1687861230806?e=1726099200&v=beta&t=C1jrASsQ8AXgmkVrndSBMyBfh7eTBQ_pe2VG79FSNN0',
    text: 'He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.',
    country: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muhammad-talha-hanif/',
  },
  {
    id: 4,
    name: 'Jerome Osman',
    image: 'https://media.licdn.com/dms/image/D4D03AQE1F2tqE5cttw/profile-displayphoto-shrink_400_400/0/1694205105262?e=1726099200&v=beta&t=TYftRu2dWsY-5eUgZSsorbbURiQMGtGVOcmcJeDrsGQ',
    text: 'His kindness and patience with his peers makes him easy to work with no matter the difficulty, and that reflects as well when it comes to helping others in his team or explaining something when need be',
    country: 'South Africa',
    linkedIn: 'https://www.linkedin.com/in/jerome-osman/',
  },
  {
    id: 5,
    name: 'Innocent N.',
    image: 'https://media.licdn.com/dms/image/D5603AQE1qYMUswBOAw/profile-displayphoto-shrink_400_400/0/1688151359384?e=1726099200&v=beta&t=rkHvuiSC9ww8BOxUhz2cqpIdzAoW6ZUEWbJDQW5W5OU',
    text: 'Communication was another strength that Barry brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.',
    country: 'Rwanda',
    linkedIn: 'https://www.linkedin.com/in/innocent-n/',
  },
  {
    id: 6,
    name: 'Marko Kermichiev',
    image: 'https://avatars.githubusercontent.com/u/112749658?v=4',
    text: 'I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.',
    country: 'Macedonia',
    linkedIn: 'https://www.linkedin.com/in/marko-kermichiev/',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
