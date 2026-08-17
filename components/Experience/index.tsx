import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/experience';
import type { Dictionary, Locale } from '@/lib/i18n';

type ExperienceProps = { locale: Locale; dictionary: Dictionary };

export function Experience({ locale, dictionary }: ExperienceProps) {
  const { experience: heading } = dictionary;

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        number={heading.number}
        eyebrow={heading.eyebrow}
        title={heading.title}
      />
      <div className="border-t border-zinc-300">
        {experience[locale].map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="grid gap-4 border-b border-zinc-300 py-7 md:grid-cols-12 md:gap-6 md:py-9"
          >
            <p className="text-accent text-sm font-semibold md:col-span-2">
              {item.period}
            </p>
            <div className="md:col-span-4">
              <h3 className="text-xl font-medium tracking-[-0.03em]">{item.role}</h3>
              <p className="text-muted mt-1">{item.company}</p>
            </div>
            <div className="text-muted max-w-md leading-relaxed md:col-span-5 md:col-start-8">
              <p>{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
