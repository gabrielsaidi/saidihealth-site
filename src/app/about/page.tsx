import Image from "next/image";
import type { Metadata } from "next";
import NavbarFloating from "@/components/NavbarFloating";
import FooterFull from "@/components/FooterFull";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Saidi Health",
  description:
    "Saidi Academy empowers insurance professionals with the education, certifications, and tools needed to build future-ready careers.",
};

const pillars = [
  {
    icon: "school",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-on-secondary-fixed-variant",
    title: "Continuing Education (CE) That Builds Skill",
    description:
      "Stay compliant while deepening your real-world knowledge with practical CE courses built for today\u2019s Medicare landscape.",
  },
  {
    icon: "library_books",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-on-tertiary-fixed-variant",
    title: "Practical Tools, Templates & Real Scenarios",
    description:
      "Access ready-to-use resources, case examples, and workflows that help you apply what you learn directly with clients and employers.",
  },
  {
    icon: "trending_up",
    iconBg: "bg-secondary-fixed-dim",
    iconColor: "text-on-secondary-fixed-variant",
    title: "Ongoing Learning & Market Updates",
    description:
      "Stay ahead of regulatory changes, market trends, and new opportunities with continuous training and expert insights.",
  },
  {
    icon: "groups",
    iconBg: "bg-secondary-fixed-dim/30",
    iconColor: "text-on-primary-fixed-variant",
    title: "Peer Community",
    description:
      "Students can interact and learn from instructors and other peers within our community within the academy.",
  },
];

const advisors = [
  { name: "Dianna Lesage", title: "Marketing Lead" },
  { name: "Kevin Hudson", title: "Chief of Staff" },
  { name: "Jessica Sweeney", title: "Advisor" },
  { name: "Alexis Vaughn", title: "Advisor" },
  { name: "Anthony Kavouras", title: "Advisor" },
];

export default function AboutPage() {
  return (
    <>
      <NavbarFloating />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-8 text-center mb-24">
          <span className="signature-label text-secondary mb-6 block">
            Empowering Excellence
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-primary tracking-tight leading-tight mb-8">
            About Saidi Academy
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto">
            Saidi Academy empowers insurance professionals with the education,
            certifications, and tools needed to build future-ready careers.
          </p>
        </section>

        {/* What We Do — Asymmetric Layout */}
        <section className="bg-surface-container-low py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="signature-label text-on-surface-variant">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-snug">
                Turning industry complexity into practical, actionable
                knowledge.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                From continuing education and licensing programs to advanced
                specialty training, we empower our students to master the
                landscape of modern healthcare insurance.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed border-l-4 border-tertiary-fixed-dim pl-6 py-2">
                Our platform combines expert instruction, on-demand learning,
                live-instructor-led training, and real-world resources to help
                agents stay compliant, grow faster, and lead in emerging
                markets.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 bg-surface-container-highest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(35,40,85,0.06)]">
                <Image
                  alt="Professional education environment"
                  className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                  src="/images/team/what-we-do.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-tertiary-fixed-dim/20 backdrop-blur-xl w-32 h-32 rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Four Pillars Grid */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="signature-label text-secondary mb-4 block">
                SEAMLESS WORKFLOW
              </span>
              <h2 className="text-4xl font-bold text-primary tracking-tight">
                The Saidi Advantage
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <ScrollReveal
                key={pillar.title}
                className="p-8 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex flex-col h-full group"
              >
                <div
                  className={`w-12 h-12 rounded-full ${pillar.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span
                    className={`material-symbols-outlined ${pillar.iconColor}`}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">
                  {pillar.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Meet The Team */}
        <section className="bg-surface py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="signature-label text-on-surface-variant mb-4 block">
                The Leadership
              </span>
              <h2 className="text-5xl font-bold text-primary tracking-tight">
                Meet The Saidi Team
              </h2>
            </div>
            <div className="space-y-32">
              {/* Marcus Greene */}
              <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 bg-surface-container-highest shadow-[0_20px_40px_rgba(35,40,85,0.06)]">
                    <Image
                      alt="Marcus Greene"
                      className="w-full h-full object-cover grayscale"
                      src="/images/team/marcus-greene.jpg"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    Marcus Greene
                  </h3>
                  <p className="text-secondary font-bold text-lg mb-8">
                    Founder and CEO
                  </p>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Marcus has spent over 15 years in the insurance industry
                    driving growth and developing high-performing agents. After
                    leadership roles at Ameriprise he founded Healthpro
                    Consultants, a Medicare-focused FMO. Recognizing the
                    industry&apos;s rapid evolution, Marcus launched Saidi
                    Health &mdash; a new standard for intelligent, tech-enabled
                    agent education built for the modern insurance professional.
                  </p>
                </div>
              </ScrollReveal>

              {/* Jason T. Andrew */}
              <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    Jason T. Andrew
                  </h3>
                  <p className="text-secondary font-bold text-lg mb-8">
                    Founder / COO
                  </p>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Jason is a seasoned entrepreneur, angel investor, and
                    executive with over 20 years of experience in Silicon
                    Valley. He has worked in real estate, insurance, technology,
                    and nonprofits, and is passionate about building companies
                    that are values-driven and where people can collaborate in
                    an environment where trust and authenticity bring about
                    amazing results.
                  </p>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 bg-surface-container-highest shadow-[0_20px_40px_rgba(35,40,85,0.06)]">
                    <Image
                      alt="Jason T. Andrew"
                      className="w-full h-full object-cover grayscale"
                      src="/images/team/jason-andrew.jpg"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Instructors */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="mb-16">
            <span className="signature-label text-secondary mb-4 block">
              Expert Led
            </span>
            <h2 className="text-4xl font-bold text-primary tracking-tight">
              Our Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Lead Instructor */}
            <div className="md:col-span-2 lg:col-span-1 p-6 bg-primary-container text-white rounded-lg flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity">
                <Image
                  alt="Marcus Greene teaching"
                  className="w-full h-full object-cover grayscale"
                  src="/images/team/marcus-instructor.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="relative z-10">
                <p className="font-bold text-xl">Marcus Greene</p>
                <p className="text-on-primary-container text-xs font-medium uppercase tracking-widest mt-1">
                  Provider Director & Head Instructor
                </p>
              </div>
            </div>
            {/* Placeholder Instructor Slots */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 bg-surface-container-low rounded-lg flex flex-col justify-end min-h-[300px] border border-outline-variant/10"
              >
                <p className="font-bold text-lg text-primary">Name</p>
                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mt-1">
                  Title
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisors & Partners */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 text-center">
              <span className="signature-label text-on-surface-variant mb-4 block">
                Collaborators
              </span>
              <h2 className="text-4xl font-bold text-primary tracking-tight">
                Advisors & Partners
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="text-center group">
                  <p className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">
                    {advisor.name}
                  </p>
                  <p className="text-on-surface-variant text-xs font-medium tracking-widest mt-1 uppercase">
                    {advisor.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterFull />
    </>
  );
}
