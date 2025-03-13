import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "financial bank accounts",
    des: "A financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    img: "/bk.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "https://banking-fhdd3nenn-yyassires-projects.vercel.app/sign-in",
     git:'https://github.com/yyassire/banking'
  },
  {
    id: 2,
    title: "NFT Marketplace",
    des: "An NFT marketplace  where users can buy, sell, and trade unique digital assets.",
    img: "/open9.png",
    iconLists: ["/tail.svg", "/c.svg"],
    link: "https://open9-three.vercel.app/",
    git:'https://github.com/yyassire/open9'

  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  {
    id: 4,
    title: "3D Slider",
    des: "A 3D Slider built with React and Three fiber",
    img: "/3dslider.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://3dslider-three.vercel.app",
    git:'https://github.com/yyassire/3dslider'
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance",
    desc: "Led the dev of websites for  clients, from initial concept to deployment",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    time:"2025 - present",
    company:'Self Imployed'
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Developed and maintained user-facing features using modern technologies sach as Django and Laravel",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
       time:"2024 - 2025",
    company:'Tecrube Bilisim'
  },
  {
    id: 3,
    title: "Frontend Developer",
    // desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    desc: "Developed and maintained  web-based platform using React.js Nextjs and Nuxt, enhancing interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
       time:"2021 - 2024",
    company:'Istar Danismanlik'
  },
  {
    id: 4,
    title: "React Native intern",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native",
    // desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
       time:"2020 - 2020",
    company:'MyBranz'
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/yyassire'
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link:'https://github.com/yyassire'


  // },
  {
    id: 3,
    img: "/link.svg",
    link:'https://www.linkedin.com/in/yassire-yaguibou-435983223/'

  },
];
