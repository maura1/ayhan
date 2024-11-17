'use client';

import { Cinzel, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});
const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased bg-[#DBC0B3] p-8`}
      >
        
          <main>
            <Header />
            {children}
          </main>
        
      </body>
      </ThemeProvider>
    </html>
  );
}
