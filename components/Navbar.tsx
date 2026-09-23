"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services & Pricing", href: "/services" },
  { name: "Gallery", href: "/gallery" },
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
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-sm"
          : "bg-white/70 backdrop-blur-sm border-b border-neutral-200/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1E24] to-[#2D3748] border border-[#B38E3F]/40 flex items-center justify-center group-hover:border-[#B38E3F] transition-all duration-300 shadow-sm">
            <span className="text-lg font-display font-extrabold tracking-tight text-[#E2C37A]">J</span>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-display font-bold tracking-tight text-neutral-900 group-hover:text-[#B38E3F] transition-colors">
              JUNIOR&apos;S
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 -mt-1 font-semibold">
              Auto Detailing • Ireland
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/90 px-4 py-1.5 rounded-full border border-neutral-200 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-[#1A1E24] shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Click to call */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+353899772513"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1A1E24] to-[#2D3748] hover:from-[#2D3748] hover:to-[#1A1E24] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 group shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-[#E2C37A] group-hover:scale-110 transition-transform" />
            <span>+353 89 977 2513</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+353899772513"
            className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 hover:text-[#B38E3F]"
            aria-label="Call Junior's Detailing"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 hover:text-[#B38E3F]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-neutral-200 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between ${
                    isActive
                      ? "bg-[#1A1E24] text-white"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#E2C37A]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <a
              href="tel:+353899772513"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1A1E24] text-white font-bold text-sm uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4 text-[#E2C37A]" />
              <span>Call +353 89 977 2513</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
