import React, { useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';

const LOGO_URL = 'https://pub-f76299bbf2a240ec9a072b0dba762442.r2.dev/ClearLine%20Studio/Website/Templates/Orya%20Home%20and%20Ritual/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Story', href: '/#story' },
    { label: 'Collections', href: '/#collections' },
    { label: 'Gift Boxes', href: '/#gift-boxes' },
    { label: 'Gifting', href: '/#custom-gifting' },
    { label: 'Journal', href: '/#journal' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7ddca] bg-white shadow-[0_10px_34px_rgba(50,40,28,0.06)]">
      <div className="mx-auto flex h-[5.75rem] max-w-[112rem] items-center justify-between gap-8 px-5 sm:px-8 lg:h-[6.25rem] lg:px-10 xl:px-14">
        <a href="/" aria-label="Orya Home & Ritual home" className="flex shrink-0 items-center">
          <img
            src={LOGO_URL}
            alt="Orya Home & Ritual"
            className="h-[4.8rem] w-auto object-contain sm:h-[5.25rem] lg:h-[5.75rem]"
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-8 2xl:gap-10">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative whitespace-nowrap text-[0.95rem] font-bold uppercase tracking-[0.14em] transition-colors xl:text-[1rem] ${
                index === 0 ? 'text-[#a78334]' : 'text-[#2d271f]/78 hover:text-[#2d271f]'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-4 left-0 h-px bg-[#c6a44d] transition-all duration-300 ${
                  index === 0 ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button asChild className="h-12 rounded-full bg-[#c9a84f] px-8 text-[0.9rem] font-bold uppercase tracking-[0.12em] text-[#21180f] shadow-[0_16px_36px_rgba(157,123,51,0.24)] hover:bg-[#d8b963]">
            <a href="/#collections" className="inline-flex items-center gap-2 whitespace-nowrap">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Shop Rituals
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-[#f4efe5]" aria-label="Open menu">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] bg-white">
            <SheetHeader className="mb-8">
              <SheetTitle className="sr-only">Orya menu</SheetTitle>
              <img src={LOGO_URL} alt="Orya Home & Ritual" className="h-20 w-fit object-contain" />
            </SheetHeader>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase tracking-[0.13em] text-[#2d271f]/82 transition-colors hover:text-[#a78334]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 border-t border-[#e7ddca] pt-6">
                <Button asChild className="h-12 w-full rounded-full bg-[#c9a84f] font-bold uppercase tracking-[0.1em] text-[#21180f] hover:bg-[#d8b963]">
                  <a href="/#collections" onClick={() => setIsOpen(false)}>Shop Rituals</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
