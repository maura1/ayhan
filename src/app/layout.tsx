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

// Export metadata here
export const metadata = {
  title: {
    template: '%s | Ayhan Kubly',
    absolute: 'Ayhan Kubly',
  },
  description: 'Ayhan Kubly is a permanent makeup artist.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased bg-[#DBC0B3] px-8`}
      >
        <ThemeProvider>
          <main>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
