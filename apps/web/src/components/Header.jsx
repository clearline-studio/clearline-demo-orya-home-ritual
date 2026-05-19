import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Collections', href: '#shop' },
    { label: 'Gift Boxes', href: '#gift-boxes' },
    { label: 'Custom Gifting', href: '#custom-gifting' },
    { label: 'Journal', href: '#journal' },
    { label: 'Shop', href: '#shop' }
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="Orya Home & Ritual home" className="inline-flex items-center shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}Logo_for_Orya.jpeg`}
              alt="Orya Home & Ritual"
              className="h-14 sm:h-16 w-auto max-w-[180px] sm:max-w-[220px] object-contain mix-blend-multiply"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#shop">Shop the Collection</a>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <img
                  src={`${import.meta.env.BASE_URL}Logo_for_Orya.jpeg`}
                  alt="Orya Home & Ritual"
                  className="h-20 w-auto max-w-[220px] object-contain mix-blend-multiply self-start mb-2"
                />
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                  <a href="#shop" onClick={() => setIsOpen(false)}>Shop the Collection</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
