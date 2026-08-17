import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { notFound } from 'next/navigation';
import { dictionaries, isLocale, locales } from '@/lib/i18n';
import '../globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return dictionaries[locale].metadata;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
