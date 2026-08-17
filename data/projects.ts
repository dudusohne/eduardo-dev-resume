import type { Locale } from '@/lib/i18n';

export type Project = { name: string; description: string; stack: string[] };

export const projects: Record<Locale, Project[]> = {
  'en-US': [
    {
      name: 'Shared React Design System',
      description:
        'A shared component library published through GitHub Packages and consumed by three production applications.',
      stack: ['React', 'TypeScript', 'Storybook', 'Material UI', 'GitHub Packages'],
    },
    {
      name: 'FastCrud',
      description:
        'A low-code platform that generates web applications from JSON configuration with dynamic schema-based rendering.',
      stack: ['Vue.js', 'TypeScript', 'Python', 'Django', 'SQL'],
    },
  ],
  'pt-BR': [
    {
      name: 'Design System React Compartilhado',
      description:
        'Biblioteca compartilhada de componentes publicada no GitHub Packages e consumida por três aplicações em produção.',
      stack: ['React', 'TypeScript', 'Storybook', 'Material UI', 'GitHub Packages'],
    },
    {
      name: 'FastCrud',
      description:
        'Plataforma low-code que gera aplicações web a partir de configuração JSON com renderização dinâmica baseada em schemas.',
      stack: ['Vue.js', 'TypeScript', 'Python', 'Django', 'SQL'],
    },
  ],
};
