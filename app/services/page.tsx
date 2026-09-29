"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Clock, HelpCircle, Sparkles, MessageCircle, Phone, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingCheckoutModal from "@/components/BookingCheckoutModal";

const servicePackages = [
  {
    id: "exterior",
    tag: "Essential Exterior",
    title: "Exterior Precision Detail",
    priceText: "From €95",
    priceNumber: 95,
    time: "3 - 4 Hours",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    desc: "A meticulous multi-stage exterior decontamination that removes months of road grime, iron brake particles, and organic fallout without marring clearcoat.",
    includes: [
      "pH-neutral citrus pre-wash & snow foam bath",
      "Two-bucket wash system with plush microfiber mitts",
      "Wheel faces, inner barrels, and wheel arches scrubbed & flushed",
      "Chemical iron fallout decontam & tar glue removal",
      "Warm filtered air drying & plush towel touch-up",
      "Hydrophobic ceramic spray sealant (3 months protection)",
      "Satin tire dressing & exterior glass streak-free polish",
    ],
    recommendedFor: "Regular seasonal maintenance & clean baseline preservation.",
  },
  {
    id: "interior",
    tag: "Cabin Sanitisation",
    title: "Full Interior Sanctuary & Restoration",
    priceText: "From €120",
    priceNumber: 120,
    time: "4 - 5 Hours",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
    desc: "A deep clinical cleanse of your vehicle's interior. We lift deeply embedded dirt, eliminate bacteria, and nourish leather, alcantara, and plastics back to factory matte finish.",
    includes: [
      "High-suction vacuum of carpets, mats, crevices & boot area",
      "Hot water extraction & thermal steam injection on upholstery/carpets",
      "Dedicated leather gentle scrub with pH-balanced leather conditioner",
      "Alcantara delicate fiber brushing & stain treatment",
      "All vents, dashboard dials, pedals, and center console detailed",
      "Anti-bacterial ozone air purification & odor neutralization",
      "UV barrier dressing applied to all plastics (non-greasy matte finish)",
    ],
    recommendedFor: "Family cars, pet owners, new car purchases, or pre-sale perfection.",
  },
  {
    id: "correction",
    tag: "Master Polish",
    title: "Multi-Stage Paint Correction",
    priceText: "From €280",
    priceNumber: 280,
    time: "1 - 2 Days",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
    desc: "Our hallmark restoration process. We measure panel thickness and use precision rotary and dual-action machine polishers to permanently eliminate 85% - 95%+ of all swirls, buffer trails, and oxidisation.",
    includes: [
      "Complete exterior precision wash & 3-stage clay decontamination",
      "Panel thickness digital ultrasonic gauge readings",
      "Precision masking of rubber trims, plastics, and badges",
      "Stage 1: Heavy compound cutting to level scratches and deep swirls",
      "Stage 2: Micro-finishing jewelling polish to unleash deep mirror gloss",
      "Wipe down with panel wipe solvent to inspect true clearcoat finish",
      "12-Month synthetic gloss seal & glass protection",
    ],
    highlight: true,
    recommendedFor: "Enthusiasts, cars with noticeable swirl marks, dull paint, or pre-ceramic prep.",
  },
  {
    id: "ceramic",
    tag: "Ultimate Protection",
    title: "9H Graphene & Ceramic Coating",
    priceText: "From €450",
    priceNumber: 450,
    time: "2 Days (Includes Curing)",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop",
    desc: "The ultimate long-term protective shield for Irish road conditions. Liquid glass ceramic covalently bonds to your clearcoat, creating an impenetrable 9H hydrophobic barrier lasting 2 to 5 years.",
    includes: [
      "Includes comprehensive Stage 1 single-stage paint enhancement",
      "Full chemical decontam + clay treatment + panel prep wipe",
      "Application of certified 9H ceramic coating on all painted surfaces",
      "Infrared thermal lamp curing in studio environment",
      "Extreme self-cleaning hydrophobicity (water, dirt, and mud glide off)",
      "UV fading, bird drop etching, and winter road salt immunity",
      "Official certificate of warranty and customer aftercare kit",
    ],
    recommendedFor: "Brand-new vehicles, high-value sports cars, and anyone wanting easy maintenance.",
  },
];

