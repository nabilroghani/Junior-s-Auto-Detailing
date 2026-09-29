"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Sparkles, Calendar } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/services#packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-neutral-200 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
          : "bg-[#090D14]/85 backdrop-blur-md border-b border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white border border-[#FF5A00]/40 group-hover:border-[#FF5A00] transition-all duration-300 shadow-md flex items-center justify-center p-0.5">
            <Image
              src="/logo.webp"
              alt="Junior's Auto Detailing"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className={`text-base sm:text-lg font-display font-black tracking-tight transition-colors flex items-center gap-1.5 ${
              scrolled ? "text-neutral-900 group-hover:text-[#FF5A00]" : "text-white group-hover:text-[#FFA040]"
            }`}>
              <span>JUNIOR&apos;S</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FF5A00]/15 text-[#FF5A00] border border-[#FF5A00]/30 font-mono font-bold uppercase tracking-wider hidden sm:inline-block">STUDIO</span>
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] font-semibold -mt-0.5 ${
              scrolled ? "text-neutral-500" : "text-white/70"
            }`}>
              Auto Detailing &middot; Ireland
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg ${
                  isActive
                    ? "text-[#FF5A00] font-bold"
                    : scrolled
                      ? "text-neutral-700 hover:text-[#FF5A00] hover:bg-neutral-100/70"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF5A00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button - High Visibility At All Times */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+923041237882"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#FF5A00] hover:bg-[#E04F00] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_16px_rgba(255,90,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,0,0.5)] cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>+92 304 1237882</span>
          </a>

          {/* Quick Book Callout on small screens */}
          <a
            href="tel:+923041237882"
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF5A00] text-white text-xs font-bold shadow-md"
            aria-label="Call Now"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border transition-all md:hidden ${
              scrolled
                ? "bg-neutral-100 border-neutral-300 text-neutral-800"
                : "bg-white/10 border-white/20 text-white"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-neutral-200 backdrop-blur-2xl px-4 pt-3 pb-6 mt-2 space-y-2 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-[#FF5A00]/10 text-[#FF5A00] font-bold"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? <Sparkles className="w-4 h-4 text-[#FF5A00]" /> : null}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <a
              href="tel:+923041237882"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#E04F00] text-white font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 304 1237882</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
