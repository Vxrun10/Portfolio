import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const role = useTypewriter([
    "AI/ML Engineer",
    "Python Developer",
    "LLM & RAG Systems Builder",
    "Software Engineer",
    "Data Analytics"
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>
            <p className="text-cyan-400 uppercase tracking-widest mb-6">
              AI • ML • Full Stack
            </p>

            <h1 className="display-font text-6xl md:text-8xl font-bold">
              Varun Panchal
            </h1>

            <h2 className="text-2xl md:text-4xl mt-6 text-slate-300 h-12">
              {role}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-8 text-lg text-slate-400 max-w-xl">
              Building end-to-end AI and full-stack systems
              with Python, Flask, and applied machine learning.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600">
                <a href="/#projects" className="text-white font-semibold">
                  View Projects
                </a>
              </button>
              <button className="border border-slate-700 px-6 py-3 rounded-xl">
                <a href="/#contact" className="text-white font-semibold">
                  Contact Me
                </a>
              </button>
              <button className="border border-slate-700 px-6 py-3 rounded-xl">
                <a href="https://github.com/varunpanchal" className="text-white font-semibold" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </button>
            </div>
          </div>
         

          {/* Right */}

          <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

            <div className="flex gap-2 p-4 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="p-8 font-mono text-sm space-y-4">

              <p>
                role:
                <span className="text-cyan-400">
                  {" "}AI/ML Engineer
                </span>
              </p>

              <p>
                stack:
                <span className="text-orange-400">
                  {" "}Python + Flask + Django + Java + React +
                </span>
              </p>

              <p>
                status:
                <span className="text-green-400">
                  {" "}DEPLOYED
                </span>
              </p>

              <div className="pt-6 space-y-2">
                <p>✓ FarmiWise AI</p>
                <p>✓ Nexlanc AI</p>
                <p>✓ Car Price Prediction</p>
              </div>

              <div className="pt-6">
                <p>$ npm run deploy</p>
                <p className="text-green-400">
                  Build completed successfully
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}