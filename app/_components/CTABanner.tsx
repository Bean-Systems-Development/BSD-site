import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 px-6 sm:px-8 bg-black border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to Build Something Extraordinary?
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Let’s discuss your vision and see how our tailored tech solutions can take your business to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-slate-700 bg-slate-900/60 text-slate-300 font-medium px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
