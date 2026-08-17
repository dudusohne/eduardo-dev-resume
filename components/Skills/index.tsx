import { SectionHeading } from '@/components/SectionHeading';
import type { Dictionary } from '@/lib/i18n';

export function Skills({ dictionary }: { dictionary: Dictionary }) {
  const { skills } = dictionary;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        number={skills.number}
        eyebrow={skills.eyebrow}
        title={skills.title}
      />
      <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <div key={group.title} className="border-t border-zinc-300 pt-5">
            <dt className="text-lg font-semibold tracking-[-0.03em]">{group.title}</dt>
            <dd className="text-muted mt-3 leading-relaxed">{group.details}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
