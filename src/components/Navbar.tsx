'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="bg-[#E2E0D9] text-[#9C8376]  shadow-md mx-auto  mt-4">
      
        <div className="bg-[#FDF2F8] text-[#98274d] text-center py-2 mt-1  shadow-sm">
        <a
          href="tel:+4915115513511"
          className="text-md  font-sans"
        >
          Terminvereinbarung +49 151 155 3511
        </a>
      </div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="font-serif text-2xl text-[#9C8376]">
              AK LOGO
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {[
            { href: "/", label: "HOME" },
            { href: "/treatments", label: "BEHANDLUNG" },
            { href: "/about", label: "ÜBER MICH" },
            { href: "/gallery", label: "BILDERGALERIE" },
            { href: "/contact", label: "KONTAKT" },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className="text-[#9C8376] hover:text-black font-sans"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>          
      </nav>           
    </header>
  );
};

export default Navbar;
