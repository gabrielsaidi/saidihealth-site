import Link from "next/link";

export default function FooterFull() {
  return (
    <footer className="w-full py-12 px-8 rounded-t-[3rem] bg-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-sm leading-relaxed">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-lg font-bold text-white">Saidi Health</div>
          <p className="text-primary-fixed/80 max-w-xs">
            Building the trust layer for the future of employer-sponsored
            healthcare and Medicare integration.
          </p>
          <div className="flex gap-4">
            <span className="bg-white/10 border border-white/20 p-2 rounded-lg text-primary-fixed">
              <span className="material-symbols-outlined text-sm">shield</span>{" "}
              SOC2
            </span>
            <span className="bg-white/10 border border-white/20 p-2 rounded-lg text-primary-fixed">
              <span className="material-symbols-outlined text-sm">lock</span>{" "}
              HIPAA
            </span>
          </div>
        </div>

        {/* Product */}
        <div className="space-y-4">
          <h5 className="font-bold text-white">Product</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="/courses"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                CE Course Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Licensing Engine
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Compliance Vault
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                ICHRA Specialist Hub
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h5 className="font-bold text-white">Resources</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Security Architecture
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-primary-fixed/70 hover:text-lunar transition-all"
              >
                Compliance
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h5 className="font-bold text-white">Contact</h5>
          <ul className="space-y-2">
            <li className="text-primary-fixed/70">support@getsaidi.ai</li>
            <li className="text-primary-fixed/70">1-800-SAIDI-HLTH</li>
            <li className="text-primary-fixed/70">San Francisco, CA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-fixed/60">
        <div className="text-primary-fixed/50">
          © 2024 Saidi Health. Security: SOC2 Compliant. Data Encrypted.
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-lunar transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-lunar transition-colors">
            Twitter
          </Link>
          <Link href="#" className="hover:text-lunar transition-colors">
            Status Page
          </Link>
        </div>
      </div>
    </footer>
  );
}
