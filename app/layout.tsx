import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Source_Sans_3 } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['700', '600', '400'],
});

export const metadata: Metadata = {
  title: 'Hipnode - Social Media Web Application',
  description: 'Social Media Web Application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={sourceSansPro.className}>
        <main className="max-container bg-white-800">{children}</main>
      </body>
      </ClerkProvider>
    </html>
  );
}
