import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 text-slate-400 py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <Image
                src="/images/BSD-icon.svg"
                alt="BSD Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-white tracking-wide">
              BEAN SYSTEMS
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Architecting modern digital solutions, enterprise platforms, and scalable web experiences.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-cyan-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Web Engineering</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Cloud Infrastructure</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">API Integration</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Product Architecture</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <p className="text-sm leading-relaxed mb-2">
            Ready to collaborate? Reach out to start building.
          </p>
          <Link
            href="/contact"
            className="text-cyan-400 text-sm font-medium hover:underline"
          >
            contact@beansystems.dev
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 text-xs text-slate-500 text-center">
        &copy; {new Date().getFullYear()} Bean Systems Development. All rights reserved.
      </div>
    </footer>
  );
}
