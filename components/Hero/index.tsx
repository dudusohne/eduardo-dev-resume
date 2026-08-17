import type { Dictionary } from '@/lib/i18n';

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const { hero } = dictionary;

  return (
    <section
      id="inicio"
      className="mx-auto max-w-6xl px-5 pt-24 pb-20 md:px-8 md:pt-36 md:pb-32"
    >
      <p className="text-accent mb-6 text-sm font-semibold tracking-[0.18em] uppercase">
        {hero.eyebrow}
      </p>
      <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.065em] text-balance md:text-7xl lg:text-8xl">
        {hero.title}
      </h1>
      <div className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-zinc-300 pt-6 md:mt-16 md:flex-row">
        <div className="max-w-md">
          <p className="text-muted text-lg leading-relaxed">{hero.description}</p>
          <p className="mt-3 text-sm font-medium text-zinc-500">{hero.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#engineering"
            className="group bg-ink text-paper inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-1"
          >
            {hero.workCta}{' '}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contato"
            className="hover:border-ink inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition-colors"
          >
            {hero.contactCta}
          </a>
        </div>
      </div>
    </section>
  );
}
