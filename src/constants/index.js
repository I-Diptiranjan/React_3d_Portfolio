import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dipti,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Advanced Java",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Amazon Web Services",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Schooling (Standard 1-10)",
    company_name:
      "Sarswati Shishu Vidya Mandir, Sankhachila ,Jajpur & Panchayat Hingula High Shool, Laxminagar, Jajpur",
    icon: dipti,
    iconBg: "#383E56",
    date: "March 2009 - April 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Higher Secondary Schooling",
    company_name: "KIIT Higher Secondary School ,Patia,BBSR",
    icon: dipti,
    iconBg: "#E6DEDD",
    date: "May 2019 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graduation (UG)",
    company_name: "Silicon Institute of Technology ,Patia,BBSR",
    icon: dipti,
    iconBg: "#383E56",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: dipti,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Diptiranjan proved me wrong.",
    name: "Anonymous",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Diptiranjan does.",
    name: "Anonymous",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Diptiranjan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anonymous",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Student Management System",
    description:
      "A simple Student Management System with all CRUD Operations. Separate Admin and User Panel.Student can register here , can see their Dashboard and can modify their Details.Admin Can see all students details and can do necessary changes in there data and can delete it.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Servlet",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/I-Diptiranjan/student_management_system_advance_java",
    live_link:
      "https://github.com/I-Diptiranjan/student_management_system_advance_java",
  },
  {
    name: "Book My Stay",
    description:
      "BookMyStay is an innovative Hotel reservation platform designed to simplify the booking process .Users can Create their account and book the hotel by filling the Form in the Website.After Booking they can see their booking status in the homepage itself.Admin can see all the booking records and can perform 3 operations like. Approve or Cancel the Booking or Remove the User",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/I-Diptiranjan/Book_My_Stay",
    live_link: "https://book-my-stay.netlify.app/",
  },
  {
    name: "Golden Sparrow",
    description:
      "A stunning jewellery website GOLDEN SPARROW built with the power of MERN Stack.User centric Design.Seamless performance.Wide range of products.Category wise filter.Payment mode Integration (Razorpay).Good Authentication.Animated Sign up and Sign in Page.Invoice Page after Payment.Include a Chatbot to Interact with Users",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/I-Diptiranjan/golden_sparrow",
    live_link: "https://goldensparrow.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
