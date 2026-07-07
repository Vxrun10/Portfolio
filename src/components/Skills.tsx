import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            Expertise
          </p>

          <h2 className="display-font text-5xl font-bold mt-2">
            Technical Skills
          </h2>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{
                y: -5,
              }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
              "
            >

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800
                      text-cyan-300
                      hover:border-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}