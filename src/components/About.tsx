import { Brain, Code2, Database, Rocket,Globe } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building intelligent applications using machine learning, predictive models, and LLM integrations.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing scalable web applications with Python, Flask, REST APIs, and modern backend architecture.",
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Working with SQL databases, data processing pipelines, and efficient backend storage solutions.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Deploying production-ready applications using Render and Streamlit with cloud-based workflows.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Creating responsive and interactive web applications with modern frontend and backend technologies.",
  }

];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="display-font text-5xl font-bold mt-2">
            Building AI-powered software with real-world impact.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-300 leading-8 text-lg">
              I build intelligent software by combining machine learning with
              modern backend technologies. My work focuses on designing
              end-to-end applications that solve real-world problems using
              Python, Flask, and practical AI solutions.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              From developing ML models and REST APIs to deploying
              production-ready applications, I enjoy taking ideas from concept
              to deployment while writing clean, maintainable, and scalable
              code.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              My interests include machine learning, Generative AI, backend
              development, and building software that delivers meaningful user
              experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
              >
                <h3 className="display-font text-3xl font-bold text-cyan-400">
                  4+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  AI Projects
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
              >
                <h3 className="display-font text-3xl font-bold text-cyan-400">
                  15+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Technologies
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
              >
                <h3 className="display-font text-xl font-bold text-cyan-400">
                  End-to-End
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  ML to Deployment
                </p>
              </motion.div>

            </div>

          </motion.div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    <Icon
                      className="text-cyan-400"
                      size={24}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-7 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}