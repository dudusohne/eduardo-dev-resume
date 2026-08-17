import type { Dictionary } from '@/lib/i18n';

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  const { contact } = dictionary;

  return (
    <section id="contato" className="bg-accent border-t border-zinc-300 text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase">
          {contact.number} / {contact.eyebrow}
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.06em] md:text-7xl">
          {contact.title}
        </h2>
        <a
          className="mt-10 inline-block border-b-2 border-white pb-1 text-xl font-medium transition-opacity hover:opacity-70 md:text-2xl"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
        <div className="mt-5 flex flex-col gap-1 text-sm font-medium sm:flex-row sm:gap-5">
          <a href="tel:+5551997951166" className="hover:opacity-70">
            {contact.phone}
          </a>
          <p>{contact.location}</p>
        </div>
      </div>
    </section>
  );
}
