import type { Dictionary, Locale } from '@/lib/i18n';

type HeaderProps = { locale: Locale; dictionary: Dictionary };

export function Header({ locale, dictionary }: HeaderProps) {
  const { navigation } = dictionary;
  const links = [
    { href: '#sobre', label: navigation.about },
    { href: '#experiencia', label: navigation.experience },
    { href: '#projetos', label: navigation.projects },
    { href: '#contato', label: navigation.contact },
  ];

  return (
    <header className="bg-paper/90 sticky top-0 z-10 border-b border-zinc-200/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label={navigation.label}
      >
        <a href="#inicio" className="text-lg font-bold tracking-[-0.06em]">
          eduardo<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-4 text-sm font-medium md:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div
            className="flex items-center gap-1 border-l border-zinc-300 pl-4"
            aria-label={navigation.language}
          >
            {(['en-US', 'pt-BR'] as const).map((language) => (
              <a
                key={language}
                href={`/${language}`}
                lang={language}
                aria-current={language === locale ? 'page' : undefined}
                className={`rounded px-1.5 py-1 text-xs transition-colors ${
                  language === locale ? 'bg-ink text-paper' : 'hover:text-accent'
                }`}
              >
                {language === 'en-US' ? 'EN' : 'PT'}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
