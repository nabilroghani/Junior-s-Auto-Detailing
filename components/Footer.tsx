import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 relative overflow-hidden pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-[#B38E3F]/40 flex items-center justify-center">
                <span className="text-lg font-display font-extrabold text-[#E2C37A]">J</span>
              </div>
              <div>
                <div className="text-xl font-display font-bold text-white tracking-tight">
                  JUNIOR&apos;S
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#E2C37A] font-medium">
                  Auto Detailing Studio
                </div>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Ireland&apos;s premier boutique automotive detailing studio specializing in multi-stage paint correction, Gtechniq &amp; Graphene ceramic coatings, and interior restorations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#E2C37A] hover:border-[#E2C37A]/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#E2C37A] hover:border-[#E2C37A]/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@juniorsdetailing.ie"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#E2C37A] hover:border-[#E2C37A]/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E2C37A] transition-colors flex items-center gap-1 group">
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E2C37A] transition-colors flex items-center gap-1 group">
                  About the Studio
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E2C37A] transition-colors flex items-center gap-1 group">
                  Services &amp; Pricing
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E2C37A] transition-colors flex items-center gap-1 group">
                  Before / After Gallery
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E2C37A] transition-colors flex items-center gap-1 group">
                  Contact &amp; Location
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-neutral-400">Exterior Precision Detail</li>
              <li className="text-neutral-400">Interior Deep Sanitisation</li>
              <li className="text-neutral-400">Multi-Stage Machine Polish</li>
              <li className="text-neutral-400">9H Ceramic Shield (2-5yr)</li>
              <li className="text-neutral-400">Leather Hydrophobic Guard</li>
              <li className="text-neutral-400">Headlight Restoration</li>
            </ul>
          </div>

          {/* Contact & Ireland Location */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Studio &amp; Mobile
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E2C37A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Midlands &amp; West Ireland</div>
                  <div className="text-xs text-neutral-400">Athlone / Roscommon / Ballinasloe area</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E2C37A] shrink-0" />
                <a
                  href="tel:+353899772513"
                  className="text-white hover:text-[#E2C37A] font-medium transition-colors"
                >
                  +353 89 977 2513
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E2C37A] shrink-0" />
                <span className="text-neutral-400 text-xs">Mon - Sat: 8:30 AM - 6:30 PM</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center gap-2 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-[#E2C37A] shrink-0" />
              <span>Certified Ceramic Applicator &amp; Insured</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Junior&apos;s Auto Detailing. All rights reserved. Registered in Ireland.
          </div>
          <div className="flex items-center gap-6">
            <span>Precision Automotive Artistry</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <a href="tel:+353899772513" className="text-[#E2C37A] hover:underline">
              Direct: +353 89 977 2513
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
