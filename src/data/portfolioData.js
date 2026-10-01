/**
 * Centralized portfolio data keeps the page components easy to read and update.
 * Content can be edited here without changing presentation logic in each page.
 */
export const projects = [
  {
    title: 'SadyaAI',
    image: '/projects/sadyaai.svg',
    technologies: 'Node.js, Next.js, MongoDB, Clerk, Vercel, DeepSeek API, Svix Webhooks, Tailwind CSS',
    role: 'Full-stack developer',
    description:
      'Built and deployed a full-stack AI chatbot application with secure authentication, API integration and a modern responsive interface.',
    outcome:
      'Delivered an end-to-end AI web application that demonstrates full-stack architecture, third-party API integration and cloud deployment.',
  },
  {
    title: 'Imagify',
    image: '/projects/imagify.svg',
    technologies: 'MERN Stack, ClipDrop API, Render, Stripe',
    role: 'Full-stack developer',
    description:
      'Developed an AI-powered text-to-image SaaS application that generates images from text prompts and uses a credit-based workflow.',
    outcome:
      'Integrated AI image generation and secure payment functionality into a complete user-facing application.',
  },
  {
    title: 'Rendezvous',
    image: '/projects/rendezvous.svg',
    technologies: 'MongoDB, Express, React, Socket.io, Material UI, Axios, Bcrypt, Render',
    role: 'Full-stack developer',
    description:
      'Developed a real-time video calling application with screen sharing and secure user authentication.',
    outcome:
      'Created a working real-time communication platform using Socket.io and a MERN-based architecture.',
  },
  {
    title: 'Breast Cancer Prediction System',
    image: '/projects/prediction.svg',
    technologies: 'Python, PyTorch, Flask, Scikit-learn, Power BI, HTML/CSS',
    role: 'Machine learning developer',
    description:
      'Created a binary-classification neural-network solution and a Flask interface for entering diagnostic features and receiving risk predictions.',
    outcome:
      'Combined machine learning, a web interface and Power BI visual insights into an accessible prediction prototype.',
  },
];

export const education = [
  {
    credential: 'Software Engineering Technology - Advanced Diploma',
    institution: 'Centennial College, Toronto, Ontario',
    dates: 'January 2023 - Present',
    detail: 'Program focus includes software development, databases, QA/testing, web development and mobile development.',
  },
  {
    credential: 'Certificate - French Language Studies',
    institution: 'Alliance Française de Dhaka, Bangladesh',
    dates: 'May 2018 - May 2021',
    detail: 'French language studies with a focus on communication and language proficiency.',
  },
  {
    credential: 'Master of Business Administration',
    institution: 'University of Dhaka, Bangladesh',
    dates: 'June 2012 - June 2014',
    detail: 'Graduate-level business education supporting strong communication and business-analysis skills.',
  },
  {
    credential: 'BSc - Electronics & Telecommunications Engineering',
    institution: 'East West University, Bangladesh',
    dates: 'May 2008 - April 2012',
    detail: 'Engineering foundation in electronics, telecommunications and technical problem solving.',
  },
];

export const services = [
  {
    icon: '📊',
    title: 'Data Analytics & Visualization',
    description: 'Data preparation, SQL analysis, dashboards and insight communication using tools such as Power BI and Tableau.',
  },
  {
    icon: '💻',
    title: 'Full-Stack Web Development',
    description: 'Responsive web applications using React, JavaScript, Node.js, REST APIs and database technologies.',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning Prototyping',
    description: 'Machine-learning prototypes, predictive models and AI-enabled applications using Python and modern ML libraries.',
  },
  {
    icon: '✅',
    title: 'QA & Testing Support',
    description: 'Functional testing, defect identification, validation workflows and quality-focused support for software projects.',
  },
];
