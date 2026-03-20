import Image from "next/image";
import Link from "next/link";
import NavbarFloating from "@/components/NavbarFloating";
import FooterFull from "@/components/FooterFull";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <NavbarFloating />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-8 py-20 md:py-32 max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <span className="signature-label text-secondary block">
                Seamless Workflow
              </span>
              <h1 className="text-5xl md:text-8xl font-extrabold text-primary tracking-tighter leading-[1.05]">
                Medicare-ICHRA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-violet to-ocean">
                  Specialist Certification
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                The definitive standard for healthcare advisors. Master the
                complexities of Individual Coverage Health Reimbursement
                Arrangements integrated with Medicare.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:translate-y-[-2px] transition-all"
              >
                Get Certified Now
              </Link>
              <Link
                href="/courses"
                className="bg-surface-container-lowest text-primary border border-outline-variant/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all"
              >
                View Curriculum
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <Image
                  className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                  src="/images/avatar-1.jpg"
                  alt="Female doctor profile picture"
                  width={48}
                  height={48}
                />
                <Image
                  className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                  src="/images/avatar-2.jpg"
                  alt="Male healthcare administrator profile picture"
                  width={48}
                  height={48}
                />
                <Image
                  className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                  src="/images/avatar-3.jpg"
                  alt="Medical professional profile picture"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-sm font-medium text-on-surface-variant">
                <span className="font-bold text-primary">2,400+</span>{" "}
                specialists certified this year
              </p>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="mt-20 max-w-6xl mx-auto relative reveal-animation">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 via-ocean/10 to-primary/5 blur-3xl rounded-full scale-110 opacity-60"></div>
            <div className="relative bg-surface-container-lowest rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(35,40,85,0.15)] overflow-hidden border border-white/40">
              <Image
                className="w-full object-cover"
                src="/images/hero-dashboard.jpg"
                alt="Modern healthcare digital dashboard on a tablet"
                width={1200}
                height={675}
                priority
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 w-[90%] md:w-auto md:min-w-[400px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                    Active Certification
                  </span>
                  <span className="bg-ocean/10 text-on-tertiary-container text-[10px] px-3 py-1 rounded-full font-bold">
                    LIVE SYSTEM
                  </span>
                </div>
                <h3 className="font-bold text-2xl text-primary mb-4">
                  ICHRA Compliance Hub
                </h3>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-secondary w-3/4 h-full rounded-full shadow-[0_0_12px_rgba(59,75,210,0.4)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="signature-label text-violet">
                Comprehensive Ecosystem
              </span>
              <h2 className="text-4xl font-extrabold text-primary tracking-tight">
                The Modern Standard for Healthcare SaaS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Intelligent Licensing */}
              <ScrollReveal className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform"></div>
                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 bg-ocean/20 text-on-tertiary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Intelligent Licensing
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Automated NIPR data synchronization and real-time state
                    license monitoring. Never miss a renewal again with
                    AI-driven expiration alerts.
                  </p>
                </div>
                <Image
                  className="mt-8 rounded-lg object-cover h-40 w-full opacity-60"
                  src="/images/licensing-docs.jpg"
                  alt="Abstract legal documents and certification seal"
                  width={600}
                  height={160}
                />
              </ScrollReveal>

              {/* Simplified Contracting */}
              <ScrollReveal className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-violet/20 text-indigo-900 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">
                      description
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Simplified Contracting
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Unified digital workflows for multi-carrier appointments.
                    E-sign once, deploy everywhere.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-secondary font-bold text-sm group cursor-pointer">
                  Learn more{" "}
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </ScrollReveal>

              {/* Carrier Compliance */}
              <ScrollReveal className="bg-primary-container text-white p-10 rounded-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-lunar">
                      policy
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Carrier Compliance</h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    Real-time validation against 150+ carrier-specific
                    guidelines and state regulations.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="px-4 py-2 bg-white/10 rounded-full inline-block text-[10px] font-bold tracking-widest uppercase">
                    Certified Secure
                  </div>
                </div>
              </ScrollReveal>

              {/* CE Training Hub */}
              <ScrollReveal className="md:col-span-3 lg:col-span-4 bg-surface-container-lowest p-12 rounded-xl shadow-sm flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <span className="signature-label text-bloom">
                    Next Generation Learning
                  </span>
                  <h3 className="text-3xl font-bold text-primary">
                    CE Training Hub
                  </h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Access a curated library of Continuing Education courses
                    tailored for the modern advisor. From ICHRA fundamentals to
                    advanced Medicare integration strategies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium text-primary border border-outline-variant/10">
                      30+ CE Credits
                    </span>
                    <span className="bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium text-primary border border-outline-variant/10">
                      On-Demand Access
                    </span>
                    <span className="bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium text-primary border border-outline-variant/10">
                      Expert Faculty
                    </span>
                  </div>
                  <Link
                    href="/courses"
                    className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                  >
                    Explore Courses
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <Image
                    className="rounded-xl shadow-2xl border border-outline-variant/5"
                    src="/images/learning-platform.jpg"
                    alt="Online learning platform interface on a laptop"
                    width={600}
                    height={400}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Enterprise Intelligence Section */}
        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <ScrollReveal className="space-y-8">
              <h2 className="text-4xl font-extrabold text-primary tracking-tight">
                Enterprise Intelligence. <br />
                Advisory Simplicity.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-ocean/10 text-on-tertiary-container rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      Centralized Data Fabric
                    </h4>
                    <p className="text-on-surface-variant mt-1">
                      Sync carrier data, certifications, and licenses into a
                      single, immutable source of truth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-violet/10 text-indigo-900 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      monitoring
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      Predictive Compliance
                    </h4>
                    <p className="text-on-surface-variant mt-1">
                      AI identifies potential regulatory gaps before they become
                      liabilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-bloom/10 text-red-900 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      lock_open
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      SOC2 Type II Architecture
                    </h4>
                    <p className="text-on-surface-variant mt-1">
                      Bank-grade encryption protecting sensitive PHI and advisor
                      credentials.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Abstract UI Mockup */}
            <ScrollReveal className="relative bg-surface-container-low rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-ocean/5 rounded-full blur-3xl"></div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/5 w-full max-w-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg"></div>
                  <div>
                    <div className="h-3 w-32 bg-surface-container rounded-full mb-2"></div>
                    <div className="h-2 w-20 bg-surface-container-low rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-10 w-full bg-surface-container-low rounded-lg"></div>
                  <div className="h-10 w-full bg-surface-container-low rounded-lg"></div>
                  <div className="h-10 w-full bg-secondary/10 rounded-lg border border-secondary/20"></div>
                  <div className="h-12 w-full bg-primary rounded-full mt-4 flex items-center justify-center">
                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24">
          <ScrollReveal className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 space-y-8">
              <span className="signature-label text-lunar">
                Ready to lead?
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
                Join the new era of <br />
                Medicare-ICHRA advisors.
              </h2>
              <p className="text-primary-fixed max-w-2xl mx-auto text-lg md:text-xl">
                Empower your agency with the tools, training, and
                certifications required to excel in the ICHRA landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Link
                  href="/courses"
                  className="bg-lunar text-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Start Your Certification
                </Link>
                <Link
                  href="#"
                  className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all"
                >
                  Book a Platform Demo
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <FooterFull />
    </>
  );
}
