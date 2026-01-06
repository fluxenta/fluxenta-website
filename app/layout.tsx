import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'web apps',
    'dashboards',
    'MVP development',
    'startup development'
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.urls.production,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}