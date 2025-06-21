// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'DBadshahCode', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['DBadshahCode/gitprofile'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Library Management System',
          description:
            'A Windows Forms application for managing library operations, including book management and transaction tracking.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammed Suliyawala',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mohammed-suliya-wala-668594181',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'suliyawalamohammed',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mhmdsly.91@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'Bootstrap',
    'React.js',
    'Node.js',
    'JS',
    'JQuery',
    'PHP',
    'MySQL',
    'WordPress',
    'C#',
    'ASP.NET MVC',
    'Entity Framework',
    'Tailwind',
    'MSSQL',
    'DevExpress',
    'DevExtreme',
    'Angular',
    'Typescript',
    'MongoDB',
    'Express.js',
    'Linux',
    'MSOffice',
    'Teamwork',
  ],
  experiences: [
    {
      company: 'Expert Business Solutions',
      position: 'Software Developer',
      from: 'July 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Visionary Services',
      position: 'Junior Web Developer',
      from: 'August 2021',
      to: 'June 2022',
      companyLink: '',
    },
    {
      company: 'DarbarWebs IT Solutions',
      position: 'Intern',
      from: 'July 2021',
      to: 'July 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Full Stack(MEAN) Web Development',
      body: 'from Grras Solutions, Jaipur',
      year: 'July 2020',
      link: '',
    },
    {
      name: 'The Complete 2020 PHP Full Stack Web Developer Bootcamp',
      body: 'from Udemy',
      year: 'June 2020',
      link: '',
    },
    {
      name: 'Building Web Applications in PHP',
      body: 'from the University of Michigan',
      year: 'June 2020',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Career Point University, Kota',
      degree: 'Bachelor of Computer Applications (BCA)',
      from: '2018',
      to: '2021',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
