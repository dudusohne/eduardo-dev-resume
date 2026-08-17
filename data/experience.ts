import type { Locale } from '@/lib/i18n';

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Record<Locale, ExperienceItem[]> = {
  'en-US': [
    {
      company: 'Super Ensino',
      role: 'Software Engineer',
      period: 'November 2022 — Present',
      description:
        'Developing large-scale educational platforms serving more than 100,000 users.',
      highlights: [
        'Designed and implemented a shared React Design System, published through GitHub Packages and used by three production applications.',
        'Developed 30+ reusable UI components within a Design System with more than 50 production-ready components.',
        'Designed a shared frontend API library for authentication, endpoint communication, and reusable business logic.',
        'Participated in the frontend architecture of two of the company’s four main applications.',
        'Collaborated with UX/UI, contributing to technical planning, estimations, and architectural discussions.',
      ],
    },
    {
      company: 'Simbiose Ventures',
      role: 'Full Stack Software Engineer',
      period: 'November 2021 — October 2022',
      description:
        'Worked on FastCrud, a low-code platform that generates web applications from JSON configuration.',
      highlights: [
        'Developed frontend features with Vue.js and TypeScript.',
        'Developed backend features with Python and Django.',
        'Implemented dynamic rendering based on JSON schemas.',
      ],
    },
  ],
  'pt-BR': [
    {
      company: 'Super Ensino',
      role: 'Engenheiro de Software',
      period: 'Novembro de 2022 — Presente',
      description:
        'Desenvolvimento de plataformas educacionais em larga escala que atendem mais de 100 mil usuários.',
      highlights: [
        'Projetei e implementei um Design System React compartilhado, publicado no GitHub Packages e usado por três aplicações em produção.',
        'Desenvolvi mais de 30 componentes de UI reutilizáveis em um Design System com mais de 50 componentes prontos para produção.',
        'Projetei uma biblioteca compartilhada de API frontend para autenticação, comunicação com endpoints e lógica de negócio reutilizável.',
        'Participei da arquitetura frontend de duas das quatro aplicações principais da empresa.',
        'Colaborei com UX/UI, contribuindo com planejamento técnico, estimativas e discussões de arquitetura.',
      ],
    },
    {
      company: 'Simbiose Ventures',
      role: 'Engenheiro de Software Full Stack',
      period: 'Novembro de 2021 — Outubro de 2022',
      description:
        'Atuação no FastCrud, uma plataforma low-code que gera aplicações web a partir de configuração JSON.',
      highlights: [
        'Desenvolvi funcionalidades frontend com Vue.js e TypeScript.',
        'Desenvolvi funcionalidades backend com Python e Django.',
        'Implementei renderização dinâmica baseada em schemas JSON.',
      ],
    },
  ],
};
