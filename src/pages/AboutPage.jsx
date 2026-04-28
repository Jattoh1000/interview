import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div
          className="animate-fade-up"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Our story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Architects of modern <br />
            healthcare solutions
          </h2>
          <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
            <p>
              Founded in 2017, CareOne Services Ltd. has grown from a visionary
              startup to a trusted leader in healthcare infrastructure and
              operational excellence. We bridge critical gaps between hospital
              equipment, management consulting, and specialized medical
              training.
            </p>
            <p>
              Our multidisciplinary team includes biomedical engineers,
              certified hospital administrators, marketing strategists, and
              construction project managers. This unique blend allows us to
              deliver turnkey solutions — from importing cutting-edge diagnostic
              tools to renovating entire hospital wings.
            </p>
            <p>
              With a presence across West Africa and partnerships with global
              medical manufacturers, we've successfully completed over 150
              projects for private clinics, government hospitals, and NGO
              healthcare initiatives. Our commitment to quality, compliance, and
              after-sales support sets us apart.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
              <span className="text-sm">
                ISO 13485 & CE certified supply chain
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
              <span className="text-sm">
                Expert project management (PMP certified)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
              <span className="text-sm">
                24/7 technical support & maintenance
              </span>
            </div>
          </div>
        </div>

        <div
          className="space-y-6 animate-scale-in"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="shad-card p-6 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Our Mission</h3>
                <p className="text-sm text-slate-500 mt-1">
                  To empower healthcare providers with world-class equipment,
                  strategic management, and training that saves lives and
                  improves patient outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="shad-card p-6 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
                👁️
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Our Vision</h3>
                <p className="text-sm text-slate-500 mt-1">
                  To become Africa's most integrated healthcare solutions
                  partner, recognized for innovation, integrity, and measurable
                  impact.
                </p>
              </div>
            </div>
          </div>
          <div className="shad-card p-6 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
                ⭐
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Core Values</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Excellence • Integrity • Collaboration • Innovation •
                  Patient-Centricity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-slate-100 pt-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800">Leadership Team</h3>
          <p className="text-slate-500 mt-2">
            Experienced professionals driving healthcare transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-3xl mb-3">
              👩‍⚕️
            </div>
            <h4 className="font-semibold">Dr. Sarah Johnson</h4>
            <p className="text-sm text-slate-500">CEO & Founder</p>
            <p className="text-xs text-slate-400 mt-1">
              20+ years healthcare leadership
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-3xl mb-3">
              🔧
            </div>
            <h4 className="font-semibold">Michael Okafor</h4>
            <p className="text-sm text-slate-500">Director of Operations</p>
            <p className="text-xs text-slate-400 mt-1">
              Expo & logistics expert
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-3xl mb-3">
              📊
            </div>
            <h4 className="font-semibold">Dr. Amina Diallo</h4>
            <p className="text-sm text-slate-500">Head of Medical Training</p>
            <p className="text-xs text-slate-400 mt-1">
              ACLS instructor, simulation specialist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
