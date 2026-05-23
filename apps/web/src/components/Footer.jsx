import React from 'react';

const LOGO_URL = 'https://pub-f76299bbf2a240ec9a072b0dba762442.r2.dev/ClearLine%20Studio/Website/Templates/Orya%20Home%20and%20Ritual/Logo.png';

const Footer = () => {
  const navLinks = [
    { label: 'Story', href: '/#story' },
    { label: 'Collections', href: '/#collections' },
    { label: 'Gift Boxes', href: '/#gift-boxes' },
    { label: 'Gifting', href: '/#custom-gifting' },
    { label: 'Journal', href: '/#journal' }
  ];

  return (
    <footer className="border-t border-[#e7ddca] bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[104rem] px-6 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img src={LOGO_URL} alt="Orya Home & Ritual" className="mb-6 h-20 w-auto object-contain" />
            <p className="max-w-md text-base leading-8 text-[#6c6256]">Demo website by ClearLine Studio, created to showcase a premium ritual, candle, and gifting website experience.</p>
          </div>
          <div>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.18em] text-[#2f281f]">Explore</span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => <a key={link.label} href={link.href} className="text-base font-semibold text-[#6c6256] transition-colors hover:text-[#a78334]">{link.label}</a>)}
            </nav>
          </div>
          <div>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.18em] text-[#2f281f]">Contact</span>
            <a href="mailto:hello@oryahome.demo" className="text-base font-semibold text-[#6c6256] transition-colors hover:text-[#a78334]">hello@oryahome.demo</a>
          </div>
          <div>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.18em] text-[#2f281f]">Location</span>
            <p className="text-base leading-8 text-[#6c6256]">Western Sydney, NSW<br />Australia</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-[#e7ddca] pt-8 text-sm text-[#7b7166] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Orya Home & Ritual. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-[#2f281f]">Privacy Policy</a><a href="#" className="hover:text-[#2f281f]">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
