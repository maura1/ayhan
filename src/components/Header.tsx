'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Phone } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const routes = [
    { href: '/', label: 'HOME', id: '1' },    
    { href: '/uebermich', label: 'ÜBER-MICH', id: '2' },
    { href: '/behandlung', label: 'BEHANDLUNG', id: '3' },
    { href: '/bildergalerie', label: 'BILDERGALERIE', id: '4' },
    { href: '/kontakt', label: 'KONTAKT', id: '5' },
  ];

  return (
    <Container>
      <header className="sm:flex sm:justify-between py-5 px-4  bg-navbarBg text-navbarText">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">AK Logo</h1>
            </Link>
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes.map((route) => (
                <Button asChild variant="ghost" key={route.id}>
                  <Link href={route.href} className="text-sm font-medium transition-colors">
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-navbarText text-navbarBg rounded p-2">
              <Phone className="h-6 w-6 text-navbarBg mr-2" />
              <span>01511-155 30 31</span>
            </div>
            <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-6" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
