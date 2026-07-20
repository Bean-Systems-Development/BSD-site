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
    { label: "Get a Quote", href: "/contact" },
  ],
  Stack: [
    { label: "Python", href: "/services#stack" },
    { label: "TypeScript", href: "/services#stack" },
    { label: "Next.js", href: "/services#stack" },
    { label: "Tailwind CSS", href: "/services#stack" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-electric/10 ring-1 ring-electric/30">
                <Code2 className="h-4 w-4 text-electric-bright" />
              </div>
              <span className="font-display text-sm font-600 text-text-primary">
                <span className="text-electric-bright">{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Building modern apps and websites that scale.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: GitBranch, href: "#", label: "GitHub" },
                { Icon: X, href: "#", label: "X (Twitter)" },
                { Icon: ExternalLink, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:[email@company.com]", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

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
          <p className="text-xs text-text-muted">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
