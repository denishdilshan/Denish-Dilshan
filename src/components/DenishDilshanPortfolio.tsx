import { motion } from "framer-motion";
import type { ReactNode } from "react";
import profilePic from "../assets/profile-pic4.png";

type Project = {
  title: string;
  year?: string;
  description: string;
  stack: string[];
  link?: string;
};

type Service = {
  icon: ReactNode;
  title: string;
  text: string;
};

type EducationItem = {
  label: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  highlights: string[];
  icon: ReactNode;
  step: string;
};

type ContactItem = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
};

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

function CodeIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-4 3 4 3M16 9l4 3-4 3M14 4l-4 16" />
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

function BugIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5V6a3 3 0 0 1 6 0v1.5M7 10.5h10M12 10.5v9M7.5 13.5H4.5M19.5 13.5h-3M8 10.5v7a4 4 0 0 0 8 0v-7M7.5 7.5 5 5M16.5 7.5 19 5" />
    </svg>
  );
}

function DatabaseIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <ellipse cx="12" cy="6" rx="6.5" ry="2.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6v6c0 1.55 2.91 2.8 6.5 2.8s6.5-1.25 6.5-2.8V6M5.5 12v6c0 1.55 2.91 2.8 6.5 2.8s6.5-1.25 6.5-2.8v-6" />
    </svg>
  );
}

function BookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5A2.5 2.5 0 0 1 7 4h11v15.5a.5.5 0 0 1-.8.4A4.5 4.5 0 0 0 14.5 19H7a2.5 2.5 0 0 1-2.5-2.5v-10Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v12.5A2.5 2.5 0 0 0 9.5 19" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5h16v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.4 4.5h2.7l1.2 3.6-1.6 1.5a14.7 14.7 0 0 0 5.7 5.7l1.5-1.6 3.6 1.2v2.7a1.9 1.9 0 0 1-2.1 1.9A16.9 16.9 0 0 1 4.5 6.6a1.9 1.9 0 0 1 1.9-2.1Z" />
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

function SafeExternalLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
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

function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.18 }}
      className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-4 lg:justify-self-end lg:py-0"
    >
      <div className="absolute h-[270px] w-[270px] rounded-full bg-[#2d8fff]/16 blur-[80px]" />
      <div className="absolute inset-0 rounded-full border border-[#18345d]/25" />
      <div className="absolute inset-[12%] rounded-full border border-[#224a82]/18" />

      <div className="relative h-[340px] w-[340px] sm:h-[380px] sm:w-[380px]">
        <div className="absolute inset-0 rounded-full border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,11,21,0.98),rgba(3,5,10,0.99))] shadow-[0_28px_80px_rgba(0,0,0,0.55)]" />
        <div className="absolute inset-[14px] rounded-full border border-[#234f8a] bg-[radial-gradient(circle_at_30%_24%,rgba(79,178,255,0.18),transparent_28%),linear-gradient(180deg,rgba(7,14,28,0.98),rgba(2,4,8,0.99))]" />
        <div className="absolute inset-[32px] overflow-hidden rounded-full border border-[#25528d] bg-[#060d18] shadow-[inset_0_0_0_1px_rgba(79,178,255,0.08)]">
          <img
            src={profilePic}
            alt="Portrait of Denish Dilshan"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ item, index }: { item: Service; index: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_30px_75px_rgba(25,84,190,0.24)]"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(79,178,255,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex rounded-2xl border border-[#21437a] bg-[#081326] p-3 text-[#4fb2ff]">
          {item.icon}
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#a2afc6]">{item.text}</p>
      </div>
    </motion.article>
  );
}

function ContactRow({ item, index }: { item: ContactItem; index: number }) {
  return (
    <motion.a
      href={item.href}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex items-center gap-3 overflow-hidden rounded-[20px] border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,11,21,0.88),rgba(3,5,10,0.94))] px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-[#4f8cff] hover:shadow-[0_22px_44px_rgba(25,84,190,0.18)]"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(79,178,255,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/50 group-hover:opacity-100" />
      <div className="relative inline-flex rounded-2xl border border-[#21437a] bg-[#081326] p-2.5 text-[#4fb2ff]">
        {item.icon}
      </div>
      <div className="relative min-w-0">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8092b7]">{item.label}</p>
        <p className="mt-1 truncate text-sm font-semibold text-white sm:text-[0.95rem]">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
}

function SocialIconLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <SafeExternalLink
      href={href}
      ariaLabel={ariaLabel}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#21437a] bg-[linear-gradient(180deg,rgba(8,17,32,0.96),rgba(5,10,18,0.98))] text-[#dbe7ff] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[#4f8cff] hover:text-white hover:shadow-[0_18px_34px_rgba(25,84,190,0.18)]"
    >
      <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(79,178,255,0.16),transparent_30%)]" />
      <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/50 group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </SafeExternalLink>
  );
}
function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-6 shadow-[0_24px_65px_rgba(0,0,0,0.46)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_30px_75px_rgba(25,84,190,0.28)]"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(79,178,255,0.14),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        {project.year ? (
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-[#21437a] bg-[#081120] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9db8ea]">
              {project.year}
            </span>
          </div>
        ) : null}

        <div className={`${project.year ? "mt-5" : ""} flex items-start justify-between gap-4`}>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          {project.link ? (
            <SafeExternalLink
              href={project.link}
              ariaLabel={`Visit site for ${project.title}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#28508e] bg-[#081326] px-3.5 py-2 text-xs font-semibold text-[#4fb2ff] transition hover:border-[#4f8cff] hover:text-[#9ed9ff]"
            >
              Visit Site
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </SafeExternalLink>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-[#a2afc6]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#1d3358] bg-[#07101d] px-3 py-1 text-xs font-medium text-[#dbe7ff]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function EducationMilestone({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative lg:pl-14"
    >
      <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-[#2d5ca0] bg-[linear-gradient(180deg,#0f1830,#091425)] text-[#7ec4ff] shadow-[0_12px_28px_rgba(0,0,0,0.3)] lg:inline-flex">
        {item.icon}
      </div>

      <div className="group/card relative overflow-hidden rounded-[28px] border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,12,22,0.94),rgba(4,7,12,0.99))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_28px_65px_rgba(25,84,190,0.22)] sm:p-6">
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover/card:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(79,178,255,0.14),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent opacity-0 transition duration-300 group-hover/card:border-[#7ec4ff]/60 group-hover/card:opacity-100" />
        <div className="absolute right-4 top-2 text-[4.4rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.05] sm:right-6">
          {item.step}
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#21437a] bg-[#081326] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9db8ea]">
              {item.label}
            </span>
            <span className="rounded-full border border-[#1c3962] bg-[#071120] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7ec4ff]">
              {item.period}
            </span>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#21437a] bg-[#081326] text-[#4fb2ff] lg:hidden">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-base font-medium text-[#dbe7ff]">{item.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a3afc9] sm:text-base">
            {item.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[#1d3358] bg-[#07101d] px-3 py-1 text-xs font-medium text-[#dbe7ff]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function DenishDilshanPortfolio() {
  const githubUrl = "https://github.com/denishdilshan";
  const linkedInUrl = "https://www.linkedin.com/in/denish-dilshan-4856b3217/";
  const repositoriesUrl = `${githubUrl}?tab=repositories`;
  const cvDownloadUrl = "/Denish_Dilshan.pdf";
  const emailAddress = "dilshandenish@gmail.com";
  const phoneNumber = "0764616384";

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "PHP",
    "UI Design",
    "AI Projects",
    "Responsive Design",
  ];

  const projects: Project[] = [
    {
      title: "Thinkback",
      description:
        "A comprehensive feedback system designed for educational institutions. Lecturers can create feedback forms, and students provide feedback through unique links with AI-powered analytics.",
      stack: ["JavaScript", "React", "PHP", "PostgreSQL", "Python"],
    },
    {
      title: "Knowledge Dot",
      description:
        "An online learning platform with an admin site where users can create courses, and students can take quizzes through an interactive learning experience.",
      stack: ["PHP", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Ceylon Sunshine",
      description:
        "A freelance project for a real customer. It is a travel website with tour packages and detailed Sri Lankan tour information, built with SEO optimization in mind.",
      stack: ["HTML", "CSS", "JavaScript", "SEO"],
      link: "https://ceylonsunshinetours.lk/",
    },
  ];

  const services: Service[] = [
    {
      icon: <CodeIcon className="h-5 w-5" />,
      title: "Website Development",
      text: "Personal, business, and portfolio websites built to feel modern, reliable, and user-friendly.",
    },
    {
      icon: <BugIcon className="h-5 w-5" />,
      title: "Bug Fixing & Code Debugging",
      text: "Careful debugging and code cleanup to solve issues quickly and improve overall stability.",
    },
    {
      icon: <PaletteIcon className="h-5 w-5" />,
      title: "Responsive UI Design",
      text: "Clean interfaces that adapt smoothly across desktop, tablet, and mobile screen sizes.",
    },
    {
      icon: <DatabaseIcon className="h-5 w-5" />,
      title: "Database Design & Integration",
      text: "Structured database solutions with practical integrations for efficient, scalable applications.",
    },
    {
      icon: <BookIcon className="h-5 w-5" />,
      title: "Student Project Support",
      text: "Guidance and technical support for academic projects, from implementation to polishing the final result.",
    },
  ];

  const educationItems: EducationItem[] = [
    {
      label: "Degree",
      title: "Bachelor of Software Engineering (Hons)",
      subtitle: "The Open University of Sri Lanka",
      period: "2021 - 2025",
      summary:
        "Built a strong academic foundation in software engineering, problem solving, and application development through a four-year honours degree journey.",
      highlights: ["Four-year honours degree", "Software engineering focus", "Academic foundation"],
      icon: <BookIcon className="h-5 w-5" />,
      step: "01",
    },
    {
      label: "Internship",
      title: "Intern Software Engineer",
      subtitle: "TRACE Theory to Trade (T2T)",
      period: "7.10.2024 - 7.04.2025",
      summary:
        "Gained practical industry exposure as an Intern Software Engineer, applying academic knowledge in a real work environment and strengthening hands-on development experience.",
      highlights: ["Six-month internship", "Industry experience", "Real-world exposure"],
      icon: <RocketIcon className="h-5 w-5" />,
      step: "02",
    },
  ];

  const contactItems: ContactItem[] = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: "Email",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: "Mobile",
      value: phoneNumber,
      href: `tel:${phoneNumber}`,
    },
  ];

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#010101] text-white">
      <div className="fixed inset-0 -z-20 bg-[#010101]" />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(78,109,165,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(78,109,165,0.1)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,109,255,0.2),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(0,159,255,0.12),transparent_20%),linear-gradient(180deg,#05070b_0%,#020305_42%,#010101_100%)]" />
        <div className="absolute left-[-12%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-[#1548a0]/20 blur-[140px]" />
        <div className="absolute right-[-12%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[#0d7fda]/14 blur-[150px]" />
        <div className="absolute bottom-[-12%] left-[16%] h-[24rem] w-[24rem] rounded-full bg-[#11284c]/18 blur-[120px]" />
      </div>

      <main className="mx-auto max-w-[1200px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55 }}
          className="sticky top-4 z-30 mb-6"
        >
          <div className="group relative overflow-hidden rounded-full border border-[#1b2c47]/75 bg-[linear-gradient(180deg,rgba(9,14,24,0.68),rgba(5,9,16,0.46))] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_28px_80px_rgba(25,84,190,0.22)] supports-[backdrop-filter]:bg-[#060a12]/42 sm:px-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,196,255,0.2),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%)] opacity-80" />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
            <div className="relative flex items-center justify-between gap-4">
              <a href="#home" className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#254b85] bg-[#081225] text-sm font-semibold text-[#4fb2ff]">
                  DD
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#93a7cb]">Portfolio</p>
                  <p className="text-base font-semibold text-white">Denish Dilshan</p>
                </div>
              </a>

              <nav className="hidden items-center gap-2 rounded-full border border-[#1d355a]/75 bg-[#081121]/60 px-3 py-2 text-sm text-[#90a1bd] shadow-[inset_0_0_0_1px_rgba(126,196,255,0.04)] backdrop-blur-xl lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 transition duration-300 hover:bg-[#0d1a2d]/80 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(79,140,255,0.3)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <SafeExternalLink
                  href={githubUrl}
                  ariaLabel="Visit Denish Dilshan GitHub profile"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2e65ac] bg-[linear-gradient(180deg,#0f1830,#091425)] px-4 py-2 text-sm font-semibold text-[#edf6ff] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[#59a7ff] hover:text-white hover:shadow-[0_18px_34px_rgba(25,84,190,0.18)]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </SafeExternalLink>
                <SafeExternalLink
                  href={linkedInUrl}
                  ariaLabel="Visit Denish Dilshan LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2e65ac] bg-[linear-gradient(180deg,#0f1830,#091425)] px-4 py-2 text-sm font-semibold text-[#edf6ff] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-[#59a7ff] hover:text-white hover:shadow-[0_18px_34px_rgba(25,84,190,0.18)]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </SafeExternalLink>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          id="home"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.05 }}
          className="group relative overflow-hidden rounded-[36px] border border-[#16233b] bg-[linear-gradient(180deg,rgba(7,10,18,0.96),rgba(2,3,6,0.99))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_40px_120px_rgba(25,84,190,0.24)] sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(73,170,255,0.14),transparent_22%),linear-gradient(136deg,transparent_0%,transparent_50%,rgba(9,20,39,0.88)_50%,rgba(3,5,10,0.96)_100%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
          <div className="absolute left-[-12%] top-[30%] h-72 w-72 rounded-full bg-[#081020] blur-[80px]" />
          <div className="absolute right-[8%] top-[14%] h-56 w-56 rounded-full bg-[#1f6dff]/16 blur-[90px]" />
          <div className="absolute left-[8%] top-[22%] h-40 w-[42%] rotate-[-18deg] rounded-full border border-[#162646]/65" />
          <div className="absolute right-[-2%] bottom-[6%] h-40 w-[46%] rotate-[12deg] rounded-full border border-[#224170]/40" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.2rem]">
                Denish{" "}
                <span className="bg-[linear-gradient(180deg,#ffffff_0%,#9fe4ff_64%,#3e8cff_100%)] bg-clip-text text-transparent">
                  Dilshan
                </span>
              </h1>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.28em] text-[#9ccfff] sm:text-base">
                Software Engineering Student | Software Developer | Freelancer
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#a3afc9] sm:text-lg">
                I design and develop modern, responsive, and user-friendly web applications that solve real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d6bff,#49b8ff)] px-6 py-3 text-sm font-semibold text-[#03111f] shadow-[0_12px_35px_rgba(55,132,255,0.35)] transition hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(55,132,255,0.42)]"
                >
                  View My Work
                </a>
                <a
                  href={cvDownloadUrl}
                  download
                  aria-label="Download Denish Dilshan CV"
                  className="inline-flex items-center gap-2 rounded-full border border-[#264c85] bg-[#08111f] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#4f8cff] hover:bg-[#0b1628]"
                >
                  Download My CV
                </a>
              </div>
            </div>

            <HeroShowcase />
          </div>
        </motion.section>

        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative mt-10 overflow-hidden rounded-[32px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_32px_85px_rgba(25,84,190,0.24)] sm:p-7 lg:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(79,178,255,0.12),transparent_20%),linear-gradient(135deg,transparent_0%,transparent_55%,rgba(9,20,39,0.55)_55%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
          <div className="relative grid gap-6 lg:grid-cols-[1.16fr_0.84fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">About Me</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Crafting attractive digital experiences
              </h2>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#21437a] bg-[#081326] px-4 py-2 text-sm text-[#d7ebff]">
                <RocketIcon className="h-4 w-4 text-[#4fb2ff]" />
                Building with creativity and purpose
              </div>

              <div className="mt-5 max-w-none space-y-4 text-[0.98rem] leading-7 text-[#a3afc9] sm:text-base">
                <p>
                  I have a strong academic foundation in software engineering and a deep passion for web development and building practical software solutions. I enjoy creating responsive and efficient web applications using modern technologies.
                </p>
                <p>
                  I have experience working with frontend and backend development, and I am particularly interested in developing systems that improve user experience and solve real-world problems.
                </p>
                <p>
                  Currently, I am focusing on improving my skills and starting my journey as a freelance developer, where I aim to help clients build reliable and high-quality software solutions.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[26px] border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,12,22,0.94),rgba(4,7,12,0.98))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_28px_65px_rgba(25,84,190,0.22)]">
              <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
              <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">Core Technologies</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#1f3e70] bg-[#060d18] px-4 py-2 text-sm font-medium text-[#eaf6ff] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:bg-[#091629] hover:text-white hover:shadow-[0_14px_30px_rgba(32,101,190,0.28)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative mt-12 overflow-hidden rounded-[32px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_32px_85px_rgba(25,84,190,0.24)] sm:p-7 lg:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(79,178,255,0.11),transparent_18%),linear-gradient(135deg,transparent_0%,transparent_54%,rgba(9,20,39,0.48)_54%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
          <div className="absolute left-[-10%] top-[20%] h-56 w-56 rounded-full bg-[#1548a0]/10 blur-[90px]" />
          <div className="absolute right-[-6%] top-[8%] h-48 w-48 rounded-full bg-[#0d7fda]/10 blur-[85px]" />
          <div className="relative">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">Education</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  From academic foundations to industry experience
                </h2>
                <p className="mt-4 text-base leading-8 text-[#a3afc9]">
                  My learning journey combines university study with hands-on internship experience, helping me grow as a developer who values both strong fundamentals and practical execution.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#21437a] bg-[#081326] px-4 py-2 text-sm text-[#d7ebff]">
                <BookIcon className="h-4 w-4 text-[#4fb2ff]" />
                Learning and growth
              </div>
            </div>

            <div className="relative mt-8 mx-auto w-full max-w-4xl">
              <div className="relative">
                <div className="absolute bottom-8 left-4 top-8 hidden w-px bg-[linear-gradient(180deg,rgba(79,178,255,0.05),rgba(79,178,255,0.55),rgba(79,178,255,0.08))] lg:block" />
                <div className="space-y-5">
                  {educationItems.map((item, index) => (
                    <EducationMilestone key={`${item.label}-${item.title}`} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="projects" className="mt-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Work that reflects my style and skills
              </h2>
            </div>

            <SafeExternalLink
              href={repositoriesUrl}
              ariaLabel="Explore all repositories on GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-[#28508e] bg-[#081326] px-4 py-2 text-sm font-semibold text-[#dbe7ff] transition hover:border-[#4f8cff] hover:text-white"
            >
              Explore all repositories
              <ArrowUpRightIcon className="h-4 w-4" />
            </SafeExternalLink>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} delay={0.08} />
            <ProjectCard project={projects[2]} delay={0.14} />
          </div>
        </section>

        <motion.section
          id="services"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative mt-12 overflow-hidden rounded-[32px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_32px_85px_rgba(25,84,190,0.24)] sm:p-7 lg:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(79,178,255,0.11),transparent_20%),linear-gradient(135deg,transparent_0%,transparent_54%,rgba(9,20,39,0.52)_54%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
          <div className="relative">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">Services</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Freelancing support for practical digital solutions
                </h2>
                <p className="mt-4 text-base leading-8 text-[#a3afc9]">
                  I provide focused development support to help individuals and businesses build effective, polished, and user-friendly digital products.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#21437a] bg-[#081326] px-4 py-2 text-sm text-[#d7ebff]">
                <RocketIcon className="h-4 w-4 text-[#4fb2ff]" />
                Freelancing Services
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {services.map((item, index) => (
                <ServiceCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,12,22,0.92),rgba(4,7,12,0.98))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
              <p className="text-sm leading-7 text-[#dbe7ff]">
                I am committed to delivering clean, efficient, and user-friendly solutions tailored to client needs.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="group relative mt-12 overflow-hidden rounded-[32px] border border-[#162646] bg-[linear-gradient(180deg,rgba(7,11,21,0.96),rgba(3,5,10,0.99))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8cff] hover:shadow-[0_32px_85px_rgba(25,84,190,0.24)] sm:p-6 lg:p-7"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(79,178,255,0.11),transparent_20%),linear-gradient(135deg,transparent_0%,transparent_52%,rgba(9,20,39,0.5)_52%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#7ec4ff]/60 group-hover:opacity-100" />
          <div className="relative grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#8092b7]">Contact Me</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                Let&apos;s talk about your next project
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#a3afc9] sm:text-base">
                Feel free to reach out for collaborations, freelance work, or any project ideas.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#21437a] bg-[#081326] px-3.5 py-2 text-sm text-[#d7ebff]">
                <MailIcon className="h-4 w-4 text-[#4fb2ff]" />
                Open for freelance work
              </div>
            </div>

            <div className="rounded-[24px] border border-[#18355f] bg-[linear-gradient(180deg,rgba(7,12,22,0.92),rgba(4,7,12,0.98))] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:p-5">
              <div className="space-y-3">
                {contactItems.map((item, index) => (
                  <ContactRow key={item.label} item={item} index={index} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#1b2f51] pt-4">
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8092b7]">Social</p>
                  <p className="mt-1 text-sm font-semibold text-white">LinkedIn & GitHub</p>
                </div>

                <div className="flex items-center gap-3">
                  <SocialIconLink href={linkedInUrl} ariaLabel="Visit Denish Dilshan LinkedIn profile">
                    <LinkedInIcon className="h-5 w-5" />
                  </SocialIconLink>
                  <SocialIconLink href={githubUrl} ariaLabel="Visit Denish Dilshan GitHub profile">
                    <GitHubIcon className="h-5 w-5" />
                  </SocialIconLink>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
