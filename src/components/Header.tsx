'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Phone } from 'lucide-react';
import Container from '@/components/ui/container';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const routes = [
    { href: '/', label: 'HOME' },
    { href: '/uebermich', label: 'ÜBER-MICH' },
    { href: '/behandlung', label: 'BEHANDLUNG' },
    { href: '/bildergalerie', label: 'BILDERGALERIE' },
    { href: '/preise', label:'PREISE'},
    { href: '/bewertung', label:'BEWERTUNG' },
    { href: '/kontakt', label: 'KONTAKT' },
    
  ];

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
  };

  return (
    
    <header className="sticky top-0 z-50 bg-navbarBg shadow-md max-w-7xl mx-auto w-full p4">
     
      <Container>
        <div className="flex items-center justify-between py-5 text-navbarText">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              AK Logo
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-grow hidden lg:flex justify-between items-center space-x-8 text-xl px-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm hover:text-gray-600 transition ${
                  activeButton === route.href
                    ? 'font-bold border-b-2 border-current'
                    : ''
                }`}
                onClick={() => handleButtonClick(route.href)}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Right-Side Content */}
          <div className="flex items-center space-x-4">
            {/* Phone Button */}
<div className="hidden lg:flex items-center bg-gradient-to-r from-welcomeBg to-gray-700 text-white rounded px-4 py-2 shadow-lg hover:from-gray-700 hover:to-welcomeBg transition duration-300 ease-in-out">
  <Phone className="h-6 w-6 text-white mr-2" />
  <span className="text-lg font-semibold">-01511-155 30 31</span>
</div>



            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

      

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger>
      
               <div className="flex items-center space-x-2 lg:hidden">
                <span className="text-lg font-medium">Menü</span>
      <Menu className="h-6 w-6" />
    </div>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] text-navbarText bg-whiteBg">
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
     
    </header>
    
  );
};

export default Header;
