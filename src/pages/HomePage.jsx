import React from "react";

const HomePage = ({ setActivePage }) => {
  return (
    <div>
      <div className="relative isolate overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="animate-fade-up"
              style={{
                animationDelay: "0.1s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm mb-5">
                <span className="mr-1">✦</span> integrated healthcare ecosystem
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Precision in{" "}
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Care
                </span>
                <br /> Excellence in Service.
              </h1>
              <p className="mt-6 text-lg text-slate-500 max-w-lg">
                CareOne Services Ltd. delivers cutting-edge hospital equipment,
                management consulting, specialized training, and beyond —
                unified under one vision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setActivePage("services")}
                  className="btn-shad px-7 py-3 text-base"
                >
                  Explore services →
                </button>
                <button
                  onClick={() => setActivePage("contact")}
                  className="btn-outline-shad px-7 py-3 text-base text-slate-700"
                >
                  Talk to experts
                </button>
              </div>
            </div>
            <div
              className="relative flex justify-center lg:justify-end animate-scale-in"
              style={{
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
                <div className="relative shad-card p-2 rounded-2xl border border-slate-100 overflow-hidden">
                  {/* Reliable SVG placeholder - no external image needed */}
                  <div className="w-full h-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex flex-col items-center justify-center p-8 min-h-[400px]">
                    <div className="text-7xl mb-4">🏥</div>
                    <div className="text-2xl font-semibold text-slate-700 mb-2">
                      CareOne Services
                    </div>
                    <div className="text-sm text-slate-500 text-center max-w-[250px]">
                      Excellence in Medical Infrastructure & Healthcare
                      Solutions
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white shad-card px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Trusted partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-slate-800">6+</p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Core divisions
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-slate-800">50+</p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Hospitals served
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-slate-800">100%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Customized training
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-slate-800">24/7</p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Logistics support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
