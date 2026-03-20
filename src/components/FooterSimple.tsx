import Link from "next/link";

export default function FooterSimple() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-low mt-20 text-sm tracking-wide leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-bold uppercase tracking-[0.15em] text-on-surface-variant">
            Saidi Health
          </div>
          <p className="text-on-surface-variant opacity-80 hover:opacity-100 duration-300">
            © 2024 Saidi Health. Clinical Excellence Redefined.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-end">
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors"
          >
            Careers
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors"
          >
            Press Kit
          </Link>
        </div>
      </div>
    </footer>
  );
}
