import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Darshan Sojitra",
  initials: "DS",
  url: "http://localhost:3000/",
  location: "Mumbai, India",
  locationLink: "",
  description:
    "Full Stack Developer who’s always messing around with new tech, automating things, and building cool web apps.",
  summary:
    "Full Stack Web Developer with expertise in MERN stack and Django. Passionate about building scalable, responsive web applications, optimizing performance, and delivering seamless user experiences. Skilled in backend and frontend technologies, including Node.js, React, MongoDB, and Python. Always eager to learn and stay ahead of emerging tech trends.",
  avatarUrl: "/profile.jpg",
  skills: [
    "C++",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Django",
    "Express.js",
    "MongoDB",
    "Python",
    "SQL",
    "Problen Solving",
    "Data Structures",
    "Algorithms",
    "REST APIs",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "darshansojitra2003@gmail.com",
    tel: "+91 7506743942",
    social: {
      email: {
        name: "Send Email",
        url: "mailto:darshansojitra2003@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SojitraDarsha",
        icon: Icons.x,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Darshan-Sojitra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/darshan-sojitra-57b2a6220/",
        icon: Icons.linkedin,

        navbar: true,
      },

      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },

    },
  },

  work: [
    {
      company: "DynamicLabz",
      href: "https://dynamiclabz.net",
      badges: [],
      location: "Remote",
      title: "Frontend and Backend Developement Trainee",
      logoUrl: "/dynamiclabzlogo.jpg",
      start: "Dec 2024",
      end: "March 2025",
      description:
        "At Dynamic Labz, specializing in backend development using Django and Django REST Framework. Contributed to the design and implementation of scalable APIs, optimized database interactions, and integrated real-time features. Gained extensive experience in backend architecture, debugging, and ensuring high-performance web applications while collaborating closely with the team to enhance system efficiency and reliability.",
    },

  ],
  education: [
    {
      school: "Parul University",
      href: "https://paruluniversity.ac.in/",
      degree: "Btech in Computer Science & Engineering(CSE)",
      logoUrl: "/parullogo.png",
      start: "2021",
      end: "2025",
    },

  ],
  projects: [
    {
      title: "Eximx",
      href: "https://darshan-sojitra.github.io/exii/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "I designed and developed a responsive landing page for an invoice management platform using ReactJS, integrating modern UI libraries for sleek components and smooth animations. The site is optimized for both desktop and mobile. Focused on delivering a seamless UI/UX experience, the landing page effectively showcases the product’s key features and benefits.",
      technologies: [
        "Javascript",
        "BootstrapCSS",
        "UI/UX Design",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "View Website",
          href: "https://darshan-sojitra.github.io/exii/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Darshan-Sojitra/exii",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/exii.mp4",
    },
    {
      title: "Sanki Events",
      href: "https://darshan5203.pythonanywhere.com/",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
        "Developed a responsive web app for discovering and exploring concerts, theater, and cultural events with WhatsApp-based booking, with added feature of products like tshirts. Built using JS, Bootstrap CSS, and WhatsApp API integration.",
      technologies: [
        "JavaScript",
        "Django",
        "Python",
        "SQLite",
        "TailwindCSS",
        "UI/UX Design",
        "Backend Development",
      ],
      links: [
        {
          type: "Website",
          href: "https://darshan5203.pythonanywhere.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Darshan-Sojitra/Sanki_events",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/sanki.mp4",
    },
    {
      title: "Sales Management Portal",
      href: "",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
        "Developed a web-based portal for event organizers to manage ticket sales, track reseller performance, and monitor event analytics. Built using Bootstrap CSS, and Django for backend management.",
      technologies: [
        "JavaScript",
        "Django",
        "Python",
        "AWS S3",
        "SQLite",
        "BootstrapCSS",
        "UI/UX Design",
        "Backend Development",
        "Database Design",
        "Responsive Design",
        "Deployment",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "/Salesmanagement.mp4",
    },
    {
      title: "Beautiful Todos",
      href: "https://beautiful-todos.vercel.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Created a clean, user-friendly to-do list application with Google Login, allowing users to add, delete, and mark tasks as complete. Built using the MERN stack (MongoDB, Express, ReactJS, Node.js) with a responsive, modern UI.",
      technologies: [
        "ReactJS",
        "Javscript",
        "Node.js",
        "Google Authentication",
        "JWT",
        "Express.js",
        "MongoDB",
        "CSS3",
        "UI/UX Design",

      ],
      links: [
        {
          type: "Website",
          href: "https://beautiful-todos.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Darshan-Sojitra/Beautiful-Todos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/todos.mp4",
    },
    // {
    //   title: "Blog Website",
    //   href: "https://beautiful-todos.vercel.app/",
    //   dates: "Dec 2024 - Jan 2025",
    //   active: true,
    //   description:
    //     "Created a clean, user-friendly to-do list application with Google Login, allowing users to add, delete, and mark tasks as complete. Built using the MERN stack (MongoDB, Express, ReactJS, Node.js) with a responsive, modern UI.",
    //   technologies: [
    //     "ReactJS",
    //     "Javscript",
    //     "Node.js",
    //     "Google Authentication",
    //     "JWT",
    //     "Express.js",
    //     "MongoDB",
    //     "CSS3",
    //     "UI/UX Design",

    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://beautiful-todos.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Darshan-Sojitra/Beautiful-Todos",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },

  ],
  hackathons: [
    {
      title: "Smart India Hackathon(SIH 2023)",
      dates: "",
      location: "Vadodara, Gujarat",
      description:
        "Idea web-based portal  that enables professors to connect, discuss, and collaboratively create academic plans and curriculums from anywhere. The platform provides a centralized space for academic discussions, document sharing, and planning, making curriculum development more efficient, organized, and accessible.",
      image:
        "/SIH2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },


  ],
} as const;
