import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata } from 'next';

export const metadata = {
  title: "SabalongUI | High-Performance React UI Library",
  description: "A comprehensive UI Library built with React and TailwindCSS by Rizqy Fajrul Syabani (Rzfan03).",
  openGraph: {
    title: "SabalongUI - Silamo sia ngoding!",
    description: "Highly customizable UI components for modern web applications.",
    url: "https://sabalong-ui.vercel.app",
    siteName: "SabalongUI",
    images: [
      {
        url: "https://sabalong-ui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "SabalongUI Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SabalongUI",
    description: "Built with React and TailwindCSS by Rzfan03",
    images: ["https://sabalong-ui.vercel.app/og-image.png"],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
