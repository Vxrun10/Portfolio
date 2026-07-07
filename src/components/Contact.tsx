import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FileText } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);

    // EmailJS / Formspree later
    reset();
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.25em]">
            Contact
          </p>

          <h2 className="display-font text-5xl md:text-6xl font-bold mt-3">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-7">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the platforms below or send me a message directly.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >

            <h3 className="display-font text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6 mt-10">

              <a
                href="mailto:Varunpanchal1008@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaEnvelope size={22} />
                <span>Varunpanchal1008@gmail.com</span>
              </a>

              <a
                href="https://github.com/Vxrun10"
                target="_blank"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaGithub size={22} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/varunpanchal1008"
                target="_blank"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={22} />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FileText />
                <span>Download Resume</span>
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5"
          >

            <input
              placeholder="Your Name"
              {...register("name", {
                required: true,
              })}
              className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              placeholder="Your Email"
              {...register("email", {
                required: true,
              })}
              className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Message..."
              {...register("message", {
                required: true,
              })}
              className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-400">
                Message submitted successfully!
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}