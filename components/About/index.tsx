import { SectionHeading } from '@/components/SectionHeading';
import type { Dictionary } from '@/lib/i18n';

export function About({ dictionary }: { dictionary: Dictionary }) {
  const { about } = dictionary;

  return (
    <section id="sobre" className="border-y border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <SectionHeading
            number={about.number}
            eyebrow={about.eyebrow}
            title={about.title}
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <p className="text-xl leading-relaxed tracking-[-0.02em] md:text-2xl">
            {about.lead}
          </p>
          <p className="text-muted mt-6 leading-relaxed">{about.description}</p>
          <dl className="text-muted mt-8 space-y-3 border-t border-zinc-200 pt-5 text-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="text-ink font-semibold">{about.educationLabel}</dt>
              <dd>{about.education}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="text-ink font-semibold">{about.languagesLabel}</dt>
              <dd>{about.languages}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
