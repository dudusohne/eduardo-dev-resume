import type { Locale } from '@/lib/i18n';

export type IndependentProject = {
  name: string;
  description: string;
  focus: string[];
  stack: string[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export const independentProjects: Record<Locale, IndependentProject[]> = {
  'en-US': [
    {
      name: 'PEX Card Game',
      description:
        'An interactive React game that explores rich domain logic, state coordination, and testable business rules.',
      focus: [
        'Domain-driven game logic with rules, effects, and systems separated from presentation',
        'Complex state management for deck building, inventory, progression, and interconnected rules',
        'A rule and effect engine modeled as testable logic',
        'Drag-and-drop deck composition with React DnD',
        'Firebase authentication and persistent player data',
        'Progression systems for quests, rewards, merchant, and leaderboard',
        'Business-rule testing for game-engine combinations',
        'Component architecture organized across components, pages, game, context, hooks, and services',
      ],
      stack: ['React', 'TypeScript', 'React DnD', 'Firebase', 'Testing'],
      demoUrl: 'https://pex-card-game.vercel.app/',
    },
    {
      name: 'FastTyping',
      description:
        'A typing-speed challenge with a configurable timer, built as a focused Vue application.',
      focus: [
        'Timer-driven interaction flow',
        'Stateful typing challenge and session feedback',
        'Composition API and single-file component architecture',
      ],
      stack: ['Vue 3', 'TypeScript', 'Composition API', 'Vite'],
      demoUrl: 'https://fast-typing-six.vercel.app/',
      repositoryUrl: 'https://github.com/dudusohne/fast-typing',
    },
    {
      name: 'Economizer',
      description:
        'A React application for authenticated, persistent organization of categorized items and lists.',
      focus: [
        'Firebase Authentication and Firestore persistence',
        'Protected application flows and contextual state',
        'Category-based organization and reusable UI patterns',
      ],
      stack: ['React', 'TypeScript', 'Firebase', 'React Query', 'Material UI'],
      repositoryUrl: 'https://github.com/dudusohne/economizer',
    },
  ],
  'pt-BR': [
    {
      name: 'PEX Card Game',
      description:
        'Um jogo interativo em React que explora lógica de domínio rica, coordenação de estado e regras de negócio testáveis.',
      focus: [
        'Lógica de jogo orientada a domínio, com regras, efeitos e sistemas separados da apresentação',
        'Gerenciamento de estado complexo para construção de decks, inventário, progressão e regras interdependentes',
        'Engine de regras e efeitos modelada como lógica testável',
        'Composição de decks com drag and drop usando React DnD',
        'Autenticação Firebase e dados persistentes de jogador',
        'Sistemas de progressão para quests, recompensas, comerciante e leaderboard',
        'Testes de regras de negócio para combinações do motor de jogo',
        'Arquitetura de componentes organizada em components, pages, game, context, hooks e services',
      ],
      stack: ['React', 'TypeScript', 'React DnD', 'Firebase', 'Testing'],
      demoUrl: 'https://pex-card-game.vercel.app/',
    },
    {
      name: 'FastTyping',
      description:
        'Um desafio de velocidade de digitação com temporizador configurável, construído como uma aplicação Vue focada.',
      focus: [
        'Fluxo de interação guiado por temporizador',
        'Desafio de digitação com estado e feedback de sessão',
        'Composition API e arquitetura com single-file components',
      ],
      stack: ['Vue 3', 'TypeScript', 'Composition API', 'Vite'],
      demoUrl: 'https://fast-typing-six.vercel.app/',
      repositoryUrl: 'https://github.com/dudusohne/fast-typing',
    },
    {
      name: 'Economizer',
      description:
        'Uma aplicação React para organização autenticada e persistente de itens categorizados e listas.',
      focus: [
        'Autenticação Firebase e persistência com Firestore',
        'Fluxos de aplicação protegidos e estado contextual',
        'Organização por categorias e padrões de UI reutilizáveis',
      ],
      stack: ['React', 'TypeScript', 'Firebase', 'React Query', 'Material UI'],
      repositoryUrl: 'https://github.com/dudusohne/economizer',
    },
  ],
};
