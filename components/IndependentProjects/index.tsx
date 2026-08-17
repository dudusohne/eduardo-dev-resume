import { SectionHeading } from '@/components/SectionHeading';
import { independentProjects } from '@/data/independent-projects';
import type { IndependentProject } from '@/data/independent-projects';
import type { Dictionary, Locale } from '@/lib/i18n';

type IndependentProjectsProps = { locale: Locale; dictionary: Dictionary };

export function IndependentProjects({ locale, dictionary }: IndependentProjectsProps) {
  const { independentProjects: copy } = dictionary;
  const [featuredProject, ...otherProjects] = independentProjects[locale];

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading number={copy.number} eyebrow={copy.eyebrow} title={copy.title} />
        <p className="text-muted max-w-2xl text-lg leading-relaxed md:text-xl">
          {copy.description}
        </p>
        <ProjectDetails project={featuredProject} copy={copy} featured />
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {otherProjects.map((project) => (
            <ProjectDetails key={project.name} project={project} copy={copy} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectDetailsProps = {
  project: IndependentProject;
  copy: Dictionary['independentProjects'];
  featured?: boolean;
};

function ProjectDetails({ project, copy, featured = false }: ProjectDetailsProps) {
  return (
    <article
      className={`border-t border-zinc-300 pt-7 ${
        featured ? 'mt-12 grid gap-8 md:grid-cols-12 md:gap-10 md:pt-10' : ''
      }`}
    >
      <div className={featured ? 'md:col-span-7' : ''}>
        <h3
          className={`font-medium tracking-[-0.05em] ${
            featured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'
          }`}
        >
          {project.name}
        </h3>
        <p className="text-muted mt-4 max-w-xl leading-relaxed">{project.description}</p>
        <TechnologyList stack={project.stack} label={copy.stackLabel} />
        <ProjectLinks project={project} copy={copy} />
      </div>
      <div className={featured ? 'md:col-span-4 md:col-start-9' : 'mt-7'}>
        <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
          {copy.focusLabel}
        </p>
        <ul className="text-muted mt-4 space-y-2 text-sm leading-relaxed">
          {project.focus.map((focus) => (
            <li key={focus} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              {focus}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function TechnologyList({ stack, label }: { stack: string[]; label: string }) {
  return (
    <ul className="mt-7 flex flex-wrap gap-2" aria-label={label}>
      {stack.map((technology) => (
        <li
          key={technology}
          className="text-muted border border-zinc-300 px-3 py-1 text-xs"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({
  project,
  copy,
}: {
  project: IndependentProject;
  copy: Dictionary['independentProjects'];
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
      {project.demoUrl ? (
        <a
          className="border-ink hover:border-accent hover:text-accent border-b pb-1 transition-colors"
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
        >
          {copy.demoLabel} →
        </a>
      ) : null}
      {project.repositoryUrl ? (
        <a
          className="hover:border-accent hover:text-accent border-b border-zinc-300 pb-1 transition-colors"
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
        >
          {copy.repositoryLabel} →
        </a>
      ) : null}
    </div>
  );
}
