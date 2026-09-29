"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Phone, ArrowRight, Search, Star, Shield, Award, CheckCircle2,
  Droplet, Sparkles, Clock, ChevronRight, Calendar, Car, Smile,
  ThumbsUp, Check, Key, SlidersHorizontal, Layers, Flame, ArrowUpRight
} from "lucide-react";
import InstantQuoteEstimator from "@/components/InstantQuoteEstimator";

// ─── Animation Variants ───────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Data ─────────────────────────────────────────────────────────

// 1. Hero Stats
const heroStats = [
  { icon: Car, val: "1,250+", label: "Cars Detailed" },
  { icon: Smile, val: "500+", label: "Happy Clients" },
  { icon: Award, val: "100+", label: "5-Star Reviews" },
  { icon: Star, val: "4.9/5", label: "Customer Rating" },
];

// 2. Categories
const categories = [
  {
    title: "Paint Correction",
    sub: "99% Swirl Cut",
    carsCount: "250+ Done",
    image: "/album1_files/image4.webp",
    link: "/services#paint-correction"
  },
  {
    title: "Ceramic Coating",
    sub: "9H Quartz Shield",
    carsCount: "180+ Done",
    image: "/album1_files/image1.webp",
    link: "/services#ceramic-coating"
  },
  {
    title: "Interior Detail",
    sub: "Steam & Leather",
    carsCount: "420+ Done",
    image: "/album1_files/image2.webp",
    link: "/services#interior-detail"
  },
  {
    title: "Studio Valeting",
    sub: "Safe Decon Wash",
    carsCount: "600+ Done",
    image: "/album1_files/image7.webp",
    link: "/services#valet"
  },
  {
    title: "New Car Prep",
    sub: "Glass & Body Guard",
    carsCount: "120+ Done",
    image: "/album1_files/image10.webp",
    link: "/services#new-car"
  },
];

// 3. Featured Packages (Handpicked)
const featuredPackages = [
  {
    title: "Stage 2 Paint Correction",
    category: "Paint Restoration",
    specs: ["2 Days", "Multi-Stage Polish", "95%+ Swirl Cut"],
    price: "€249",
    image: "/album1_files/image3.webp",
    tag: "Most Popular",
  },
  {
    title: "Gtechniq 5-Yr Ceramic Quartz",
    category: "Surface Defence",
    specs: ["2 Days", "9H Nano Quartz", "5-Year Guarantee"],
    price: "€380",
    image: "/album1_files/image6.webp",
    tag: "Best Value",
  },
  {
    title: "Signature Deep Interior Detail",
    category: "Cabin Rejuvenation",
    specs: ["4-6 Hours", "Steam Sanitisation", "Leather Matte Guard"],
    price: "€160",
    image: "/album1_files/image5.webp",
    tag: "Deep Clean",
  },
  {
    title: "Full Studio Valet & Seal",
    category: "Gloss Maintenance",
    specs: ["1 Day", "Safe Decontamination", "Ceramic Sealant"],
    price: "€210",
    image: "/album1_files/image8.webp",
    tag: "Complete Package",
  },
];

// 4. Why Choose Junior's
const advantages = [
  { icon: Shield, title: "Certified Detailers", desc: "IDA accredited master paint correction technicians." },
  { icon: Award, title: "Transparent Pricing", desc: "Upfront transparent rates with zero unexpected costs." },
  { icon: Sparkles, title: "Premium Products", desc: "Top-tier Gtechniq, CarPro and Swissvax formulations." },
  { icon: Flame, title: "Studio Lighting Bay", desc: "High-CRI Scangrip inspection lights expose every flaw." },
  { icon: ThumbsUp, title: "Satisfaction Guarantee", desc: "We inspect together under studio lights before handoff." },
];

// 5. Brands
const topBrands = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Range Rover", "Volkswagen", "Tesla", "Toyota"
];

// 6. Testimonials
const testimonials = [
  {
    quote: "Junior transformed my BMW M4. The paint had heavy swirl marks from the previous owner. After his 2-stage correction and ceramic coating, it looks better than showroom condition.",
    name: "Ahmed Rahman",
    vehicle: "BMW M4 Competition Owner",
    rating: 5,
  },
  {
    quote: "The interior deep clean and leather protection made my Range Rover smell and feel brand new. Prompt, courteous, and unbeatable craftsmanship. Will definitely return.",
    name: "Sara Khan",
    vehicle: "Range Rover Sport Owner",
    rating: 5,
  },
  {
    quote: "Genuine service, fair pricing, and insane passion for cars. You won't find anyone in Ireland who takes more pride in their detailing craft than Junior. 10/10!",
    name: "Rafiul Islam",
    vehicle: "Porsche 911 Carrera Owner",
    rating: 5,
  },
];

