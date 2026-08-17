export const locales = ['en-US', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

type SectionCopy = { number: string; eyebrow: string; title: string };

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
    workCta: string;
    contactCta: string;
  };
  impact: { label: string; metrics: Array<{ value: string; label: string }> };
  production: SectionCopy & {
    description: string;
    capabilities: Array<{ title: string; items: string[] }>;
  };
  about: SectionCopy & {
    lead: string;
    description: string;
    educationLabel: string;
    education: string;
    languagesLabel: string;
    languages: string;
  };
  projects: {
    sharedEyebrow: string;
    earlierEyebrow: string;
    earlierTitle: string;
    stackLabel: string;
    outcomesLabel: string;
  };
  independentProjects: SectionCopy & {
    description: string;
    focusLabel: string;
    stackLabel: string;
    demoLabel: string;
    repositoryLabel: string;
  };
  experience: SectionCopy;
  skills: SectionCopy & { groups: Array<{ title: string; details: string }> };
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
        'Software Engineer specializing in production frontend systems, React, and TypeScript.',
    },
    navigation: {
      label: 'Main navigation',
      about: 'About',
      experience: 'Experience',
      projects: 'Work',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Software Engineer',
      title: 'Building scalable frontend systems for production applications.',
      description:
        'I build and evolve complex frontend systems with React and TypeScript, focusing on architecture, maintainability, and product engineering.',
      location: 'Gramado, RS — Brazil',
      workCta: 'View my work',
      contactCta: 'Let’s talk',
    },
    impact: {
      label: 'Production impact',
      metrics: [
        { value: '100k+', label: 'production users' },
        { value: '10+', label: 'production applications' },
        { value: '5+', label: 'years building software' },
      ],
    },
    production: {
      number: '01',
      eyebrow: 'Production engineering',
      title: 'Engineering at scale.',
      description:
        'I have worked across more than 10 production applications serving over 100,000 users, building and evolving complex frontend systems with React and TypeScript.',
      capabilities: [
        {
          title: 'Application architecture',
          items: [
            'Large-scale React applications',
            'Feature architecture',
            'Reusable abstractions',
            'Component architecture',
          ],
        },
        {
          title: 'Data & server state',
          items: [
            'Server-state management',
            'Caching strategies',
            'Pagination and infinite queries',
            'Remote search and complex filtering',
          ],
        },
        {
          title: 'Complex product flows',
          items: [
            'Multi-step workflows',
            'Complex CRUD interfaces',
            'Dynamic forms and validation',
            'Advanced data tables',
          ],
        },
        {
          title: 'Authorization',
          items: [
            'Role-based interfaces',
            'Permission-aware components',
            'Route protection',
            'Conditional actions',
          ],
        },
        {
          title: 'Browser & application state',
          items: [
            'BroadcastChannel API',
            'Cross-tab synchronization',
            'URL-driven state',
            'Local and session persistence',
          ],
        },
        {
          title: 'Routing & resilience',
          items: [
            'Protected routes',
            'Nested routing',
            'Contextual navigation',
            'Route fallbacks and 404 handling',
          ],
        },
        {
          title: 'Performance & UX',
          items: [
            'Debouncing',
            'Lazy loading',
            'Request optimization',
            'Large dataset handling',
          ],
        },
        {
          title: 'Quality & tooling',
          items: [
            'TypeScript',
            'Automated testing',
            'Build validation and pre-commit checks',
            'CI workflows and error handling',
          ],
        },
      ],
    },
    about: {
      number: '06',
      eyebrow: 'About me',
      title: 'Built to scale.',
      lead: 'I build scalable web applications with a focus on frontend architecture, shared component libraries, and reusable frontend infrastructure.',
      description:
        'My professional experience includes React, Vue.js, Python, and Django. I collaborate with UX/UI teams, contribute to technical planning and architecture, and help teammates adopt frontend engineering best practices.',
      educationLabel: 'Education',
      education: 'Information Systems (incomplete) — FACCAT',
      languagesLabel: 'Languages',
      languages: 'Portuguese (native) · English (professional working proficiency)',
    },
    projects: {
      sharedEyebrow: 'Shared frontend infrastructure',
      earlierEyebrow: 'Earlier engineering work',
      earlierTitle: 'Full-stack foundations with FastCrud.',
      stackLabel: 'Technologies used',
      outcomesLabel: 'Engineering outcomes',
    },
    independentProjects: {
      number: '05',
      eyebrow: 'Independent projects',
      title: 'Technical work beyond the day job.',
      description:
        'Deployed projects used to explore interaction design, state modeling, persistence, and application architecture.',
      focusLabel: 'Engineering focus',
      stackLabel: 'Technology',
      demoLabel: 'View live project',
      repositoryLabel: 'View source code',
    },
    experience: { number: '03', eyebrow: 'Career', title: 'Experience.' },
    skills: {
      number: '04',
      eyebrow: 'Technical expertise',
      title: 'Engineering toolbox.',
      groups: [
        {
          title: 'Frontend',
          details: 'React, TypeScript, JavaScript, Vue.js, HTML, CSS',
        },
        {
          title: 'Architecture',
          details:
            'Design Systems, Component Architecture, Shared Libraries, Frontend Infrastructure',
        },
        {
          title: 'Data & state',
          details:
            'React Query, Server State, Caching, React Hook Form, TanStack Table, Zod',
        },
        { title: 'Quality', details: 'Vitest, Jest, Storybook, Unit Testing' },
        { title: 'Backend', details: 'Python, Django, SQL, Firebase' },
        {
          title: 'Tooling',
          details:
            'Vite, Git, GitHub Actions, GitHub Packages, Material UI, Styled Components, Emotion',
        },
      ],
    },
    contact: {
      number: '07',
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
        'Engenheiro de Software especializado em sistemas frontend em produção, React e TypeScript.',
    },
    navigation: {
      label: 'Navegação principal',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Trabalhos',
      contact: 'Contato',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'Engenheiro de Software',
      title: 'Construindo sistemas frontend escaláveis para aplicações em produção.',
      description:
        'Desenvolvo e evoluo sistemas frontend complexos com React e TypeScript, com foco em arquitetura, sustentabilidade e engenharia de produto.',
      location: 'Gramado, RS — Brasil',
      workCta: 'Ver trabalhos',
      contactCta: 'Vamos conversar',
    },
    impact: {
      label: 'Impacto em produção',
      metrics: [
        { value: '100k+', label: 'usuários em produção' },
        { value: '10+', label: 'aplicações em produção' },
        { value: '5+', label: 'anos desenvolvendo software' },
      ],
    },
    production: {
      number: '01',
      eyebrow: 'Engenharia de produção',
      title: 'Engenharia em escala.',
      description:
        'Já atuei em mais de 10 aplicações em produção que atendem mais de 100 mil usuários, construindo e evoluindo sistemas frontend complexos com React e TypeScript.',
      capabilities: [
        {
          title: 'Arquitetura de aplicação',
          items: [
            'Aplicações React em larga escala',
            'Arquitetura de features',
            'Abstrações reutilizáveis',
            'Arquitetura de componentes',
          ],
        },
        {
          title: 'Dados e estado de servidor',
          items: [
            'Gerenciamento de estado de servidor',
            'Estratégias de cache',
            'Paginação e infinite queries',
            'Busca remota e filtros complexos',
          ],
        },
        {
          title: 'Fluxos complexos de produto',
          items: [
            'Fluxos multi-etapas',
            'Interfaces CRUD complexas',
            'Formulários dinâmicos e validação',
            'Tabelas de dados avançadas',
          ],
        },
        {
          title: 'Autorização',
          items: [
            'Interfaces baseadas em papéis',
            'Componentes sensíveis a permissões',
            'Proteção de rotas',
            'Ações condicionais',
          ],
        },
        {
          title: 'Navegador e estado da aplicação',
          items: [
            'BroadcastChannel API',
            'Sincronização entre abas',
            'Estado guiado por URL',
            'Persistência local e de sessão',
          ],
        },
        {
          title: 'Roteamento e resiliência',
          items: [
            'Rotas protegidas',
            'Roteamento aninhado',
            'Navegação contextual',
            'Fallbacks de rota e tratamento de 404',
          ],
        },
        {
          title: 'Performance e UX',
          items: [
            'Debouncing',
            'Lazy loading',
            'Otimização de requisições',
            'Tratamento de grandes conjuntos de dados',
          ],
        },
        {
          title: 'Qualidade e ferramentas',
          items: [
            'TypeScript',
            'Testes automatizados',
            'Validação de build e pre-commit',
            'CI e tratamento de erros',
          ],
        },
      ],
    },
    about: {
      number: '06',
      eyebrow: 'Sobre mim',
      title: 'Construído para escalar.',
      lead: 'Desenvolvo aplicações web escaláveis com foco em arquitetura frontend, bibliotecas compartilhadas de componentes e infraestrutura frontend reutilizável.',
      description:
        'Minha experiência profissional inclui React, Vue.js, Python e Django. Colaboro com times de UX/UI, participo do planejamento técnico e de discussões de arquitetura, além de apoiar colegas com boas práticas de engenharia frontend.',
      educationLabel: 'Formação',
      education: 'Sistemas de Informação (incompleto) — FACCAT',
      languagesLabel: 'Idiomas',
      languages: 'Português (nativo) · Inglês (proficiência profissional)',
    },
    projects: {
      sharedEyebrow: 'Infraestrutura frontend compartilhada',
      earlierEyebrow: 'Trabalho de engenharia anterior',
      earlierTitle: 'Fundamentos full stack com o FastCrud.',
      stackLabel: 'Tecnologias usadas',
      outcomesLabel: 'Resultados de engenharia',
    },
    independentProjects: {
      number: '05',
      eyebrow: 'Projetos independentes',
      title: 'Trabalho técnico além do dia a dia.',
      description:
        'Projetos publicados para explorar design de interação, modelagem de estado, persistência e arquitetura de aplicações.',
      focusLabel: 'Foco de engenharia',
      stackLabel: 'Tecnologia',
      demoLabel: 'Ver projeto online',
      repositoryLabel: 'Ver código-fonte',
    },
    experience: { number: '03', eyebrow: 'Trajetória', title: 'Experiência.' },
    skills: {
      number: '04',
      eyebrow: 'Especialidades técnicas',
      title: 'Caixa de ferramentas.',
      groups: [
        {
          title: 'Frontend',
          details: 'React, TypeScript, JavaScript, Vue.js, HTML, CSS',
        },
        {
          title: 'Arquitetura',
          details:
            'Design Systems, Arquitetura de Componentes, Bibliotecas Compartilhadas, Infraestrutura Frontend',
        },
        {
          title: 'Dados e estado',
          details:
            'React Query, Estado de Servidor, Cache, React Hook Form, TanStack Table, Zod',
        },
        { title: 'Qualidade', details: 'Vitest, Jest, Storybook, Testes Unitários' },
        { title: 'Backend', details: 'Python, Django, SQL, Firebase' },
        {
          title: 'Ferramentas',
          details:
            'Vite, Git, GitHub Actions, GitHub Packages, Material UI, Styled Components, Emotion',
        },
      ],
    },
    contact: {
      number: '07',
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
