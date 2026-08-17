import { SectionHeading } from '@/components/SectionHeading';
import type { Dictionary } from '@/lib/i18n';

export function ProductionEngineering({ dictionary }: { dictionary: Dictionary }) {
  const { production } = dictionary;

  return (
    <section id="engineering" className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          number={production.number}
          eyebrow={production.eyebrow}
          title={production.title}
        />
        <p className="max-w-2xl text-xl leading-relaxed tracking-[-0.025em] md:text-2xl">
          {production.description}
        </p>
        <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-zinc-300 pt-6 md:grid-cols-2 lg:grid-cols-4">
          {production.capabilities.map((capability) => (
            <div key={capability.title}>
              <dt className="text-sm font-semibold tracking-[-0.02em]">
                {capability.title}
              </dt>
              <dd>
                <ul className="text-muted mt-3 space-y-1.5 text-sm leading-relaxed">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