// 7. Impact Numbers
const impactNumbers = [
  { icon: Car, val: "1,250+", label: "Cars Restored" },
  { icon: Smile, val: "99.8%", label: "Happy Customers" },
  { icon: Shield, val: "5-Year", label: "Coating Warranty" },
  { icon: Star, val: "4.9 ★", label: "Customer Rating" },
];

// 8. Blog / Articles
const blogPosts = [
  {
    title: "Top 5 Mistakes That Ruin Car Paint During Home Washes",
    date: "May 20, 2025",
    readTime: "4 min read",
    image: "/album1_files/image9.webp",
  },
  {
    title: "Ceramic Coating vs Traditional Wax: Which One Actually Wins?",
    date: "May 22, 2025",
    readTime: "6 min read",
    image: "/album1_files/image8.webp",
  },
  {
    title: "How to Protect Clearcoat From Harsh Irish Winter Road Salt",
    date: "May 18, 2025",
    readTime: "5 min read",
    image: "/album1_files/image7.webp",
  },
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("Paint Correction");
  const [selectedSize, setSelectedSize] = useState("Saloon / Sedan");
  const [selectedTier, setSelectedTier] = useState("Stage 2 Correction");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showEstimator, setShowEstimator] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="overflow-hidden bg-[#F8F7F4] text-neutral-900 font-sans">

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO (Dark Sunset Backdrop with Car & Search Bar)
          ════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#090D14] text-white pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090D14] via-[#0D121D] to-[#090D14] opacity-95" />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-[#FF5A00]/10 blur-[130px] pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A00]/15 border border-[#FF5A00]/30 text-[#FF5A00] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRECISION DETAILING &middot; IRELAND</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1]">
                Find The Perfect Shine <br />
                <span className="text-[#FF5A00]">For Your Journey</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeUp} className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed">
                West Ireland&apos;s premier studio for certified 9H ceramic quartz coatings, multi-stage machine swirl removal, and bespoke interior restoration.
              </motion.p>

              {/* Floating Filter / Search Widget (Matches reference bar) */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-neutral-200 text-neutral-900">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Select Service */}
                  <div className="px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      Select Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none cursor-pointer"
                    >
                      <option>Paint Correction</option>
                      <option>Ceramic Coating</option>
                      <option>Interior Deep Clean</option>
                      <option>Studio Valet</option>
                    </select>
                  </div>

                  {/* Vehicle Size */}
                  <div className="px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      Vehicle Type
                    </label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none cursor-pointer"
                    >
                      <option>Hatchback / Coupe</option>
                      <option>Saloon / Sedan</option>
                      <option>SUV / 4x4</option>
                      <option>Supercar / Van</option>
                    </select>
                  </div>

                  {/* Package Tier */}
                  <div className="px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      Package Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none cursor-pointer"
                    >
                      <option>Single Stage Gloss</option>
                      <option>Stage 2 Correction</option>
                      <option>3-Year Ceramic</option>
                      <option>5-Year Quartz</option>
                    </select>
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setShowEstimator(!showEstimator)}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#FF5A00] hover:bg-[#E04F00] text-white text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-98 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Calculate Custom Estimate</span>
                  </button>

                  <a
                    href="tel:+923041237882"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#FF5A00]" />
                    <span>Call Studio</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Hero Image (Vehicle Showcase) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/album1_files/image1.webp"
                  alt="Junior's Studio Ceramic Car"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-60" />

                {/* Floating badge on car */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090D14]/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-white">Studio Slot Available</span>
                  </div>
                  <span className="text-[#FF5A00] font-bold">Book Today &rarr;</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Instant Estimator Collapsible Dropdown */}
          {showEstimator && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-neutral-200 text-neutral-900"
            >
              <InstantQuoteEstimator />
            </motion.div>
          )}

          {/* Hero Bottom Stats Row (4 stats matching reference) */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF5A00]/15 border border-[#FF5A00]/30 flex items-center justify-center text-[#FF5A00] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-black text-white">
                      {st.val}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium">
                      {st.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: EXPLORE SERVICES / SHOP BY CATEGORY (Light)
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
              EXPLORE CATEGORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
              Shop by Category
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              Find your ideal detailing treatment from our specialized range of paint correction and protection tiers.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5A00] hover:text-[#E04F00] transition-colors"
          >
            <span>View All Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.link}
              className="group bg-white rounded-2xl p-3 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-[#FF5A00]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-neutral-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="font-display font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#FF5A00] transition-colors">
                  {cat.title}
                </h3>
                <div className="text-[11px] text-neutral-500 mt-0.5 font-medium">
                  {cat.sub}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#FF5A00] bg-[#FF5A00]/10 py-0.5 px-2 rounded-full inline-block">
                  {cat.carsCount}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INFINITE PHOTO MARQUEE STRIP (All 10 Studio Photos)
          ════════════════════════════════════════════════════════ */}
      <div className="py-4 bg-white border-y border-neutral-200/80 overflow-hidden">
        <div className="animate-marquee flex items-center gap-4">
          {[
            "/album1_files/image1.webp",
            "/album1_files/image2.webp",
            "/album1_files/image3.webp",
            "/album1_files/image4.webp",
            "/album1_files/image5.webp",
            "/album1_files/image6.webp",
            "/album1_files/image7.webp",
            "/album1_files/image8.webp",
            "/album1_files/image9.webp",
            "/album1_files/image10.webp",
            "/album1_files/image1.webp",
            "/album1_files/image2.webp",
            "/album1_files/image3.webp",
            "/album1_files/image4.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-44 sm:w-56 h-28 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-neutral-200 shadow-sm"
            >
              <Image src={src} alt="Studio work" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: HANDPICKED FEATURED PACKAGES
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Top Angled Banner (Matches reference layout) */}
        <div className="bg-[#090D14] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden mb-8 shadow-xl border border-neutral-800">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 lg:opacity-40 pointer-events-none">
            <Image
              src="/album1_files/image6.webp"
              alt="Handpicked featured"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090D14] via-[#090D14]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">
              FEATURED PACKAGES
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
              Handpicked Studio Packages
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Premium studio packages. Verified 9H quartz coatings. Showroom-level gloss that protects your car for years to come.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5A00] hover:bg-[#E04F00] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/25"
              >
                <span>View All Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF5A00]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#090D14]/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                    {pkg.tag}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-[11px] font-bold text-[#FF5A00] uppercase tracking-wider">
                    {pkg.category}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 mt-1 line-clamp-1">
                    {pkg.title}
                  </h3>

                  {/* Specs list */}
                  <div className="mt-3 space-y-1.5 border-t border-neutral-100 pt-3">
                    {pkg.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Starting from</div>
                  <div className="text-lg font-display font-black text-neutral-900">{pkg.price}</div>
                </div>
                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-100 group-hover:bg-[#FF5A00] group-hover:text-white text-neutral-800 text-xs font-bold transition-all flex items-center gap-1"
                >
                  <span>Book</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: WANT TO RESTORE YOUR CAR? (Dark Banner)
          ════════════════════════════════════════════════════════ */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#090D14] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight">
              Want to Protect or <span className="text-[#FF5A00]">Restore Your Car?</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Get the ultimate mirror gloss and preserve your vehicle&apos;s resale value with our certified ceramic coating and multi-stage scratch correction.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5A00] hover:bg-[#E04F00] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30"
              >
                <span>Book Your Detail Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/album1_files/image10.webp"
                alt="Showroom Finished Vehicle"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Certified Studio Finish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: WHY CHOOSE JUNIOR'S? (5 Icon Columns)
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
            OUR ADVANTAGES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
            Why Choose Junior&apos;s Auto Detailing?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            We hold ourselves to the highest standards of automotive surface restoration.
          </p>
        </div>

        {/* 5 Circular Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-neutral-200/90 shadow-sm text-center flex flex-col items-center hover:shadow-lg hover:border-[#FF5A00]/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF5A00] text-white flex items-center justify-center mb-4 shadow-md shadow-orange-500/25">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-neutral-900 mb-1.5">
                  {adv.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: READY FOR PERFECTION? (Cockpit Banner)
          ════════════════════════════════════════════════════════ */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#090D14] text-white shadow-xl border border-neutral-800">
          <div className="absolute inset-0">
            <Image
              src="/album1_files/image2.webp"
              alt="Cockpit Interior"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090D14] via-[#090D14]/90 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
                Ready for Showroom Perfection?
              </h2>
              <p className="text-neutral-300 text-sm">
                Your vehicle&apos;s next level of gloss is just one message or call away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF5A00] hover:bg-[#E04F00] text-white text-xs sm:text-sm font-bold uppercase tracking-wider text-center shadow-lg shadow-orange-500/30 transition-all"
              >
                Book Free Consultation
              </Link>
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Fast</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Secure</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: TOP BRANDS WE DETAIL (Dark Header + Brand Pills)
          ════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#090D14] text-white my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
              FEATURED BRANDS
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
              Top Car Brands We Specialize In
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              From daily drivers to German luxury and exotics — polished to perfection.
            </p>
          </div>

          {/* Row of white brand pills matching reference */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {topBrands.map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-xl py-3 px-4 text-center font-display font-bold text-xs sm:text-sm text-neutral-900 shadow-md hover:bg-neutral-100 hover:text-[#FF5A00] transition-all flex items-center justify-center"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: MORE THAN JUST CARS -> ANGULAR ORANGE SPLIT
          (Matches exact signature diagonal block from reference!)
          ════════════════════════════════════════════════════════ */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 bg-[#FF5A00]">

          {/* Left: Road / Car Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <Image
              src="/album1_files/image3.webp"
              alt="High gloss car reflection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#FF5A00] opacity-80 lg:opacity-40" />
          </div>

          {/* Right: Vibrant Orange Content Card */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 text-white space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-tight">
              More Than Just A Car Wash
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              We offer complete auto aesthetic solutions — from precision multi-stage paint defect elimination to multi-year ceramic quartz defence.
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Paint Correction & Defect Removal", desc: "Swirls, holograms & wash marks eliminated." },
                { title: "Ceramic Quartz 9H Protection", desc: "Hydrophobic shield with self-cleaning gloss." },
                { title: "Interior Steam Sanitisation", desc: "Deep extraction, anti-bacterial & leather guard." },
                { title: "Maintenance Studio Valets", desc: "Safe scratch-free bi-weekly hand washes." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-black/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">{item.title}</h4>
                    <p className="text-[11px] text-white/80 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#090D14] hover:bg-neutral-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#FF5A00]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: WHAT OUR CUSTOMERS SAY (Testimonials)
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Real stories. Real people. Real transformations.
            </p>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5A00] hover:text-[#E04F00] transition-colors"
          >
            <span>View All 50+ Google Reviews</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FF5A00] mb-4">
                  {[...Array(testi.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FF5A00]" />
                  ))}
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-[#FF5A00]/15 border border-[#FF5A00]/30 flex items-center justify-center font-display font-bold text-sm text-[#FF5A00]">
                  {testi.name[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-neutral-900">
                    {testi.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {testi.vehicle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10: NUMBERS THAT DRIVE TRUST (Dark Dramatic Banner)
          ════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-[#090D14] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/album1_files/image4.webp"
            alt="Paint correction studio lights"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/90 to-[#090D14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
              OUR IMPACT
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
              Numbers That Drive Trust
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactNumbers.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center hover:border-[#FF5A00]/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/20 border border-[#FF5A00]/40 flex items-center justify-center text-[#FF5A00] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-white">
                    {stat.val}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 11: STAY UPDATED / GET AN ESTIMATE
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">
              EXCLUSIVE OFFERS & ADVICE
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-neutral-900">
              Stay Updated: Get the Latest Detailing Tips & Offers
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Subscribe to our studio VIP newsletter for seasonal paint maintenance guides, winter salt protection discounts, and priority weekend bookings.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thank you! We&apos;ve added you to our VIP list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address or phone number"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-[#FF5A00]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#E04F00] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/album1_files/image5.webp"
                alt="Studio Lighting inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 12: LATEST NEWS & INSIGHTS (Studio Journal)
          ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider mb-2">
              LATEST BLOG
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
              Latest News & Insights
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Stay updated with the latest car care trends, tips, and industry advice.
            </p>
          </div>
        </div>

        {/* 3 Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-[#FF5A00] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100 pt-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
