


"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun,  } from "lucide-react";


const Header = () => {
  const { theme, setTheme } = useTheme();
const routes = [
    {
        href:'/',
        label:'HOME', 
        id:'1' ,      
    },
    {
        href:'/behandlung',
        label:'BEHANDLUNG', 
        id:'2'       
    },
    {
        href:'/Über-mich',
        label:'ÜBER MICH', 
        id:'3',       
    },
    {
        href:'/bildergalerie',
        label:'BILDERGALERIE',  
        id:'4' ,     
    },
    {
        href:'/Kontakt',
        label:'KONTAKT',  
        id:'5'      
    },
]


  return (
    <Container  >
      
    <header className="sm:flex sm:justify-between py-5 px-4 border-b bg-navbarBg text-navbarText">
     
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
           {/*AK LOGO*/}
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">AK Logo</h1>
            </Link>
          </div>
          {/*NAVIGATION*/}
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route) => (
              <Button asChild variant="ghost" key={route.id}>
                <Link
                  
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
           
             
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>

             {/*HAMBURGER MENU*/}            
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
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
        <div> 01511-155 30 31
        </div>
        
        </header>
       
      </Container>
    
  );
};

export default Header;