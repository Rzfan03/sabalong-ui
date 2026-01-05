import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import Image from 'next/image';

export const baseOptions = (): HomeLayoutProps => ({
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={24} 
          height={24} 
          className="rounded-md"
        />
        <span className="font-bold">Sabalong UI</span>
      </div>
    ),
    transparentMode: 'always',
  },
  // ...opsi lainnya
});