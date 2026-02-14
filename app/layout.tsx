import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ResumeAI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'AI-powered resume optimization engine using Llama 3.3 architecture.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1240',
  },
  author: {
    '@type': 'Person',
    name: 'Gautam Das (DevRGD)',
    url: 'https://github.com/DevRGD',
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://devrgd-resumeai.vercel.app'),
  title: {
    default: 'ResumeAI | Advanced Llama 3.3 Resume Scanner',
    template: '%s | ResumeAI Intelligence System',
  },
  description:
    "Don't leave your career to chance. Our Llama 3.3 powered engine analyzes your resume against specific job descriptions to identify missing keywords, score your compatibility, and generate tactical improvements to bypass ATS filters.",
  applicationName: 'ResumeAI',
  authors: [
    { name: 'Gautam Das (DevRGD)', url: 'https://github.com/DevRGD' },
    { name: 'ResumeAI Systems', url: 'https://devrgd-resumeai.vercel.app' },
  ],
  generator: 'Next.js',
  keywords: [
    'Resume Analyzer',
    'ATS Scanner',
    'AI Resume Builder',
    'Llama 3.3',
    'Career Optimization',
    'Resume Parser',
    'Job Match Score',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Gautam Das (DevRGD)',
  publisher: 'ResumeAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://devrgd-resumeai.vercel.app',
    siteName: 'ResumeAI Intelligence System',
    title: 'ResumeAI | Match Your Resume To Your Dream Job',
    description:
      "Don't leave your career to chance. Our Llama 3.3 powered engine analyzes your resume against specific job descriptions to identify missing keywords, score your compatibility, and generate tactical improvements to bypass ATS filters.",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ResumeAI Dashboard Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeAI | Advanced Llama 3.3 Resume Scanner',
    description:
      "Don't leave your career to chance. Our Llama 3.3 powered engine analyzes your resume against specific job descriptions to identify missing keywords, score your compatibility, and generate tactical improvements to bypass ATS filters.",
    images: ['/opengraph-image'],
    creator: '@DevRGD',
  },
  category: 'Productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col pt-20 overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200`}
      >
        <Header />
        <main className="grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
