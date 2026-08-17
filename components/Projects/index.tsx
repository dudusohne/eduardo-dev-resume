import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/projects';
import type { Dictionary, Locale } from '@/lib/i18n';

type ProjectsProps = { locale: Locale; dictionary: Dictionary };

export function Projects({ locale, dictionary }: ProjectsProps) {
  const { projects: heading } = dictionary;

  return (
    <section id="projetos" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          number={heading.number}
          eyebrow={heading.eyebrow}
          title={heading.title}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects[locale].map((project, index) => (
            <article
              key={project.name}
              className="group hover:border-accent flex min-h-80 flex-col justify-between rounded-2xl border border-zinc-700 bg-zinc-900 p-6 transition-colors md:p-8"
            >
              <span className="text-accent text-sm font-semibold">0{index + 1}</span>
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label={heading.stackLabel}>
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
