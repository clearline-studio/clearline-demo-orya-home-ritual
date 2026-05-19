
import React from 'react';

const Footer = () => {
  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Collections', href: '#shop' },
    { label: 'Gift Boxes', href: '#gift-boxes' },
    { label: 'Custom Gifting', href: '#custom-gifting' },
    { label: 'Journal', href: '#journal' }
  ];
  
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-semibold mb-4 block">Orya Home & Ritual</span>
            <p className="text-sm text-muted-foreground">
              Demo website by Clearline Studio
            </p>
          </div>
          
          <div>
            <span className="text-sm font-medium mb-4 block">Navigation</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <span className="text-sm font-medium mb-4 block">Contact</span>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:hello@oryahome.demo" className="hover:text-foreground transition-colors">
                hello@oryahome.demo
              </a>
              <p>Western Sydney, NSW</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Orya Home & Ritual. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
