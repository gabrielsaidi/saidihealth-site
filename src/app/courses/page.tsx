import type { Metadata } from "next";
import NavbarFloating from "@/components/NavbarFloating";
import FooterFull from "@/components/FooterFull";
import CourseGrid from "@/components/CourseGrid";

export const metadata: Metadata = {
  title: "CE Courses | Saidi Health",
  description:
    "Gain exclusive access to our Medicare-ICHRA curriculum. Courses designed for forward-thinking clinicians and brokers.",
};

export default function CoursesPage() {
  return (
    <>
      <NavbarFloating />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold tracking-[0.15em] uppercase mb-4">
            PROFESSIONAL ACCREDITATION
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
            Master Your Certification
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Elevate your clinical expertise with our curated selection of
            Medicare and ICHRA specialist courses, designed for the modern
            healthcare professional.
          </p>
        </header>

        {/* Filter & Search Bar + Course Grid */}
        <CourseGrid />
      </main>
      <FooterFull />
    </>
  );
}
