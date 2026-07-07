import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>

          <h3 className="display-font text-2xl font-bold">
            Varun Panchal
          </h3>

          <p className="text-slate-400 mt-2">
            AI/ML Engineer • Python Developer • Full-Stack Developer
          </p>

        </div>

        {/* Center */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/Vxrun10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/varun-panchal-1008x/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:varunpanchal1008@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope size={22} />
          </a>

        </div>

        {/* Right */}
        <p className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Varun Panchal. All rights reserved.
        </p>

      </div>
    </footer>
  );
}