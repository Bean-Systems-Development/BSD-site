import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTABanner from "../_components/CTABanner";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Technical Rigor",
      desc: "We write clean, modular, and fully tested code that scales seamlessly with your user base.",
    },
    {
      title: "Client Partnership",
      desc: "We act as technical extensions of your team, providing strategic insights beyond raw execution.",
    },
    {
      title: "Modern Aesthetics",
      desc: "Performance and beauty go hand in hand. Every application we ship is polished and responsive.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About <span className="text-cyan-400">Bean Systems</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Bean Systems Development is a technology-focused software engineering studio. We build modern, robust web applications and digital infrastructure for forward-thinking organizations.
          </p>
        </section>

        <section className="py-16 px-6 sm:px-8 bg-slate-900/40 border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-8"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTABanner />
      <Footer />
    </div>
  );
}
