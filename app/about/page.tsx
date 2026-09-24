import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, CheckCircle, Wrench, Award, Phone, ArrowRight, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Junior's Auto Detailing | Master Craftsmanship in Ireland",
  description:
    "Discover the story, standards, and relentless dedication to automotive perfection behind Junior's Auto Detailing studio in County Roscommon / Athlone.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      <PageHeader
        badge="Our Craft & Philosophy"
        title="Bred by Passion. Perfected with"
        highlightText="Surgical Precision."
        subtitle="We treat every vehicle as a masterwork — employing paint depth gauges, temperature-controlled curing, and world-class detailing chemistry in Ireland."
      />

      {/* STORY & OWNER PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src="/3.webp"
                alt="Junior's Detailing Studio - Ford Mustang GT Paint Restoration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-neutral-900 font-display font-bold text-lg">Junior</div>
                    <div className="text-xs text-[#8A6818] uppercase tracking-wider font-bold">Founder &amp; Master Detailer</div>
                  </div>
                  <div className="flex gap-1 text-[#8A6818]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#B38E3F]/40 text-[#8A6818] text-xs font-bold uppercase tracking-widest shadow-sm">
              The Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight leading-tight">
              A Rejection of Shortcuts, Volume Car Washes, and Hollow Promises.
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Junior&apos;s Auto Detailing was founded in the Midlands of Ireland with a solitary mission: to bring true, unhurried, studio-grade paint restoration and ceramic engineering to drivers who genuinely care about their machines.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Unlike roadside automated car washes that scour clearcoats with abrasive plastic bristles and recycled dirty water, every project at Junior&apos;s is treated with singular focus. Only one vehicle is taken into the bay at a time, ensuring uninterrupted dedication to removing scratches, restoring true color depth, and applying permanent ceramic bonded protection.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-1">
                <div className="text-[#8A6818] font-bold text-sm">1 Vehicle at a Time</div>
                <div className="text-xs text-neutral-600">Zero rush, zero production line cutting.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-1">
                <div className="text-[#8A6818] font-bold text-sm">Strict Chemistry</div>
                <div className="text-xs text-neutral-600">pH-neutral, Gtechniq &amp; Rupes certified.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STAGE METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
            The Standard Operating Procedure
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-900">
            How We Achieve Flawless Results
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            From microscopic paint inspection to infrared heat-cured ceramic coatings, here is the protocol behind our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Chemical Decontamination",
              desc: "Three-stage snow foam bath, pH-neutral citrus wash, iron fallout dissolve, and ultra-fine clay bar extraction of embedded tree sap and brake dust.",
            },
            {
              step: "02",
              title: "Ultrasonic Paint Analysis",
              desc: "Digital paint depth gauge measurement across all panels to inspect clearcoat thickness (microns) and identify safe cutting boundaries.",
            },
            {
              step: "03",
              title: "Rotary & DA Polishing",
              desc: "Multi-stage compound cutting paired with Rupes micro-polishing pads to level out swirls, buffer trails, acid rain etchings, and oxidisation.",
            },
            {
              step: "04",
              title: "Ceramic / Graphene Bond",
              desc: "Sterilisation wipe-down with pure isopropyl alcohol followed by cross-hatch application of 9H ceramic coating, locking in clarity for up to 5 years.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm relative flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="text-4xl font-display font-extrabold text-neutral-300 group-hover:text-[#8A6818] transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-8 h-1 bg-neutral-200 group-hover:bg-[#B38E3F] group-hover:w-16 transition-all duration-300 mt-6 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE JUNIOR'S */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
                Trust &amp; Reputation
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">
                Why Drivers Across Ireland Trust Junior&apos;s
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Whether it&apos;s a brand-new daily driver requiring immediate paint protection before road miles, or a classic weekend sports car needing complete paint restoration.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+353899772513"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#8A6818] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to discuss your vehicle: +353 89 977 2513</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Certified Application",
                  desc: "Accredited ceramic coatings with real hydrophobic durability warranties, not temporary silicone waxes.",
                },
                {
                  icon: Wrench,
                  title: "Equipment & Studio Grade",
                  desc: "High-spec Rupes BigFoot polishers, Scangrip high-CRI detailing lamps, and thermal steam extractors.",
                },
                {
                  icon: Award,
                  title: "Irish Weather Optimized",
                  desc: "Formulations tailored specifically to withstand heavy West of Ireland road salts, acidic moss, and moisture.",
                },
                {
                  icon: Sparkles,
                  title: "Concierge Customer Care",
                  desc: "Comprehensive aftercare guide, pH-neutral maintenance wash recommendations, and direct technician access.",
                },
              ].map((benefit, bidx) => {
                const Icon = benefit.icon;
                return (
                  <div key={bidx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-[#8A6818] flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-display font-bold text-neutral-900">{benefit.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900">
          Experience the Difference Yourself
        </h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          Book your vehicle assessment or browse our full range of service packages.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            View Services &amp; Pricing
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            Contact Studio
          </Link>
        </div>
      </section>
    </div>
  );
}
