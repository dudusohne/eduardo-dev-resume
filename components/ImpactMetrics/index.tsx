import type { Dictionary } from '@/lib/i18n';

export function ImpactMetrics({ dictionary }: { dictionary: Dictionary }) {
  const { impact } = dictionary;

  return (
    <section aria-label={impact.label} className="border-y border-zinc-300 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
        <p className="text-accent mb-8 text-xs font-semibold tracking-[0.2em] uppercase">
          {impact.label}
        </p>
        <dl className="grid grid-cols-2 divide-x divide-y divide-zinc-300 border-t border-l border-zinc-300 md:grid-cols-3 md:divide-y-0">
          {impact.metrics.map((metric) => (
            <div
              key={metric.label}
              className="min-h-32 p-4 last:col-span-2 md:min-h-36 md:p-6 md:last:col-span-1"
            >
              <dt className="text-3xl font-medium tracking-[-0.06em] md:text-5xl">
                {metric.value}
              </dt>
              <dd className="text-muted mt-3 max-w-28 text-sm leading-snug">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
