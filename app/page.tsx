import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Shield, Sparkles, CheckCircle, ChevronRight, Award, Droplet, MessageCircle, Star, Check } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import InstantQuoteEstimator from "@/components/InstantQuoteEstimator";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* COMPACT & MODERN HERO SECTION (Balanced 2-Column Layout) */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/70 bg-gradient-to-b from-[#F3F4F6] via-[#F8F9FA] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Focused Copy & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Location & Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B38E3F]/40 text-[11px] font-bold uppercase tracking-wider text-[#8A6818] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Athlone &amp; Roscommon • Certified Detailing Studio</span>
              </div>

              {/* Refined Headline with Better Proportion */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-display font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                Precision Car Detailing &amp;{" "}
                <span className="text-[#8A6818]">Ceramic Coatings</span> in Ireland
              </h1>

              {/* Crisp Subtitle */}
              <p className="text-sm sm:text-base text-neutral-600 max-w-xl font-normal leading-relaxed">
                Multi-stage paint swirl removal, certified 9H hydrophobic ceramic protection, and deep interior steam sanitisation for passionate car owners across the Midlands.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+353899772513"
                  className="px-5 py-3 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E2C37A]" />
                  <span>Call +353 89 977 2513</span>
                </a>

                <a
                  href="https://wa.me/353899772513?text=Hi%20Junior!%20I'd%20like%20to%20get%20a%20quick%20quote%20for%20my%20car."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Junior</span>
                </a>

                <Link
                  href="/services"
                  className="px-4 py-3 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Packages &amp; Rates</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8A6818]" />
                </Link>
              </div>

              {/* Mini Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-neutral-200/80 max-w-lg">
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-display font-extrabold text-neutral-900">99%</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-semibold">Swirl Removal</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-display font-extrabold text-[#8A6818]">5-Year</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-semibold">Ceramic Warranty</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-display font-extrabold text-neutral-900">5.0 ★</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-semibold">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-84 md:h-96 w-full rounded-3xl overflow-hidden border border-neutral-200 shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                  alt="Porsche 911 high gloss paint detailing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Highlight Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                  <Sparkles className="w-3.5 h-3.5 text-[#8A6818]" />
                  <span>Master Studio Finish</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-xs font-bold text-[#8A6818] uppercase tracking-wider">Midlands Studio</div>
                    <div className="text-sm font-display font-bold text-neutral-900">Athlone • Roscommon</div>
                  </div>
                  <a
                    href="tel:+353899772513"
                    className="px-3 py-1.5 rounded-lg bg-[#1A1E24] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    Direct Dial
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNIQUE FEATURE: INSTANT QUOTE ESTIMATOR & CHECKOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstantQuoteEstimator />
      </section>

      {/* CORE HIGHLIGHTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B38E3F]/40 text-[#8A6818] text-xs font-bold uppercase tracking-widest shadow-sm">
              Uncompromising Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight leading-tight">
              We Don&apos;t Just Wash Cars. We <span className="text-[#8A6818]">Re-Engineer</span> Their Finish.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Standard commercial car washes induce severe swirl marks, holograms, and clearcoat degradation. At Junior&apos;s Auto Detailing, every curve is corrected using dual-action precision polishers, bespoke Japanese &amp; German compounds, and hydrophobic ceramic shielding.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Multi-stage machine paint correction to eliminate 90-99% of swirls",
                "Certified hydrophobic 9H ceramic coatings with self-cleaning matrix",
                "Deep steam extraction & leather barrier nourishment",
                "Studio lighting inspection under 5000K daylight simulation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-[#8A6818] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#8A6818] hover:text-[#5E450E] transition-colors"
              >
                <span>Read our craft &amp; philosophy</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Asymmetric Visual Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
                  alt="Ceramic coating water beading"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-bold text-[#E2C37A] uppercase tracking-wider">Hydrophobic Shield</div>
                  <div className="text-sm font-display font-bold text-white">Ultra Water Beading &amp; Chemical Resistance</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8A6818]">
                  <Droplet className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Midlands Studio</span>
                </div>
                <h4 className="text-lg font-display font-bold text-neutral-900">Weather-Resistant Protection</h4>
                <p className="text-xs text-neutral-600">
                  Engineered specifically to repel harsh Irish winter salt, road grime, and continuous rain.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:pt-8">
              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8A6818]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Interior Perfection</span>
                </div>
                <h4 className="text-lg font-display font-bold text-neutral-900">Bespoke Cabin Rejuvenation</h4>
                <p className="text-xs text-neutral-600">
                  Alcantara brush-out, matte leather preservation, and anti-microbial thermal vapor treatment.
                </p>
              </div>

              <div className="relative h-64 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
                  alt="Sports car gloss black paint reflection"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-bold text-[#E2C37A] uppercase tracking-wider">Paint Correction</div>
                  <div className="text-sm font-display font-bold text-white">Mirror Depth &amp; True Gloss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER INTERACTIVE FEATURED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B38E3F]/40 text-[#8A6818] text-xs font-bold uppercase tracking-widest shadow-sm">
            Visual Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-900">
            See the <span className="text-[#8A6818]">Transformation</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Interact with the slider below to witness how we restore weathered, swirl-damaged clearcoats into liquid-glass perfection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"
            title="Stage 2 Multi-Stage Paint Correction + 3-Year Ceramic"
            category="Obsidian Black Metallic"
            description="Complete elimination of heavy wash swirls, spider webbing, and deep industrial fallout."
            beforeLabel="Before (Swirled & Dull)"
            afterLabel="After (True Mirror Depth)"
          />

          <div className="mt-6 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View full transformation gallery</span>
              <ArrowRight className="w-4 h-4 text-[#8A6818]" />
            </Link>
          </div>
        </div>
      </section>

      {/* DIRECT CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1A1E24] via-[#2A313C] to-[#1A1E24] p-8 sm:p-14 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E2C37A]">
              Midlands &amp; West Ireland
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Ready to Give Your Vehicle the Care It Deserves?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
              Spaces are strictly limited to ensure uncompromising attention on every vehicle. Contact Junior directly for availability and custom quotes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="tel:+353899772513"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#8A6818]" />
                <span>Call +353 89 977 2513</span>
              </a>

              <a
                href="https://wa.me/353899772513?text=Hi%20Junior!%20I'd%20like%20to%20book%20a%20slot."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Junior</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Request Online Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E2C37A]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
