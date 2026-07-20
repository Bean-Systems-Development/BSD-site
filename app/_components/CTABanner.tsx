import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative rounded-2xl overflow-hidden border border-electric/20 bg-gradient-to-br from-navy-800 to-navy-900 p-12 text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-electric/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="relative">
          <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-4 font-mono">
            Ready to build?
          </p>
          <h2 className="font-display text-4xl font-700 text-text-primary mb-4 leading-tight">
            Let's turn your idea into a product
          </h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
            Whether you're starting from scratch or need a team to take over an existing codebase — we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-electric px-7 py-3.5 text-sm font-600 text-white hover:bg-electric-bright transition-colors"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
