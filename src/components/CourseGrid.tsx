"use client";

import { useState } from "react";
import Image from "next/image";

const FILTERS = [
  "all",
  "my",
  "Not enrolled",
  "newest",
  "popular",
  "free",
  "certificate",
] as const;

type FilterTag = (typeof FILTERS)[number];

interface Course {
  title: string;
  price: number | null; // null = free
  image: string;
  alt: string;
  bgClass: string;
}

const courses: Course[] = [
  {
    title: "Compliance and Documentation: Protecting Everyone in the Chain",
    price: 80,
    image: "/images/courses/course-01-compliance.jpg",
    alt: "Medical documentation and compliance paperwork",
    bgClass: "bg-primary-container",
  },
  {
    title: "Educating the Employee",
    price: 80,
    image: "/images/courses/course-02-educating.jpg",
    alt: "Healthcare professionals in a training session",
    bgClass: "bg-tertiary-container",
  },
  {
    title: "Welcome to Medicare-ICHRA Specialist Certification",
    price: null,
    image: "/images/courses/course-03-welcome.jpg",
    alt: "Modern professional workspace with laptop",
    bgClass: "bg-secondary-container",
  },
  {
    title: "ICHRA & the Medicare Employee",
    price: 80,
    image: "/images/courses/course-04-ichra-medicare.jpg",
    alt: "Hands pointing at charts and graphs",
    bgClass: "bg-surface-variant",
  },
  {
    title: "Medicare & Group Benefits Overview",
    price: 80,
    image: "/images/courses/course-05-group-benefits.jpg",
    alt: "Person working on a tablet device",
    bgClass: "bg-primary",
  },
  {
    title: "Medicare & ICHRA Fundamentals: How the Plan Actually Works",
    price: 80,
    image: "/images/courses/course-06-fundamentals.jpg",
    alt: "Consultation between professional and client",
    bgClass: "bg-secondary",
  },
  {
    title:
      "Medicare in the Workplace: Rules That Change When Your Client Has a Job",
    price: 80,
    image: "/images/courses/course-07-workplace.jpg",
    alt: "Business statistics on a digital screen",
    bgClass: "bg-on-primary-container",
  },
  {
    title: "The Agent as an SME",
    price: 80,
    image: "/images/courses/course-08-agent-sme.jpg",
    alt: "Close up of professional hands writing",
    bgClass: "bg-primary-container",
  },
  {
    title:
      "The Medicare Stakeholder Ecosystem: Personas, Roles, and Collaboration",
    price: 80,
    image: "/images/courses/course-09-stakeholder.jpg",
    alt: "Diverse group of healthcare specialists collaborating",
    bgClass: "bg-tertiary-container",
  },
  {
    title: "Transitioning to Medicare",
    price: 80,
    image: "/images/courses/course-10-transitioning.jpg",
    alt: "Abstract imagery of path or transition",
    bgClass: "bg-secondary-container",
  },
  {
    title: "What Every Medicare Agent Needs to Know About ICHRA",
    price: 80,
    image: "/images/courses/course-11-what-every-agent.jpg",
    alt: "Conceptual medical knowledge imagery",
    bgClass: "bg-surface-variant",
  },
];

function CourseCard({ course }: { course: Course }) {
  const isFree = course.price === null;

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(35,40,85,0.04)] hover:shadow-[0_30px_60px_rgba(35,40,85,0.08)] transition-all duration-500">
      <div
        className={`relative aspect-[4/3] ${course.bgClass} overflow-hidden`}
      >
        <Image
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          src={course.image}
          alt={course.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        {isFree && (
          <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-black uppercase tracking-wider">
            Free
          </span>
        )}
        <div className="absolute top-6 left-6 text-white">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
            saidi ACADEMY
          </p>
          <p className="text-[11px] font-medium leading-tight mt-1 max-w-[140px]">
            Medicare-ICHRA Specialist Certification
          </p>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-primary leading-tight mb-4 flex-grow">
          {course.title}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <span
            className={`text-xl font-black ${isFree ? "text-on-tertiary-container" : "text-primary"}`}
          >
            {isFree ? "Free" : `$${course.price}`}
          </span>
          <button className="px-6 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all active:scale-95">
            {isFree ? "Enroll Now" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Sticky Filter & Search Bar */}
      <div className="mb-12 py-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all active:scale-95 ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-grow lg:w-72">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                search
              </span>
              <input
                className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-6 py-2.5 text-sm focus:ring-2 focus:ring-secondary/40 transition-all placeholder:text-outline"
                placeholder="Search courses..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* Categories Dropdown */}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/30 text-sm font-medium text-on-surface hover:bg-white transition-all">
              categories
              <span className="material-symbols-outlined text-lg">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
      </div>
    </>
  );
}
