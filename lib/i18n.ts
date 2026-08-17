export const locales = ['en-US', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

export type Dictionary = {
  metadata: { title: string; description: string };
  navigation: {
    label: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    cta: string;
  };
  about: {
    number: string;
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    educationLabel: string;
    education: string;
    languagesLabel: string;
    languages: string;
  };
  experience: { number: string; eyebrow: string; title: string };
  projects: { number: string; eyebrow: string; title: string; stackLabel: string };
  skills: {
    number: string;
    eyebrow: string;
    title: string;
    groups: Array<{ title: string; details: string }>;
  };
  contact: {
    number: string;
    eyebrow: string;
    title: string;
    email: string;
    phone: string;
    location: string;
  };
  footer: { copyright: string; github: string; linkedin: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  'en-US': {
    metadata: {
      title: 'Eduardo Sohne — Software Engineer',
      description:
        'Software Engineer specializing in frontend architecture, React, and TypeScript.',
    },
    navigation: {
      label: 'Main navigation',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Software Engineer',
      title: 'Frontend architecture for scalable web applications.',
      description:
        'Software Engineer with 5+ years of experience specializing in React and TypeScript.',
      location: 'Gramado, RS — Brazil',
      cta: 'Let’s talk',
    },
    about: {
      number: '01',
      eyebrow: 'About me',
      title: 'Built to scale.',
      lead: 'I build scalable web applications with a focus on frontend architecture, Design Systems, shared component libraries, and reusable frontend infrastructure.',
      description:
        'My professional experience includes React, Vue.js, Python, and Django. I collaborate with UX/UI teams, contribute to technical planning and architecture, and help teammates adopt frontend engineering best practices.',
      educationLabel: 'Education',
      education: 'Information Systems (incomplete) — FACCAT',
      languagesLabel: 'Languages',
      languages: 'Portuguese (native) · English (professional working proficiency)',
    },
    experience: { number: '02', eyebrow: 'Career', title: 'Experience.' },
    projects: {
      number: '03',
      eyebrow: 'Selected work',
      title: 'What I’ve built.',
      stackLabel: 'Technologies used',
    },
    skills: {
      number: '04',
      eyebrow: 'Skills',
      title: 'Toolbox.',
      groups: [
        {
          title: 'Front-end',
          details:
            'React, TypeScript, JavaScript, Vue.js, HTML, CSS, React Query, React Hook Form, TanStack Table',
        },
        { title: 'Back-end', details: 'Python, Django, SQL, Firebase, and React Native' },
        {
          title: 'Architecture & tooling',
          details:
            'Design Systems, Storybook, Material UI, Styled Components, Emotion, GitHub Actions, GitHub Packages, Vite, Vitest, Jest, and unit testing',
        },
      ],
    },
    contact: {
      number: '05',
      eyebrow: 'Contact',
      title: 'Let’s build something together.',
      email: 'dudu.hit@gmail.com',
      phone: '+55 (51) 99795-1166',
      location: 'Gramado, RS — Brazil',
    },
    footer: { copyright: 'All rights reserved.', github: 'GitHub', linkedin: 'LinkedIn' },
  },
  'pt-BR': {
    metadata: {
      title: 'Eduardo Sohne — Engenheiro de Software',
      description:
        'Engenheiro de Software especializado em arquitetura frontend, React e TypeScript.',
    },
    navigation: {
      label: 'Navegação principal',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'Engenheiro de Software',
      title: 'Arquitetura frontend para aplicações web escaláveis.',
      description:
        'Engenheiro de Software com mais de 5 anos de experiência, especializado em React e TypeScript.',
      location: 'Gramado, RS — Brasil',
      cta: 'Vamos conversar',
    },
    about: {
      number: '01',
      eyebrow: 'Sobre mim',
      title: 'Construído para escalar.',
      lead: 'Desenvolvo aplicações web escaláveis com foco em arquitetura frontend, Design Systems, bibliotecas compartilhadas de componentes e infraestrutura frontend reutilizável.',
      description:
        'Minha experiência profissional inclui React, Vue.js, Python e Django. Colaboro com times de UX/UI, participo do planejamento técnico e de discussões de arquitetura, além de apoiar colegas com boas práticas de engenharia frontend.',
      educationLabel: 'Formação',
      education: 'Sistemas de Informação (incompleto) — FACCAT',
      languagesLabel: 'Idiomas',
      languages: 'Português (nativo) · Inglês (proficiência profissional)',
    },
    experience: { number: '02', eyebrow: 'Trajetória', title: 'Experiência.' },
    projects: {
      number: '03',
      eyebrow: 'Trabalhos selecionados',
      title: 'O que desenvolvi.',
      stackLabel: 'Tecnologias usadas',
    },
    skills: {
      number: '04',
      eyebrow: 'Competências',
      title: 'Caixa de ferramentas.',
      groups: [
        {
          title: 'Front-end',
          details:
            'React, TypeScript, JavaScript, Vue.js, HTML, CSS, React Query, React Hook Form, TanStack Table',
        },
        { title: 'Back-end', details: 'Python, Django, SQL, Firebase e React Native' },
        {
          title: 'Arquitetura e ferramentas',
          details:
            'Design Systems, Storybook, Material UI, Styled Components, Emotion, GitHub Actions, GitHub Packages, Vite, Vitest, Jest e testes unitários',
        },
      ],
    },
    contact: {
      number: '05',
      eyebrow: 'Contato',
      title: 'Vamos construir algo juntos.',
      email: 'dudu.hit@gmail.com',
      phone: '+55 (51) 99795-1166',
      location: 'Gramado, RS — Brasil',
    },
    footer: {
      copyright: 'Todos os direitos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
