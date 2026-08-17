type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ number, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
      <div>
        <p className="text-accent mb-3 text-xs font-semibold tracking-[0.2em] uppercase">
          {number} / {eyebrow}
        </p>
        <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">{title}</h2>
      </div>
      <span className="mb-2 hidden h-px flex-1 bg-zinc-300 md:block" />
    </div>
  );
}
