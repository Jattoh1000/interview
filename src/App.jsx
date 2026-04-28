import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={setActivePage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActivePage("home")}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-800 to-slate-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">C1</span>
            </div>
            <span className="font-semibold text-xl tracking-tight text-slate-800">
              CareOne
              <span className="font-light text-slate-500"> Services</span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 ml-1 hidden sm:inline-block">
              Ltd.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`nav-link text-slate-700 hover:text-slate-900 transition ${
                  activePage === item.id ? "active text-slate-900" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setActivePage("contact")}
            className="hidden md:block btn-shad px-5 py-2 text-sm font-medium"
          >
            Get in touch
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col px-6 pb-5 space-y-3 bg-white/90 backdrop-blur-md border-t border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className="nav-link py-2 text-slate-700 text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setActivePage("contact");
                setMobileMenuOpen(false);
              }}
              className="btn-shad w-full text-center py-2.5 mt-2 text-sm"
            >
              Get in Touch
            </button>
          </div>
        )}
      </header>

      <main>{renderPage()}</main>

      <footer className="border-t border-slate-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center text-slate-400 text-sm">
          <p>
            © 2025 CareOne Services Ltd. — Integrated healthcare solutions &
            infrastructure.
          </p>
          <p className="mt-1 text-xs">
            Hospital Equipment | Management Consultants | Medical Training |
            Marketing | Importation | General Contractor
          </p>
        </div>
      </footer>

      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -6px;
          left: 0;
          background-color: #0f172a;
          transition: width 0.2s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .btn-shad {
          transition: all 0.2s ease;
          background: #0f172a;
          color: white;
          border-radius: 40px;
          font-weight: 500;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .btn-shad:hover {
          background: #1e293b;
          transform: scale(0.98);
        }
        .btn-outline-shad {
          border: 1px solid #e2e8f0;
          background: transparent;
          border-radius: 40px;
          transition: all 0.2s;
        }
        .btn-outline-shad:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }
        .shad-card {
          background: #ffffff;
          border-radius: 1.25rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03), 0 8px 20px -8px rgba(0,0,0,0.08);
          transition: all 0.25s ease;
        }
        .shad-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -12px rgba(0,0,0,0.08);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
