import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/projects';
import type { Dictionary, Locale } from '@/lib/i18n';

type ProjectsProps = { locale: Locale; dictionary: Dictionary };

export function Projects({ locale, dictionary }: ProjectsProps) {
  const { projects: copy } = dictionary;
  const [designSystem, fastCrud] = projects[locale];

  return (
    <section id="projetos" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          number={copy.number}
          eyebrow={copy.sharedEyebrow}
          title={copy.sharedTitle}
        />
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          {copy.sharedDescription}
        </p>
        <article className="mt-12 grid gap-8 border-t border-zinc-700 pt-7 md:grid-cols-12 md:gap-10 md:pt-10">
          <div className="md:col-span-7">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              {copy.sharedEyebrow}
            </p>
            <h3 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              {designSystem.name}
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400 md:text-lg">
              {designSystem.description}
            </p>
            <TechnologyList stack={designSystem.stack} label={copy.stackLabel} />
          </div>
          <ProjectOutcomes outcomes={designSystem.outcomes} label={copy.outcomesLabel} />
        </article>

        <div className="mt-20 border-t border-zinc-700 pt-10 md:mt-28">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            {copy.earlierEyebrow}
          </p>
          <h3 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.045em] md:text-5xl">
            {copy.earlierTitle}
          </h3>
          <article className="mt-10 grid gap-8 border-t border-zinc-700 pt-7 md:grid-cols-12 md:gap-10 md:pt-10">
            <div className="md:col-span-7">
              <h4 className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                {fastCrud.name}
              </h4>
              <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
                {fastCrud.description}
              </p>
              <TechnologyList stack={fastCrud.stack} label={copy.stackLabel} />
            </div>
            <ProjectOutcomes outcomes={fastCrud.outcomes} label={copy.outcomesLabel} />
          </article>
        </div>
      </div>
    </section>
  );
}

function ProjectOutcomes({ outcomes, label }: { outcomes: string[]; label: string }) {
  return (
    <div className="border-t border-zinc-700 pt-6 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pt-0 md:pl-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
        {label}
      </p>
      <ul className="mt-5 space-y-3 text-lg font-medium tracking-[-0.02em]">
        {outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
}

function TechnologyList({ stack, label }: { stack: string[]; label: string }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2" aria-label={label}>
      {stack.map((technology) => (
        <li
          key={technology}
          className="border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
