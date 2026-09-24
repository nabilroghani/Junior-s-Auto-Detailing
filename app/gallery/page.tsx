import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata = {
  title: "Before & After Work Gallery | Junior's Auto Detailing Ireland",
  description:
    "Explore our live portfolio of paint correction, ceramic coatings, swirl removal, and deep interior restorations in Athlone and Roscommon, Ireland.",
};

const galleryShowcase = [
  {
    title: "Black Sapphire Metallic - Full 2-Stage Paint Correction",
    category: "Paint Restoration",
    desc: "Severe automatic car-wash swirl damage completely rectified, followed by 3-year ceramic protection.",
    beforeImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Before (Heavy Swirls & Hazing)",
    afterLabel: "After (99% Crystal Mirror Clarity)",
  },
  {
    title: "Nappa Leather Cabin Deep Extraction & Matte Balm",
    category: "Interior Revival",
    desc: "Extraction of organic stains, deep leather cleanse removing oily gloss back to factory satin touch.",
    beforeImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Before (Greasy / Stained)",
    afterLabel: "After (Sanitised OEM Matte)",
  },
  {
    title: "Ceramic Coating Hydrophobic Shield on Irish Daily",
    category: "Ceramic Application",
    desc: "9H Graphene covalent bonding providing extreme water contact angle (115°) and instant sheeting.",
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Before (No Protection / Flat Water)",
    afterLabel: "After (Tight Hydrophobic Beading)",
  },
];

const staticGalleryGrid = [
  {
    title: "Ford Ranger Wildtrak Studio Inspection & 9H Ceramic",
    category: "Full Detail & Ceramic",
    image: "/2.webp",
  },
  {
    title: "Ford Mustang GT 5.0 High-Gloss Finish in Studio",
    category: "Paint Restoration",
    image: "/3.webp",
  },
  {
    title: "Audi e-tron Sportback Studio Lighting Inspection",
    category: "Ceramic Coating",
    image: "/4.webp",
  },
  {
    title: "Volvo S90 Pre-Wash Thick Snow Foam Bath",
    category: "Safe Decontamination",
    image: "/5.webp",
  },
  {
    title: "Nissan Navara Mirror Polish & Hydrophobic Seal",
    category: "Paint Correction",
    image: "/6.webp",
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      <PageHeader
        badge="Live Portfolio"
        title="Evidence of Obsessive"
        highlightText="Craftsmanship"
        subtitle="Explore before and after transformations, micro-swirl restorations, and gloss readings achieved in our Ireland detailing studio."
      />

      {/* INTERACTIVE COMPARISON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
            Interactive Sliders
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900">
            Drag to Inspect Clarity
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Slide the control bar across each project to see the true before/after delta.
          </p>
        </div>

        <div className="space-y-10">
          {galleryShowcase.map((item, idx) => (
            <BeforeAfterSlider
              key={idx}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              title={item.title}
              category={item.category}
              description={item.desc}
              beforeLabel={item.beforeLabel}
              afterLabel={item.afterLabel}
            />
          ))}
        </div>
      </section>

      {/* STATIC CURATED WORK GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
            Studio Snapshots
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900">
            Precision Across Every Angle
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {staticGalleryGrid.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden group relative h-72 border border-neutral-200 shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E2C37A]">
                  {item.category}
                </span>
                <h4 className="text-sm font-display font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-lg space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">
            Want Similar Results for Your Car?
          </h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto">
            Book an obligation-free paint assessment with Junior today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+353899772513"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#E2C37A]" />
              <span>Call +353 89 977 2513</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Request Assessment Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
