"use client";

import { useState, type ReactNode } from "react";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(1); // Second item open by default (matches Stitch)

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(35,40,85,0.04)] border border-outline-variant/10 ${
              isOpen ? "ring-1 ring-secondary/20" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex items-start justify-between gap-4 w-full text-left"
              aria-expanded={isOpen}
            >
              <h3 className="text-xl font-bold text-primary tracking-tight">
                {item.question}
              </h3>
              <span className="material-symbols-outlined text-secondary shrink-0">
                {isOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
