import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sabalong UI',
  description: 'Sabalong UI, UI Library nya orang samawa',
  keywords: ['nextjs', 'react', 'seo'],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
