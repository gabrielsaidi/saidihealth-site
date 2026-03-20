import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NavbarSticky from "@/components/NavbarSticky";
import FooterSimple from "@/components/FooterSimple";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Saidi Health",
  description:
    "Saidi Academy empowers insurance professionals with the education, certifications, and tools needed to build future-ready careers.",
};

export default function AboutPage() {
  return (
    <>
      <NavbarSticky />
      <main className="pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <span className="signature-label text-secondary mb-6">
                Empowering Careers
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8">
                About Saidi Academy - Achieve Your Goals
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
                Saidi Academy empowers insurance professionals with the
                education, certifications, and tools needed to build
                future-ready careers.
              </p>
              <div className="mt-12 flex space-x-6">
                <Link
                  href="/courses"
                  className="px-10 py-4 rounded-full bg-secondary text-white font-bold shadow-xl hover:shadow-secondary/20 transition-all active:scale-95"
                >
                  Explore Academy
                </Link>
                <Link
                  href="#what-we-do"
                  className="flex items-center px-6 py-4 rounded-full text-primary font-bold hover:bg-surface-container-low transition-all"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-square rounded-xl bg-surface-container-low relative overflow-hidden">
                <Image
                  alt="Modern clinical workspace with clean aesthetic"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                  src="/images/hero-about.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary-fixed-dim/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          id="what-we-do"
          className="bg-surface-container-low py-32 rounded-xl mx-4 md:mx-8"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
                <span className="signature-label text-on-surface-variant mb-4">
                  Our Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                  What We Do
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <ScrollReveal className="bg-surface p-12 rounded-xl shadow-[0_20px_40px_rgba(35,40,85,0.04)]">
                  <p className="text-2xl md:text-3xl font-medium text-primary leading-tight">
                    From continuing education and licensing programs to advanced
                    specialty training, we turn industry complexity into{" "}
                    <span className="text-secondary italic">
                      practical, actionable knowledge.
                    </span>
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <ScrollReveal className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">
                clinical_notes
              </span>
            </div>
            <span className="signature-label text-on-surface-variant mb-6">
              Our North Star
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight mb-10">
              Our Mission
            </h2>
            <div className="relative">
              <span className="absolute -top-8 -left-8 text-8xl text-outline-variant/20 font-serif">
                &ldquo;
              </span>
              <p className="text-2xl md:text-4xl font-medium text-on-surface leading-snug">
                To be the definitive standard for healthcare advisors, mastering
                the complexities of Individual Coverage Health Reimbursement
                Arrangements (ICHRA) and Medicare.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Saidi Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="mb-16">
            <span className="signature-label text-secondary mb-4">
              The Saidi Advantage
            </span>
            <h2 className="text-5xl font-black text-primary tracking-tight">
              Why Saidi?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinical Excellence */}
            <ScrollReveal className="group p-10 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(35,40,85,0.03)] hover:shadow-[0_20px_40px_rgba(35,40,85,0.08)] transition-all duration-500">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-8 group-hover:bg-tertiary-fixed-dim/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">
                  medical_services
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Clinical Excellence
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Precision-engineered curriculum that bridges the gap between
                clinical theory and insurance practicality.
              </p>
            </ScrollReveal>

            {/* Regulatory Confidence */}
            <ScrollReveal className="group p-10 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(35,40,85,0.03)] hover:shadow-[0_20px_40px_rgba(35,40,85,0.08)] transition-all duration-500">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">
                  gavel
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Regulatory Confidence
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Stay ahead of compliance shifts with real-time updates and
                authoritative guidance on Medicare and ICHRA.
              </p>
            </ScrollReveal>

            {/* Career Growth */}
            <ScrollReveal className="group p-10 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(35,40,85,0.03)] hover:shadow-[0_20px_40px_rgba(35,40,85,0.08)] transition-all duration-500">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-8 group-hover:bg-on-tertiary-container/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">
                  trending_up
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Career Growth
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Accelerate your professional trajectory with high-value
                certifications recognized across the healthcare industry.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="bg-primary-container p-12 md:p-20 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              <div>
                <div className="text-4xl md:text-5xl font-black text-tertiary-fixed-dim mb-2">
                  15k+
                </div>
                <div className="signature-label text-on-primary-container">
                  Certified Professionals
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-tertiary-fixed-dim mb-2">
                  98%
                </div>
                <div className="signature-label text-on-primary-container">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-tertiary-fixed-dim mb-2">
                  50+
                </div>
                <div className="signature-label text-on-primary-container">
                  States Covered
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-tertiary-fixed-dim mb-2">
                  24/7
                </div>
                <div className="signature-label text-on-primary-container">
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSimple />
    </>
  );
}
