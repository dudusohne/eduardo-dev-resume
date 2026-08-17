import type { Dictionary } from '@/lib/i18n';

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  const { footer } = dictionary;

  return (
    <footer className="bg-ink py-6 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} Eduardo. {footer.copyright}
        </p>
        <div className="flex gap-5">
          <a
            className="hover:text-white"
            href="https://github.com/dudusohne"
            target="_blank"
            rel="noreferrer"
          >
            {footer.github}
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/eduardo-sohne-62a183118/"
            target="_blank"
            rel="noreferrer"
          >
            {footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
