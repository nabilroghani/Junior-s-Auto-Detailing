"use client";

import { useState } from "react";
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, MessageCircle, Phone } from "lucide-react";
import BookingCheckoutModal from "./BookingCheckoutModal";

interface PackageOption {
  id: string;
  name: string;
  basePrice: number;
  time: string;
  desc: string;
}

const packages: PackageOption[] = [
  {
    id: "exterior",
    name: "Exterior Precision Detail",
    basePrice: 95,
    time: "3-4h",
    desc: "Multi-stage decontamination, snow foam, clay bar, and 3-month ceramic sealant.",
  },
  {
    id: "interior",
    name: "Interior Deep Sanitisation",
    basePrice: 120,
    time: "4-5h",
    desc: "Thermal steam extraction, OEM leather balm, anti-bacterial ozone purify.",
  },
  {
    id: "correction",
    name: "Multi-Stage Paint Correction",
    basePrice: 280,
    time: "1-2 Days",
    desc: "Machine rotary & dual-action jewelling to remove 90-95% of swirl scratches.",
  },
  {
    id: "ceramic",
    name: "9H Graphene & Ceramic Coating",
    basePrice: 450,
    time: "2 Days",
    desc: "Certified 2-5yr liquid glass shield with extreme water beading matrix.",
  },
];

const vehicleSizes = [
  { id: "compact", name: "Hatchback / Coupe", multiplier: 1.0, example: "Golf, A3, Fiesta, TT" },
  { id: "saloon", name: "Saloon / Estate", multiplier: 1.15, example: "BMW 3/5 Series, A4, C-Class" },
  { id: "suv", name: "SUV / 4x4 / Jeep", multiplier: 1.3, example: "X5, Q7, Land Cruiser, EV" },
];

const addOnOptions = [
  { id: "headlights", name: "Headlight Clarity Restoration", price: 60 },
  { id: "engine", name: "Engine Bay Deep Steam & Dress", price: 50 },
  { id: "glass", name: "Ceramic Windscreen Rain Repel", price: 45 },
  { id: "leather_guard", name: "Anti-Dye Leather Ceramic", price: 80 },
];

export default function InstantQuoteEstimator() {
  const [selectedPackage, setSelectedPackage] = useState<string>("correction");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("saloon");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const currentPkg = packages.find((p) => p.id === selectedPackage) || packages[0];
  const currentVeh = vehicleSizes.find((v) => v.id === selectedVehicle) || vehicleSizes[1];

  const calculatedBase = Math.round(currentPkg.basePrice * currentVeh.multiplier);
  const addonsTotal = selectedAddons.reduce((sum, addId) => {
    const item = addOnOptions.find((a) => a.id === addId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = calculatedBase + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B38E3F]/10 border border-[#B38E3F]/30 text-[#8A6818] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Pricing Tool</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
              Instant Custom Quote &amp; Booking
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Select your vehicle size and treatments for an accurate immediate estimate in Euros (€).
            </p>
          </div>

          <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-2xl border border-neutral-200">
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-neutral-500">Live Estimated Total</div>
              <div className="text-3xl font-display font-extrabold text-neutral-900">
                €{totalPrice}
              </div>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="px-5 py-3 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <span>Book Slot</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E2C37A]" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Step 1: Vehicle Size */}
          <div className="lg:col-span-4 space-y-3">
            <label className="text-xs uppercase font-extrabold tracking-wider text-neutral-800 block">
              1. Select Vehicle Classification
            </label>
            <div className="space-y-2">
              {vehicleSizes.map((veh) => {
                const isSelected = selectedVehicle === veh.id;
                return (
                  <button
                    key={veh.id}
                    type="button"
                    onClick={() => setSelectedVehicle(veh.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                        : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{veh.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#E2C37A]" />}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {veh.example}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Main Package */}
          <div className="lg:col-span-5 space-y-3">
            <label className="text-xs uppercase font-extrabold tracking-wider text-neutral-800 block">
              2. Select Primary Treatment Package
            </label>
            <div className="space-y-2">
              {packages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1A1E24] text-white border-[#B38E3F] ring-1 ring-[#B38E3F] shadow-md"
                        : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{pkg.name}</span>
                      <span className={`font-mono font-bold text-xs ${isSelected ? "text-[#E2C37A]" : "text-[#8A6818]"}`}>
                        From €{pkg.basePrice}
                      </span>
                    </div>
                    <div className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {pkg.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-Ons */}
          <div className="lg:col-span-3 space-y-3">
            <label className="text-xs uppercase font-extrabold tracking-wider text-neutral-800 block">
              3. Optional Enhancements
            </label>
            <div className="space-y-2">
              {addOnOptions.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      isChecked
                        ? "bg-emerald-50 border-emerald-300 text-neutral-900"
                        : "bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-700"
                    }`}
                  >
                    <div className="text-[11px] font-semibold pr-2">{addon.name}</div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[11px] font-mono font-bold text-[#8A6818]">+€{addon.price}</span>
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-neutral-300"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Bar & Direct Triggers */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-[#8A6818]" />
            <span>Athlone / Roscommon Studio Assessment • Guaranteed Transparent Pricing</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/353899772513?text=${encodeURIComponent(
                `Hi Junior! I configured a quote on your site: Package: ${currentPkg.name}, Vehicle: ${currentVeh.name}, Estimated Total: €${totalPrice}. Are there any openings this week?`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Estimate</span>
            </a>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-[#1A1E24] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E2C37A]" />
              <span>Instant Checkout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Booking Checkout Modal */}
      {isCheckoutOpen && (
        <BookingCheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          packageName={currentPkg.name}
          vehicleType={currentVeh.name}
          totalPrice={totalPrice}
          addons={selectedAddons.map((id) => addOnOptions.find((a) => a.id === id)?.name || id)}
        />
      )}
    </>
  );
}
