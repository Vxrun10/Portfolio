import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            Journey
          </p>

          <h2 className="display-font text-5xl font-bold mt-2">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-slate-700 ml-4">

          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 pb-12"
            >
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-cyan-400" />

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.title}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  <span className="text-slate-400 mt-3 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 list-disc list-inside text-slate-300">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}