const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Ike Ofoegbu',
  role: 'Software Engineer',
  // company: 'Acme Labs',
  description: [
    "I specialize in full-stack web development with an emphasis on frontend engineering. I graduated from UCLA with a B.S. in Cognitive Science and a Specialization in Computing. In school, I learned about the applications of Computer Science within the study of intelligent systems, both real and artificial. Since then, I've strived to use software as a medium for solving more general problems.",
  ],
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/ike-ofoegbu',
    github: 'https://github.com/magic-ike',
  },
  greetingEmoji: '👋🏽',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/iodev.io-placeholder-image.png',
    name: 'Express TS Boilerplate',
    description: [
      'A complete template (for developers) for building RESTful API services with Express and TypeScript',
    ],
    stack: ['TypeScript', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/magic-ike/express-ts-boilerplate',
  },
  {
    thumbnail: 'images/data-card-for-spotify-preview.png',
    name: 'Data Card for Spotify',
    description: [
      'A web service for dynamically generating embeddable images that compile Spotify activity',
    ],
    stack: [
      'TypeScript',
      'Node.js',
      'Express',
      'Spotify Web API',
      'MongoDB',
      'Redis',
      'jQuery',
    ],
    sourceCode: 'https://github.com/magic-ike/spotify-data-card',
    livePreview: 'https://www.data-card-for-spotify.com',
  },
  {
    thumbnail: 'images/leanfolio-preview.png',
    name: 'Leanfolio',
    description: [
      'A minimalist portfolio template for developers. Used to build this site',
    ],
    stack: ['React', 'Next.js'],
    sourceCode: 'https://github.com/magic-ike/leanfolio',
    livePreview: 'https://leanfolio.vercel.app',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/atalog-landing-page/master/docs/atalog-site-preview.png',
    name: 'Atalog',
    description: [
      'A closed-source social networking and messaging application for iOS. Released under the (now defunct) Atalog Inc.',
    ],
    stack: [
      'Swift',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Storage',
      'OneSignal',
    ],
    livePreview: 'https://atalog.co',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/regression-neural-network/master/br-simple-10000-0.png',
    name: 'Regression Neural Network',
    description: [
      "A script for visualizing a feedforward neural network's understanding of a math function under different parameters",
    ],
    stack: ['MATLAB'],
    sourceCode: 'https://github.com/magic-ike/regression-neural-network',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/laser-ship-links/master/assets/images/laser-ship-app-icon.webp',
    name: 'Laser Ship',
    description: [
      'A closed-source vertically scrolling shooter mobile game for iOS and Android',
    ],
    stack: ['C#', 'Unity'],
    livePreview: 'https://magic-ike.github.io/laser-ship-links/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'PHP',
  'HTML',
  'CSS',
  'Swift',
  'C++',
  'jQuery',
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  'Express',
  'Redis',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Git',
  'Mercurial',
  'ESLint',
  'Jest',
  'Heroku',
  'Vercel',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ikeofoegbu99@gmail.com',
}

export { about, projects, skills, contact }