const addOns = [
  { name: "Headlight Clarity Restoration & UV Seal", price: "From €60", desc: "Sanding cloudy yellowed lenses and sealing with ceramic protection." },
  { name: "Engine Bay Deep Degreasing & Dressing", price: "From €50", desc: "Safe steam clean, moisture protection, and OEM satin dressing." },
  { name: "Windscreen & Glass Ceramic Rain Repellent", price: "From €45", desc: "Extreme water repelling for safe night & rain driving in Ireland." },
  { name: "Leather Ceramic Barrier (Anti-Dye Transfer)", price: "From €80", desc: "Prevents blue jeans dye transfer on light-colored leather." },
  { name: "Wheel Off Ceramic Coating (Face & Barrel)", price: "From €120", desc: "Wheels removed, deep cleansed, and coated for effortless brake dust washing." },
];

export default function ServicesPage() {
  const [selectedBooking, setSelectedBooking] = useState<{
    title: string;
    price: number;
  } | null>(null);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      <PageHeader
        badge="Tailored Treatments"
        title="Bespoke Care Packages &"
        highlightText="Transparent Pricing"
        subtitle="Every vehicle has unique needs. Below are our core packages, complete with stage breakdowns, estimated durations, and instant booking reservation."
      />

      {/* CORE SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicePackages.map((srv) => (
          <div
            key={srv.id}
            id={srv.id}
            className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-md ${
              srv.highlight ? "border-[#B38E3F] gold-glow" : "border-neutral-200"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-white/95 border border-neutral-200 text-[#8A6818] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                    {srv.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-3xl font-display font-extrabold">
                    {srv.priceText}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-200 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#E2C37A]" />
                    <span>Estimated time: {srv.time}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider font-bold text-[#8A6818] mb-3">
                      Included Operations:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8A6818] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500">
                    <strong className="text-neutral-900">Ideal for:</strong> {srv.recommendedFor}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/923041237882?text=${encodeURIComponent(
                        `Hi Junior! I want to book the ${srv.title} (${srv.priceText}). Are there any open slots?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                      title="WhatsApp Junior"
                      aria-label="WhatsApp Junior"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedBooking({
                          title: srv.title,
                          price: srv.priceNumber,
                        })
                      }
                      className="px-6 py-3 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-md cursor-pointer group"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E2C37A] group-hover:rotate-12 transition-transform" />
                      <span>Book Package</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SPECIALIST ADD-ON MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
            A La Carte Enhancements
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">
            Specialist Add-On Treatments
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Combine any of the following precision add-ons with your detailing package for complete 360-degree vehicle perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((add, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-[#B38E3F] transition-all space-y-3 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-display font-bold text-neutral-900">{add.name}</h4>
                  <span className="text-xs font-mono font-bold text-[#8A6818] whitespace-nowrap">
                    {add.price}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">{add.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / PRICING NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[#8A6818]">
            <HelpCircle className="w-5 h-5" />
            <h4 className="text-sm uppercase tracking-wider font-bold text-neutral-900">
              Pricing &amp; Vehicle Sizing Guidance
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            * All prices quoted are baseline estimates for small to medium-sized passenger cars (e.g. Hatchback / Saloon). Large SUVs, 4x4s, estates, or vehicles requiring extreme decontamination (e.g. heavy pet hair, mold, severe overspray) will receive a firm, transparent custom quotation following vehicle inspection.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="tel:+923041237882"
              className="text-xs font-bold text-[#8A6818] uppercase tracking-wider hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Junior directly at +92 304 1237882</span>
            </a>
            <span className="text-neutral-300">•</span>
            <a
              href="https://wa.me/923041237882"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-emerald-600 uppercase tracking-wider hover:underline flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Checkout Modal */}
      {selectedBooking && (
        <BookingCheckoutModal
          isOpen={!!selectedBooking}
          onClose={() => setSelectedBooking(null)}
          packageName={selectedBooking.title}
          vehicleType="Standard Passenger Vehicle"
          totalPrice={selectedBooking.price}
          addons={[]}
        />
      )}
    </div>
  );
}
