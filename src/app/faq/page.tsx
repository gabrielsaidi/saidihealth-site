import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NavbarSticky from "@/components/NavbarSticky";
import FooterSimple from "@/components/FooterSimple";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Saidi Health",
  description:
    "Everything you need to know about Saidi Academy, certifications, and mastering the Medicare landscape.",
};

const faqItems = [
  {
    question: "What is Saidi Academy?",
    answer: (
      <p className="text-on-surface-variant leading-relaxed">
        Saidi Academy is our intelligent education platform designed specifically
        for healthcare professionals and insurance agents. It leverages
        data-driven insights to provide a curated learning experience that keeps
        you ahead of regulatory changes and industry trends.
      </p>
    ),
  },
  {
    question: "What type of courses does Saidi Academy offer?",
    answer: (
      <div className="space-y-4">
        <p className="text-on-surface-variant leading-relaxed">
          Saidi Academy offers a comprehensive combination of learning modalities
          to suit every professional schedule:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "CE courses for insurance professionals",
            "Specialty certification classes",
            "Self-study courses",
            "Live webinars and expert sessions",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-sm font-medium text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "How do I get certified?",
    answer: (
      <p className="text-on-surface-variant leading-relaxed">
        To get certified, browse our catalog for certification-eligible courses.
        Once you complete the curriculum and pass the final assessment with a
        score of 80% or higher, your digital certificate will be instantly
        available in your dashboard.
      </p>
    ),
  },
  {
    question: "Are these courses state-approved?",
    answer: (
      <p className="text-on-surface-variant leading-relaxed">
        Yes, all courses marked with the &quot;State Approved&quot; badge meet
        the specific Continuing Education requirements for the states listed in
        the course description. We handle all filings with state departments of
        insurance.
      </p>
    ),
  },
  {
    question: "How do I access my CE credits?",
    answer: (
      <p className="text-on-surface-variant leading-relaxed">
        Your credits are automatically tracked. Simply navigate to the
        &apos;Transcript&apos; section in your Saidi Academy profile to download
        completion certificates or view the status of state filings.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <NavbarSticky />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-8 text-center mb-20">
          <span className="signature-label text-secondary mb-4 block">
            Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">
            Saidi FAQ
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Saidi Academy, certifications, and
            mastering the Medicare landscape with our intelligent education
            platform.
          </p>
          {/* Search Bar */}
          <div className="mt-12 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">
                search
              </span>
            </div>
            <input
              className="w-full pl-14 pr-8 py-5 bg-surface-container-highest rounded-full border-none focus:ring-2 focus:ring-secondary/40 text-primary placeholder:text-outline transition-all shadow-sm"
              placeholder="Search the FAQ"
              type="text"
            />
          </div>
        </section>

        {/* FAQ Content Grid */}
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Category Sidebar */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="p-6 bg-surface-container-low rounded-xl">
              <span className="signature-label text-on-surface-variant block mb-6">
                Categories
              </span>
              <nav className="flex flex-col gap-1">
                <button className="flex items-center justify-between px-4 py-3 rounded-full bg-surface-container-lowest text-secondary font-bold text-sm text-left transition-all">
                  Saidi Academy
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward_ios
                  </span>
                </button>
                <button className="flex items-center justify-between px-4 py-3 rounded-full hover:bg-surface-container-lowest text-on-surface-variant font-medium text-sm text-left transition-all">
                  Certifications
                </button>
                <button className="flex items-center justify-between px-4 py-3 rounded-full hover:bg-surface-container-lowest text-on-surface-variant font-medium text-sm text-left transition-all">
                  CE Credits
                </button>
                <button className="flex items-center justify-between px-4 py-3 rounded-full hover:bg-surface-container-lowest text-on-surface-variant font-medium text-sm text-left transition-all">
                  Platform Support
                </button>
              </nav>
            </div>
            {/* Accent Card */}
            <div className="p-6 bg-primary text-white rounded-xl overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="font-bold mb-2">Need direct help?</h4>
                <p className="text-sm opacity-80 mb-4">
                  Our support team is available 24/7 for premium members.
                </p>
                <button className="w-full py-3 bg-bloom text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:brightness-110">
                  Contact Support
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-8xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  support_agent
                </span>
              </div>
            </div>
          </aside>

          {/* FAQ Accordions */}
          <div className="lg:col-span-9">
            <FaqAccordion items={faqItems} />

            {/* Visual CTA Section */}
            <div className="mt-12 p-12 bg-secondary rounded-xl text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="relative z-10 flex-1">
                <span className="signature-label text-tertiary-fixed-dim mb-4 block">
                  Ready to start?
                </span>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  Join the next generation of Medicare professionals.
                </h2>
                <p className="text-blue-100 mb-8 max-w-md">
                  Start your journey with Saidi Academy today and get certified
                  in less than 48 hours.
                </p>
                <Link
                  href="/courses"
                  className="inline-block px-8 py-4 bg-white text-secondary rounded-full font-black tracking-tight transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  Explore Academy Courses
                </Link>
              </div>
              <div className="relative flex-1 hidden md:block">
                <div className="w-full aspect-square bg-white/10 rounded-full flex items-center justify-center p-12 blur-3xl absolute -right-20 -top-20"></div>
                <Image
                  alt="Professional health insurance agent using a digital tablet smiling"
                  className="rounded-xl shadow-2xl relative z-10 rotate-3 grayscale-[30%]"
                  src="/images/faq-doctor.jpg"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSimple />
    </>
  );
}
