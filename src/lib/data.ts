import {
  Briefcase,
  GraduationCap,
  Home,
  Mail,
  User,
  Projector,
  Award,
  Book,
  Github,
  Linkedin,
  Phone,
  Code,
} from 'lucide-react';

export const portfolioData = {
  name: 'Nadeera Lakshan',
  title: 'Software Engineer (UG)',
  aboutMe:
    'I am a motivated Software Engineering undergraduate with hands-on experience in MERN stack development, UI/UX design, and system automation. Proven ability to develop scalable applications, deliver user-friendly interfaces, and collaborate in agile project environments. Seeking an internship where I can contribute creativity, technical skills, and problem-solving mindset to build impactful digital solutions..',
  contact: {
    email: 'nadeeralakshanuni2@gmail.com',
    phone: '+94 766526039',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/nadeera-lakshan-8b9507253',
        icon: Linkedin,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/nadeera-lakshan',
        icon: Github,
      },
    ],
  },
  education: [
    {
      degree: 'BSc (Hons) in Information Technology – Software Engineering Specialization',
      institution: 'ESOFT Uni',
      period: '2022–Present',
      details: 'Programming, System Analysis, Software Development, Emerging Technologies.',
    },
    {
      degree: 'Diploma in Management and Development',
      institution: 'University of Peradeniya',
      period: '2021–2022',
      details: '',
    },
    {
      degree: 'A/L Combined Mathematics',
      institution: 'Bandaranayaka Central College Kegalle',
      period: '2015–2017',
      details: '',
    },
  ],
  workExperience: [
    {
      role: 'Graphic Designer',
      company: 'Acphix Design',
      period: 'Aug 2024 – Present',
      details: [
        'Created attractive digital and print media designs.',
        'Collaborated on creative concepts.',
        'Worked with Adobe Illustrator, Photoshop, and Figma.',
      ],
    },
  ],
  projects: [
    {
      name: 'Vehicle Breakdown Assistance System',
      period: '2024–2025',
      description:
        'A MERN stack project with real-time garage suggestions, service center–parts shop communication, integrated parts ordering/tracking, REST APIs, user authentication, booking system, and responsive React-based UI.',
      image: 'project1',
      tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'REST API'],
      githubUrl: 'https://github.com/Nadeera998/Vehicle-Breakdown-Assistant-System',
      liveUrl: '#',
    },
    {
      name: 'FitLife Gym Management System',
      period: '2025',
      description:
        'A desktop application using C# and SQL Server to manage gym operations. Features include secure login, role-based dashboards, CRUD functionality for member and staff management, and a booking system.',
      image: 'project4',
      tags: ['C#', '.NET Framework', 'SQL Server', 'Desktop App'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      name: 'Hospital Consultation Mobile Application',
      period: '2024',
      description:
        'Designed a UI/UX prototype in Figma for appointment booking, doctor selection, patient registration, and consultation history.',
      image: 'hospital-app',
      tags: ['UI/UX', 'Figma', 'Mobile App Design'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      name: 'Portfolio Website',
      period: '2025',
      description:
        'A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience. Designed with a clean and modern UI, and fully responsive for all devices.',
      image: 'portfolio-project',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ],
  skills: {
    programming: ['C#', 'JavaScript', 'HTML', 'CSS'],
    databases: ['MySQL', 'MongoDB', 'PHP'],
    frameworksTools: ['React', 'Node.js', 'Figma'],
    development: ['Web Development', 'Software Development', 'Mobile App Development'],
    softSkills: ['Teamwork', 'Critical Thinking', 'Leadership', 'Communication', 'Ability to Work Under Pressure'],
  },
  certifications: [
    {
      name: 'Trainee – Full Stack Developer',
      issuer: 'University of Moratuwa',
      year: '2025',
    },
    {
      name: 'Web Design for Beginners',
      issuer: 'University of Moratuwa',
      year: '2024',
    },
    {
      name: 'Front-end Web Development',
      issuer: 'University of Moratuwa',
      year: '2024',
    },
    {
      name: 'Server-side Web Programming',
      issuer: 'University of Moratuwa',
      year: '2024',
    },
    {
      name: 'Python Programming',
      issuer: 'University of Moratuwa',
      year: '2024',
    },
    {
      name: 'Agile Project Management',
      issuer: 'HP Life',
      year: '2024',
    },
    {
      name: 'Fundamentals of Digital Marketing',
      issuer: 'Google Digital Academy',
      year: '2024',
    },
    {
      name: 'UI/UX for Beginners',
      issuer: 'Great Learning Academy',
      year: '2024',
    },
  ],
};

export const navigationLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: Projector },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export type PortfolioData = typeof portfolioData;
