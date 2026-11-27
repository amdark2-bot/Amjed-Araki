import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UiCopy } from '../data/translations';

interface HeaderProps {
  copy: UiCopy;
  onSelectConsultation: () => void;
}

export function Header({ copy, onSelectConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#overview', label: copy.nav.overview },
    { href: '#services', label: copy.nav.services },
    { href: '#pillars', label: copy.nav.pillars },
    { href: '#founder', label: copy.nav.founder },
    { href: '#contact', label: copy.nav.contact },
  ];

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    onSelectConsultation();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#overview"
          className="font-editorial text-xl font-bold tracking-tight text-[#0B1324] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1324]"
        >
          {copy.brandWordmark}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-slate-600 hover:text-[#0B1324] border-b border-transparent hover:border-[#B4832C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1324]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1324] hover:bg-[#162340] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4832C]"
          >
            {copy.nav.cta}
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-[#0B1324] hover:bg-slate-50 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full mt-2 px-4 py-3 text-sm font-semibold text-white bg-[#0B1324] hover:bg-[#162340] rounded-lg transition-colors cursor-pointer"
          >
            {copy.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
