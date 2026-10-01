/**
 * Central portfolio data for project and education information.
 * Keeping reusable content in one file makes the application
 * easier to maintain and keeps page components readable.
 */

export const projects = [
  {
    title: 'Sflix – Full Stack Netflix Clone',

    image: '/projects/project1.png',

    technologies:
      'React JS, Firebase, The Movie Database (TMDB) API',

    role: 'Developer',

    description:
      'Developed a Netflix-inspired web application that allows users to explore movie and entertainment content through a modern streaming-style interface.',

    outcome:
      'Built a responsive application using React JS, integrated Firebase services, and connected to The Movie Database API to retrieve and display movie information.',

    link: 'https://sflix-eight.vercel.app/login',

    linkText: 'View Live Project',
  },

  {
    title: 'SadyaAI – Full Stack AI Chatbot',

    image: '/projects/project2.png',

    technologies:
      'Node.js, Next.js, MongoDB, Clerk, Vercel, DeepSeek API, Svix Webhooks, Tailwind CSS',

    role: 'Full-Stack Developer',

    description:
      'Developed a full-stack AI chatbot application that provides intelligent and interactive responses through advanced API integration.',

    outcome:
      'Created and deployed an end-to-end AI application with authentication, database integration, responsive design, webhook functionality and cloud deployment.',

    link: 'https://sadya-main.vercel.app/',

    linkText: 'View Live Project',
  },

  {
    title: 'Rendezvous – Full Stack Video Calling Application',

    image: '/projects/project3.png',

    technologies:
      'MongoDB, Express JS, React JS, Socket.io, Material UI, Axios, Bcrypt, Render',

    role: 'Full-Stack Developer',

    description:
      'Developed a real-time video calling application with screen-sharing functionality and secure user authentication.',

    outcome:
      'Created a full-stack communication platform using Socket.io for real-time functionality and the MERN stack for application development.',

    link: 'https://github.com/sadyasinthi1/video-calling-software',

    linkText: 'View on GitHub',
  },
];


/**
 * Education and professional qualifications.
 */
export const education = [
  {
    credential: 'Software Engineering Technician (AI Program)',
    institution: 'Centennial College',
    dates: '2022',

    detail:
      'Focused on software development, artificial intelligence, programming, databases, web development and application development.',
  },

  {
    credential: 'Certificate in French Language Studies',
    institution: 'Alliance Française de Dhaka',
    dates: '2018 – 2021',

    detail:
      'Completed French language studies with a focus on written and verbal communication.',
  },
];