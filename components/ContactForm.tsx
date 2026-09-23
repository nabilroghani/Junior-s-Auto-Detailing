"use client";

import { useState } from "react";
import { Send, CheckCircle2, Shield } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Ceramic Coating & Paint Correction",
    vehicle: "",
    location: "Athlone / Roscommon Area",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#B38E3F]/10 blur-[60px] pointer-events-none" />

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-display font-bold text-neutral-900">
            Inquiry Dispatched Successfully
          </h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto">
            Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Junior will review your vehicle details and call you back at{" "}
            <span className="text-[#8A6818] font-mono font-bold">{formData.phone}</span> within a few hours to arrange your assessment.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-wider font-bold text-[#8A6818] hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 mb-1">
              Request a Bespoke Assessment
            </h3>
            <p className="text-xs text-neutral-500">
              Provide your details below for a customized quotation or studio reservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 font-bold mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Liam O'Connor"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#B38E3F] focus:bg-white focus:ring-2 focus:ring-[#B38E3F]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 font-bold mb-2">
                Phone Number (Ireland) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 087 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#B38E3F] focus:bg-white focus:ring-2 focus:ring-[#B38E3F]/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 font-bold mb-2">
                Vehicle Make &amp; Model
              </label>
              <input
                type="text"
                placeholder="e.g. BMW M3 / Audi RS6 / Tesla Model 3"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#B38E3F] focus:bg-white focus:ring-2 focus:ring-[#B38E3F]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 font-bold mb-2">
                Primary Treatment Desired
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#B38E3F] focus:bg-white focus:ring-2 focus:ring-[#B38E3F]/20 transition-all cursor-pointer"
              >
                <option value="Ceramic Coating & Paint Correction">
                  Ceramic Coating &amp; Paint Correction (2-5yr Protection)
                </option>
                <option value="Multi-Stage Paint Correction">
                  Multi-Stage Paint Correction (Swirl &amp; Scratch Removal)
                </option>
                <option value="Full Interior Restoration & Sanitisation">
                  Full Interior Sanitisation &amp; Leather Treatment
                </option>
                <option value="Exterior Precision Deep Detail">
                  Exterior Precision Deep Detail
                </option>
                <option value="Maintenance / Other Service">
                  Maintenance Program / Custom Package
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-bold mb-2">
              Tell us about the vehicle condition or special requests
            </label>
            <textarea
              rows={3}
              placeholder="e.g., Noticeable swirl marks under direct sun, looking for maximum protection before winter..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#B38E3F] focus:bg-white focus:ring-2 focus:ring-[#B38E3F]/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1A1E24] to-[#2D3748] hover:from-[#2D3748] hover:to-[#1A1E24] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span className="animate-pulse">Processing booking inquiry...</span>
            ) : (
              <>
                <span>Submit Assessment Request</span>
                <Send className="w-4 h-4 text-[#E2C37A] group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-100">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#8A6818]" /> No spam. Direct personal response.
            </span>
            <span className="font-semibold text-neutral-600">Athlone &amp; Roscommon Area</span>
          </div>
        </form>
      )}
    </div>
  );
}
