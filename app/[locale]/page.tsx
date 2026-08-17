import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Projects } from '@/components/Projects';
import { ProductionEngineering } from '@/components/ProductionEngineering';
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
      <ImpactMetrics dictionary={dictionary} />
      <ProductionEngineering dictionary={dictionary} />
      <Projects locale={locale} dictionary={dictionary} />
      <Experience locale={locale} dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Contact dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </main>
  );
}
