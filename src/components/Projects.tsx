import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/project";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.25em]">
            Portfolio
          </p>

          <h2 className="display-font text-5xl md:text-6xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl leading-7">
            A collection of AI-powered applications, machine learning systems,
            and full-stack solutions built from concept to deployment.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:border-cyan-500/40
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="display-font text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.stack.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-cyan-300
                        text-xs
                        font-medium
                        cursor-default
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-8">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      rounded-lg
                      border
                      border-slate-700
                      text-slate-300
                      hover:bg-cyan-500
                      hover:text-white
                      hover:border-cyan-500
                      transition-all
                      duration-200
                    "
                  >
                    GitHub
                  </a>

                  {/* Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                       flex items-center gap-2
                       px-4 py-2
                       rounded-lg
                       bg-orange-500
                       hover:bg-orange-600
                       text-white
                       transition-all
                      "
                    >
                      Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {/* Details */}
                  <button
                    className="
                      ml-auto
                      text-cyan-400
                      font-medium
                      hover:text-cyan-300
                      transition
                    "
                    onClick={() =>
                      setSelected(
                        selected === project.id
                          ? null
                          : project.id
                      )
                    }
                  >
                    {selected === project.id
                      ? "Hide"
                      : "Details"}
                  </button>

                </div>

                {/* Expandable Case Study */}
                {selected === project.id && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      mt-8
                      border-t
                      border-slate-700
                      pt-6
                      space-y-6
                    "
                  >

                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">
                        Problem
                      </h4>

                      <p className="text-slate-300 leading-7">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">
                        Approach
                      </h4>

                      <p className="text-slate-300 leading-7">
                        {project.approach}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">
                        Tech Decisions
                      </h4>

                      <p className="text-slate-300 leading-7">
                        {project.techDecisions}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">
                        Outcome
                      </h4>

                      <p className="text-slate-300 leading-7">
                        {project.outcome}
                      </p>
                    </div>

                  </motion.div>

                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}