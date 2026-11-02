import Link from "next/link";
import { Code2, GitBranch, Mail, X, ExternalLink } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "App Development", href: "/services#apps" },
    { label: "Web Development", href: "/services#web" },
    { label: "Maintenance", href: "/services#maintenance" },
    { label: "Upgrades", href: "/services#upgrades" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 md:px-16">
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-600 uppercase tracking-widest text-text-muted mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-electric-glow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
