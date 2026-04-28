import React from "react";

const services = [
  {
    icon: "🩺",
    title: "Hospital Equipment",
    description:
      "State-of-the-art diagnostic, surgical, ICU equipment, patient monitors, ventilators, imaging systems (X-ray, MRI, CT) from leading global brands. Full installation, calibration, and preventive maintenance plans.",
    stat: "150+ installations",
    delay: 0,
  },
  {
    icon: "📊",
    title: "Hospital Management Consultants",
    description:
      "Operational audits, workflow optimization, revenue cycle management, JCI/ISO readiness, staff productivity analysis, and strategic planning for healthcare leadership teams.",
    stat: "80+ hospitals advised",
    delay: 0.07,
  },
  {
    icon: "🧠",
    title: "Specialized Medical Care Training",
    description:
      "ACLS, PALS, BLS, nursing simulation, trauma care, infection control, and advanced clinical skills programs delivered by certified medical educators with simulation labs.",
    stat: "2,500+ professionals trained",
    delay: 0.14,
  },
  {
    icon: "📣",
    title: "Marketing Promotion",
    description:
      "Healthcare branding, digital marketing campaigns, patient acquisition strategies, corporate communications, medical event management, and reputation management for clinics & hospitals.",
    stat: "45+ successful campaigns",
    delay: 0.21,
  },
  {
    icon: "🌍",
    title: "Importation",
    description:
      "Seamless global sourcing of medical devices, spare parts, surgical consumables, and pharmaceuticals. Customs brokerage, warehousing, quality assurance, and door-to-door logistics.",
    stat: "Global partners in EU, USA, Asia",
    delay: 0.28,
  },
  {
    icon: "🏗️",
    title: "General Contractor",
    description:
      "Full-scale medical construction, renovation of operating theaters, ICU expansions, hospital infrastructure projects (HVAC, electrical, medical gas systems), from concept to handover.",
    stat: "30+ healthcare construction projects",
    delay: 0.35,
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <div
        className="text-center max-w-2xl mx-auto mb-14 animate-fade-up"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        <span className="text-sm font-semibold text-slate-400 uppercase">
          what we deliver
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-2">
          Specialized services for modern healthcare
        </h2>
        <p className="mt-4 text-slate-500">
          End-to-end solutions from diagnostics infrastructure to hospital brand
          elevation and construction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="shad-card rounded-2xl p-6 border border-slate-100 bg-white transition-all duration-300 animate-fade-up"
            style={{
              animationDelay: `${service.delay}s`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
              <span className="text-2xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              {service.title}
            </h3>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              {service.description}
            </p>
            <div className="mt-4 text-xs font-medium text-slate-400">
              ➜ {service.stat}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center animate-fade-up">
        <p className="text-slate-600">
          📋 All services include comprehensive project management, compliance
          documentation, and post-delivery support.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
