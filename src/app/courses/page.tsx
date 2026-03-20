import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NavbarSticky from "@/components/NavbarSticky";
import FooterSimple from "@/components/FooterSimple";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "CE Courses | Saidi Health",
  description:
    "Gain exclusive access to our Medicare-ICHRA curriculum. Courses designed for forward-thinking clinicians and brokers.",
};

function CheckIcon() {
  return (
    <span
      className="material-symbols-outlined text-tertiary-fixed-dim"
      style={{ fontVariationSettings: "'FILL' 1" }}
    >
      check_circle
    </span>
  );
}

export default function CoursesPage() {
  return (
    <>
      <NavbarSticky />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20">
            <div className="w-full h-full bg-gradient-to-bl from-tertiary-fixed-dim to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
          <div className="max-w-screen-xl mx-auto text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Professional Accreditation
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-container tracking-tight leading-tight mb-6">
              Master Your <br className="hidden md:block" /> Certification
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Gain exclusive access to our Medicare-ICHRA curriculum. Our courses
              are designed for forward-thinking clinicians and brokers navigating
              the intersection of public and private health coverage.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="px-8 mb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-surface-container-low rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-secondary/40 transition-all placeholder:text-outline"
                  placeholder="Search curriculum..."
                  type="text"
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="px-6 py-2.5 bg-primary-container text-white rounded-full text-sm font-semibold transition-transform active:scale-95 shadow-lg shadow-primary-container/10">
                  All Courses
                </button>
                <button className="px-6 py-2.5 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-semibold hover:bg-surface-container-high transition-all">
                  Certification Tiers
                </button>
                <button className="px-6 py-2.5 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-semibold hover:bg-surface-container-high transition-all">
                  On-Demand Modules
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Tiers */}
        <section className="px-8 pb-20">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <ScrollReveal className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(35,40,85,0.08)]">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-2">
                  ICHRA Fundamentals
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Core intersection of Medicare &amp; ICHRA
                </p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> 6 Interactive Modules
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> 12 CE Credits
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> Industry-recognized credential
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-primary-container">
                    $499
                  </span>
                  <span className="text-on-surface-variant text-sm font-medium">
                    / enrollment
                  </span>
                </div>
                <button className="w-full py-4 bg-primary-container text-white rounded-full font-bold tracking-tight hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">
                  Add to Cart
                </button>
              </div>
            </ScrollReveal>

            {/* Tier 2 — Most Popular */}
            <ScrollReveal className="group relative flex flex-col bg-primary-container rounded-xl p-10 transform md:-translate-y-4 shadow-[0_30px_70px_rgba(35,40,85,0.15)] ring-4 ring-secondary/20">
              <div className="absolute top-6 right-8 px-4 py-1 bg-tertiary-fixed-dim text-primary-container text-[10px] font-black uppercase tracking-widest rounded-full">
                Most Popular
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-tertiary-fixed-dim mb-6">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Specialist Certification
                </h3>
                <p className="text-on-primary-container text-sm">
                  Advanced Plan Modeling &amp; Strategy
                </p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckIcon /> Everything in Tier 1
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckIcon /> Advanced Tax Strategy modules
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckIcon /> 24 CE Credits
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckIcon /> Exclusive Prospecting Toolkit
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">$899</span>
                  <span className="text-on-primary-container text-sm font-medium">
                    / enrollment
                  </span>
                </div>
                <button className="w-full py-4 bg-white text-primary-container rounded-full font-bold tracking-tight hover:bg-tertiary-fixed-dim transition-all active:scale-95 flex items-center justify-center gap-2">
                  Add to Cart
                </button>
              </div>
            </ScrollReveal>

            {/* Tier 3 */}
            <ScrollReveal className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(35,40,85,0.08)]">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary-container mb-6">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-2">
                  Enterprise Academy
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Full agency-wide clinical access
                </p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> Unlimited Team Seat Access
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> Custom Team Dashboards
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <CheckIcon /> 24/7 Compliance Monitoring
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-primary-container leading-none">
                    Custom Quote
                  </span>
                </div>
                <button className="w-full py-4 border-2 border-primary-container text-primary-container rounded-full font-bold tracking-tight hover:bg-primary-container hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2">
                  Contact Sales
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 pb-32">
          <div className="max-w-screen-xl mx-auto rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-secondary opacity-10"></div>
            <Image
              alt="Modern clean bright clinic interior with soft blue accents"
              className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50 contrast-125"
              src="/images/cta-clinic.jpg"
              fill
              sizes="100vw"
            />
            <div className="relative z-10 px-8 py-20 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Elevate Your Practice Performance
              </h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
                Join over 2,500 healthcare professionals who have redefined
                their approach to patient coverage modeling.
              </p>
              <Link
                href="/courses"
                className="inline-block px-10 py-4 bg-tertiary-fixed-dim text-primary-container rounded-full font-bold text-lg hover:shadow-xl hover:shadow-tertiary-fixed-dim/20 transition-all"
              >
                View All Modules
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSimple />
    </>
  );
}
