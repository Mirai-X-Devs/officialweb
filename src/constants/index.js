import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02, 
  discordBlack, 
  file02, 
  homeSmile, 
  notification2,
  notification3,
  notification4, 
  plusSquare, 
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd, 
  sliders04, 
  yourlogo,
  chakraUi,
  firebase,
  mongodb,
  nextjs,
  nodejs,
  postgresql,
  reactjs, 
  tailwindcss,
  github,
  linkedin,
} from "../assets";

export const navigation = [
  /* {
    id: "0",
    title: "Projects",
    url: "#features",
  }, */
  {
    id: "1",
    title: "Tech Stack",
    url: "#devlang",
  },
  /* {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  }, */
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [
  {
    id:"1",
    image:notification4,
    url: "https://github.com/thecoderbutcher"
  },
  {
    id:"2",
    image:notification3,
    url: "https://github.com/Web-Wise-Dynamics"
  },
  {
    id:"3",
    image:notification2,
    url: "https://github.com/Mirai-X-Devs"
  },
];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "We use the latest technologies on the market without leaving aside its robustness and maturation.";

export const collabContent = [
  {
    id: "0",
    title: "Modern and robust technology",
    text: collabText,
  },
  {
    id: "1",
    title: "Latest generation cloud servers",
  },
  {
    id: "2",
    title: "Databases according to needs",
  },
]; 

export const collabApps = [
  {
    id: "0",
    title: "Nodejs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Reactjs",
    icon: reactjs,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Nextjs",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "ChakraUi",
    icon: chakraUi,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "Tailwindcss",
    icon: tailwindcss,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Firebase",
    icon: firebase,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Postgresql",
    icon: postgresql,
    width: 34,
    height: 34,
  },
  
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "1",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/Mirai-X-Devs",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/w2d-ar",
  },
  {
    id: "3",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
];
