import { Phone, MapPin, Mail, Clock, ShieldCheck, Navigation } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Studio Location | Junior's Auto Detailing Ireland",
  description:
    "Contact Junior's Auto Detailing in Athlone / Roscommon, Ireland. Direct phone: +92 304 1237882. Studio and mobile detailing booking inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      <PageHeader
        badge="Direct Studio Access"
        title="Get In Touch with"
        highlightText="Junior's Detailing"
        subtitle="Serving County Roscommon, Athlone, Ballinasloe, and the wider Midlands. Direct technician phone support & online vehicle assessments."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-neutral-200 shadow-md">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6818]">
                  Direct Contact
                </span>
                <h2 className="text-2xl font-display font-bold text-neutral-900">
                  Speak Directly with Junior
                </h2>
                <p className="text-xs text-neutral-600">
                  No receptionists or call centers. Get direct technical guidance regarding your paint, ceramic options, or scheduling.
                </p>
              </div>

              {/* Direct Click-to-Call Highlight Box */}
              <a
                href="tel:+923041237882"
                className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-[#B38E3F] flex items-center justify-between group transition-all duration-300 shadow-sm block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#8A6818] group-hover:bg-[#1A1E24] group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8A6818] tracking-wider">
                      Tap to Call Direct
                    </div>
                    <div className="text-base sm:text-lg font-mono font-bold text-neutral-900 group-hover:text-[#8A6818] transition-colors">
                      +92 304 1237882
                    </div>
                  </div>
                </div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                  Open Now
                </span>
              </a>

              {/* Additional Contact Vectors */}
              <div className="space-y-4 pt-2 border-t border-neutral-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8A6818] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="text-neutral-900 font-bold text-sm">Athlone / Roscommon Region</div>
                    <div className="text-neutral-600">County Roscommon / Westmeath Border, Ireland</div>
                    <div className="text-neutral-400 text-[11px] mt-0.5">Coordinates: ~53.2048° N, -8.5447° W</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8A6818] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="text-neutral-900 font-bold text-sm">Operating Hours</div>
                    <div className="text-neutral-600">Monday – Saturday: 08:30 – 18:30</div>
                    <div className="text-neutral-400 text-[11px] mt-0.5">Sunday: By Special Appointment Only</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8A6818] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="text-neutral-900 font-bold text-sm">Email Inquiries</div>
                    <a href="mailto:info@juniorsdetailing.ie" className="text-neutral-600 hover:text-[#8A6818] transition-colors">
                      info@juniorsdetailing.ie
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8A6818] shrink-0" />
                <span className="text-xs text-neutral-700">
                  Fully insured studio with secure, monitored vehicle storage.
                </span>
              </div>
            </div>

            {/* MAP / SERVICE AREA PLACEHOLDER */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-900 font-display font-bold text-sm">
                  <Navigation className="w-4 h-4 text-[#8A6818]" />
                  <span>Coverage &amp; Studio Catchment Area</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#8A6818] bg-[#B38E3F]/10 px-2 py-0.5 rounded border border-[#B38E3F]/30">
                  Midlands &amp; West
                </span>
              </div>

              {/* Styled Automotive Map Graphic */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#B38E3F_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#B38E3F] text-[#8A6818] flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-neutral-900 font-display font-bold text-sm">
                    Athlone • Roscommon • Ballinasloe
                  </div>
                  <p className="text-[11px] text-neutral-600 max-w-xs mx-auto">
                    Serving County Roscommon, Athlone town, Moate, Galway East, and surrounding towns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Booking Assessment Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
