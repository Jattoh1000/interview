import React, { useState } from "react";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(
      "✅ Thank you! A CareOne representative will contact you within 24 hours.",
    );
    e.target.reset();
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div
          className="animate-fade-up"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="text-sm font-semibold text-slate-400 uppercase">
            connect with us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Let's elevate healthcare together
          </h2>
          <p className="mt-5 text-slate-500 leading-relaxed">
            Whether you need hospital infrastructure, management expertise,
            specialized training, or marketing support — our team is ready to
            assist. Reach out through any of the channels below or fill out the
            form.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                📍
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Head Office
                </p>
                <p className="text-sm text-slate-500">
                  6th Floor, Medical Plaza, Plot 12, Victoria Island, Lagos,
                  Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                📞
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Phone / WhatsApp
                </p>
                <p className="text-sm text-slate-500">
                  +234 (0) 123 456 7890
                  <br />
                  +44 20 7946 0134 (UK office)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                ✉️
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Email</p>
                <p className="text-sm text-slate-500">
                  hello@careoneservices.com
                  <br />
                  procurement@careoneservices.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                ⏰
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Business Hours
                </p>
                <p className="text-sm text-slate-500">
                  Monday - Friday: 8:00 AM - 6:00 PM (WAT)
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-slate-200 transition">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-slate-200 transition">
              f
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-slate-200 transition">
              x
            </div>
          </div>
        </div>

        <div
          className="shad-card rounded-2xl bg-white p-6 md:p-8 border border-slate-100 animate-fade-up"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full name *
              </label>
              <input
                type="text"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                placeholder="Dr. Jane Cooper"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email address *
              </label>
              <input
                type="email"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="+234 XXX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Service interest
              </label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-white">
                <option>Hospital Equipment</option>
                <option>Management Consulting</option>
                <option>Medical Training</option>
                <option>Marketing Promotion</option>
                <option>Importation</option>
                <option>General Contractor</option>
                <option>Other / Multiple services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message / enquiry *
              </label>
              <textarea
                rows="4"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Tell us about your project or requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-shad w-full py-3 text-base font-medium"
            >
              Send message →
            </button>
            {formStatus && (
              <p className="text-xs text-center text-emerald-600 mt-2">
                {formStatus}
              </p>
            )}
          </form>
          <p className="text-xs text-slate-400 text-center mt-4">
            * We'll respond within 24 business hours
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-2xl overflow-hidden border border-slate-100 h-64 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
        📍 Interactive map — Headquarters, Victoria Island, Lagos
      </div>
    </div>
  );
};

export default ContactPage;
