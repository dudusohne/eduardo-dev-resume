import type { Locale } from '@/lib/i18n';

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  outcomes: string[];
  featured?: boolean;
};

export const projects: Record<Locale, Project[]> = {
  'en-US': [
    {
      slug: 'design-system',
      name: 'Shared React Design System',
      description:
        'A shared UI foundation designed to standardize frontend development across multiple production applications.',
      stack: ['React', 'TypeScript', 'Storybook', 'Material UI', 'GitHub Packages'],
      outcomes: [
        '50+ production-ready components',
        'Used by 3 production applications',
        'Distributed through GitHub Packages',
      ],
      featured: true,
    },
    {
      slug: 'fastcrud',
      name: 'FastCrud',
      description:
        'A low-code platform that generates web applications from JSON configuration with dynamic schema-based rendering.',
      stack: ['Vue.js', 'TypeScript', 'Python', 'Django', 'SQL'],
      outcomes: [
        'Dynamic rendering from JSON schemas',
        'Frontend and backend contributions',
      ],
    },
  ],
  'pt-BR': [
    {
      slug: 'design-system',
      name: 'Design System React Compartilhado',
      description:
        'Uma fundação de UI compartilhada, projetada para padronizar o desenvolvimento frontend em múltiplas aplicações em produção.',
      stack: ['React', 'TypeScript', 'Storybook', 'Material UI', 'GitHub Packages'],
      outcomes: [
        'Mais de 50 componentes prontos para produção',
        'Usado por 3 aplicações em produção',
        'Distribuído pelo GitHub Packages',
      ],
      featured: true,
    },
    {
      slug: 'fastcrud',
      name: 'FastCrud',
      description:
        'Uma plataforma low-code que gera aplicações web a partir de configuração JSON com renderização dinâmica baseada em schemas.',
      stack: ['Vue.js', 'TypeScript', 'Python', 'Django', 'SQL'],
      outcomes: [
        'Renderização dinâmica a partir de schemas JSON',
        'Contribuições no frontend e backend',
      ],
    },
  ],
};
