import { motion } from "framer-motion";

function GitHubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844a9.53 9.53 0 0 1 2.504.337c1.909-1.297 2.747-1.027 2.747-1.027.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67c0 .93.65 1.67 1.71 1.67h.02c1.1 0 1.77-.74 1.77-1.67C6.98 3.72 6.34 3 5.27 3h-.02ZM20.5 13.08c0-3.4-1.81-4.98-4.24-4.98-1.95 0-2.82 1.07-3.31 1.83V8.5H9.57c.04.95 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.04 1.89 2.55V20h3.38v-6.92Z" />
    </svg>
  );
}

function SparklesIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3ZM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14ZM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z" />
    </svg>
  );
}

function CodeIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-4 3 4 3M16 9l4 3-4 3M14 4l-4 16" />
    </svg>
  );
}

function CpuIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M8 8h8v8H8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h3v3h-3z" />
    </svg>
  );
}

function PaletteIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 0 0 0 18h1.1a2.4 2.4 0 0 0 0-4.8H12a2.2 2.2 0 0 1 0-4.4h.8A5.2 5.2 0 0 0 18 6.6 3.6 3.6 0 0 0 14.4 3H12Z" />
      <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RocketIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c1.5-3 4-4 6-4m2-8c2.3-1.5 5.2-1.7 7-1-0.1 1.8-.5 4.7-2 7a8.4 8.4 0 0 1-4.5 3.4L10 20l.6-3.5A8.4 8.4 0 0 1 14 12c1.1-1.1 1.7-2.4 2-3.7M8 16l-4 4m2-8-2 2m7-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function SafeExternalLink({ href, className, children, ariaLabel }: { href: string; className?: string; children: React.ReactNode; ariaLabel?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

export default function DenishDilshanPortfolio() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Tailwind CSS",
    "UI Design",
    "AI Projects",
    "Frontend Development",
    "Responsive Design",
  ];

  const projects = [
    {
      title: "LUNA Grocery Manager",
      year: "2025",
      description:
        "An AI-assisted grocery management platform designed to organize items, streamline tracking, and create a smarter day-to-day user experience.",
      stack: ["Python", "AI", "Product Design"],
      link: "https://github.com/denishdilshan/LUNA-Grocery-Manager",
    },
    {
      title: "Think Back",
      year: "2025",
      description:
        "A final-year AI project that analyzes student feedback and transforms raw responses into insights for curriculum improvement.",
      stack: ["AI", "JavaScript", "Analytics"],
      link: "https://github.com/denishdilshan/Think_back",
    },
    {
      title: "Spotify Clone",
      year: "2025",
      description:
        "A sleek music-inspired web interface focused on polished visual design, reusable components, and modern frontend implementation.",
      stack: ["React", "Tailwind", "UI Engineering"],
      link: "https://github.com/denishdilshan/Spotify-Clone",
    },
  ];

  const highlights = [
    {
      icon: <CodeIcon className="h-5 w-5" />,
      title: "Modern Frontend",
      text: "Building clean, responsive, and user-friendly interfaces with modern web technologies.",
    },
    {
      icon: <CpuIcon className="h-5 w-5" />,
      title: "AI-Focused Projects",
      text: "Exploring intelligent solutions that combine usability with practical software ideas.",
    },
    {
      icon: <PaletteIcon className="h-5 w-5" />,
      title: "Attractive UI",
      text: "Interested in stylish dark themes, immersive visuals, and strong visual presentation.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl md:p-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.08),rgba(255,255,255,0.02))]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <SparklesIcon className="h-4 w-4" />
                Software Engineering Student • Developer
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Denish{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  Dilshan
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I build visually engaging web experiences and practical AI-driven solutions with a strong focus on modern UI, clean interactions, and real-world usefulness.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <SafeExternalLink
                  href="https://github.com/denishdilshan"
                  ariaLabel="Visit Denish Dilshan GitHub profile"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </SafeExternalLink>
                <SafeExternalLink
                  href="https://www.linkedin.com/in/denish-dilshan-4856b3217/"
                  ariaLabel="Visit Denish Dilshan LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </SafeExternalLink>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/10 bg-[#0b1120]/90 p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Profile Snapshot</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Open to Opportunities
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-slate-400">Focus Area</p>
                    <p className="mt-2 text-lg font-semibold">Frontend engineering and AI-powered student projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-slate-400">Style</p>
                    <p className="mt-2 text-lg font-semibold">Modern dark UI with premium visual feel</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-slate-400">Goal</p>
                    <p className="mt-2 text-lg font-semibold">Build attractive products that feel polished and useful</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">About Me</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Crafting attractive digital experiences</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300">
              <RocketIcon className="h-4 w-4 text-cyan-300" />
              Building with creativity and purpose
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            I am a software engineering student who enjoys building visually appealing and functional web applications. My work combines modern frontend design with practical software ideas, including academic AI tools, responsive user interfaces, and polished project presentations. I care about how products look, feel, and solve real problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <section className="mt-16">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Featured Projects</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Work that reflects my style and skills</h2>
            </div>
            <SafeExternalLink
              href="https://github.com/denishdilshan?tab=repositories"
              ariaLabel="Explore all repositories on GitHub"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Explore all repositories
              <ArrowUpRightIcon className="h-4 w-4" />
            </SafeExternalLink>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120]/80 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-fuchsia-500/0 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-400/10 group-hover:via-fuchsia-500/10 group-hover:to-white/5" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {project.year}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-slate-400 transition group-hover:text-cyan-300" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <SafeExternalLink
                    href={project.link}
                    ariaLabel={`View project ${project.title}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    View Project
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </SafeExternalLink>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
