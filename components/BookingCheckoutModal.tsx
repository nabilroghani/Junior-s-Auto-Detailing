"use client";

import { useState } from "react";
import { X, CheckCircle2, Shield, Calendar, Phone, Mail, Car, Clock, CreditCard } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  vehicleType: string;
  totalPrice: number;
  addons: string[];
}

export default function BookingCheckoutModal({
  isOpen,
  onClose,
  packageName,
  vehicleType,
  totalPrice,
  addons,
}: BookingModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    regNumber: "",
    preferredDate: "",
    notes: "",
    paymentMethod: "pay_at_studio",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("confirmed");
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-neutral-200 shadow-2xl p-5 sm:p-8 my-auto">
        
        {/* Prominent High-Contrast Close (X) Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center border border-neutral-300 shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {step === "confirmed" ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-600">
                Reservation Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
                Slot Reserved with Junior!
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Your provisional booking for{" "}
              <strong className="text-neutral-900">{packageName}</strong> ({vehicleType}) at{" "}
              <span className="text-[#8A6818] font-bold">€{totalPrice}</span> is logged. Junior will call you at{" "}
              <span className="font-mono font-bold text-neutral-900">{formData.phone}</span> to confirm your exact timing.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-left space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-500">Vehicle Reg:</span>
                <span className="font-bold text-neutral-900 uppercase">{formData.regNumber || "Not Provided"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Preferred Date:</span>
                <span className="font-bold text-neutral-900">{formData.preferredDate || "Earliest Available"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Payment:</span>
                <span className="font-bold text-emerald-700">Pay at Studio Upon Inspection</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+353899772513"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E2C37A]" />
                <span>Call Studio Direct</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-2">
            <div className="pr-8">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-[#8A6818]">
                Studio Checkout &amp; Assessment
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900">
                Reserve Your Detailing Slot
              </h3>
            </div>

            {/* Order Summary Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xs sm:text-sm text-neutral-900 line-clamp-1">{packageName}</div>
                <div className="font-display font-extrabold text-base sm:text-lg text-[#8A6818]">€{totalPrice}</div>
              </div>
              <div className="text-[11px] text-neutral-500 flex flex-wrap gap-1.5">
                <span>Vehicle: <strong className="text-neutral-700">{vehicleType}</strong></span>
                {addons.length > 0 && (
                  <span>• Add-ons: <strong className="text-neutral-700">{addons.join(", ")}</strong></span>
                )}
              </div>
            </div>

            {/* Input Grid - Clean 2-column or stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sean Kelly"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:bg-white focus:border-[#B38E3F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-700 mb-1">
                  Phone (Ireland) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 089 977 2513"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:bg-white focus:border-[#B38E3F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-700 mb-1">
                  Car Reg / Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. 211-D-12345 (BMW 330e)"
                  value={formData.regNumber}
                  onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:bg-white focus:border-[#B38E3F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:bg-white focus:border-[#B38E3F] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-neutral-700 mb-1">
                Special Requests or Paint Defect Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Heavy swirl marks on bonnet, pet hair in rear..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:bg-white focus:border-[#B38E3F] focus:outline-none resize-none"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="p-3.5 rounded-2xl border border-neutral-200 bg-neutral-50/50">
              <div className="text-[11px] uppercase font-bold text-neutral-700 flex items-center gap-1.5 mb-1">
                <CreditCard className="w-3.5 h-3.5 text-[#8A6818]" />
                <span>Payment Preference</span>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="radio"
                  name="payment"
                  checked={formData.paymentMethod === "pay_at_studio"}
                  onChange={() => setFormData({ ...formData, paymentMethod: "pay_at_studio" })}
                  className="accent-[#B38E3F]"
                />
                <span className="font-semibold text-neutral-800">Pay at Studio after Inspection (Cash / Card)</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#1A1E24] to-[#2D3748] hover:from-[#2D3748] hover:to-[#1A1E24] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-pulse">Confirming Studio Slot...</span>
              ) : (
                <>
                  <span>Confirm Reservation (€{totalPrice})</span>
                  <CheckCircle2 className="w-4 h-4 text-[#E2C37A]" />
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 pt-1.5 border-t border-neutral-100">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#8A6818]" /> Zero upfront deposit.
              </span>
              <span>Athlone / Roscommon Studio</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
