import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTABanner from "../_components/CTABanner";
import { Code, Server, Globe, Cpu } from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      icon: Code,
      title: "Web Engineering & Next.js Platforms",
      desc: "Modern React and Next.js applications focused on speed, SEO, and seamless user experiences.",
    },
    {
      icon: Server,
      title: "API & Backend Infrastructure",
      desc: "Scalable Node.js architectures, microservices, and secure relational database design.",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps Integration",
      desc: "CI/CD automated deployment pipelines, serverless cloud platforms, and production monitoring.",
    },
    {
      icon: Cpu,
      title: "Technical Architecture Consulting",
      desc: "System audit, tech stack selection, code reviews, and strategic engineering guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Engineering <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tailored software development and cloud capabilities engineered for scale, reliability, and speed.
          </p>
        </section>

        <section className="py-16 px-6 sm:px-8 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <CTABanner />
      <Footer />
    </div>
  );
}
