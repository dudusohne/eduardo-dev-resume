import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { dictionaries, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

type HomeProps = { params: Promise<{ locale: string }> };

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = dictionaries[locale];

  return (
    <main>
      <Header locale={locale} dictionary={dictionary} />
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience locale={locale} dictionary={dictionary} />
      <Projects locale={locale} dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Contact dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </main>
  );
}
