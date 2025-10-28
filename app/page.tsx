"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Globe,
  Code2,
  Briefcase,
  MessageSquare,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import React from "react";

// =========================
// DONNÉES PERSO / CONTENU
// =========================

const DATA = {
  name: "NayZn",
  role: "Développeur Web / Backend ",
  location: "Paris, France",
  email: "NayZnMc@gmail.com",
  discord: ".nayzn",
  linkedin: "www.linkedin.com/in/NayZn",
  github: "https://github.com/NayZnMc",

  pitch:
    "Conception d’interfaces modernes, d’APIs sécurisées et d’outils internes sur mesure. Web, backend et serveurs de jeu : je prends en charge la partie technique pour que vous puissiez juste l’utiliser.",

  offerings: [
    {
      icon: "zap",
      title: "Site vitrine / landing page",
      desc: "Site rapide, responsive, prêt à envoyer aux clients / investisseurs. Optimisé SEO et mobile.",
      stack: ["Next.js", "TailwindCSS"],
    },
    {
      icon: "shield",
      title: "API + Auth sécurisée",
      desc: "Backends Node.js avec rôles, permissions, paiements et tableaux de bord d'admin.",
      stack: ["Node.js", "Express", "JWT", "PostgreSQL"],
    },
    {
      icon: "cpu",
      title: "Dév serveur FiveM",
      desc: "Systèmes custom pour serveurs RP (économie, jobs, gestion joueurs, logs admin). Stabilité & anti-abus.",
      stack: ["Lua", "FiveM", "SQL"],
    },
  ],

  projects: [
    {
      title: "Dashboard Admin SaaS",
      desc: "Panneau d'administration complet : gestion utilisateurs, rôles, stats en temps réel.",
      stack: ["React", "Next.js", "PostgreSQL", "Auth JWT"],
      links: {
        code: "",
        demo: "",
      },
    },
    {
      title: "Serveur FiveM RP Custom",
      desc: "Systèmes économie, métiers, inventaire, logs staff, équilibrage gameplay. Scripts optimisés pour limiter l'usage CPU.",
      stack: ["Lua", "SQL", "FiveM"],
      links: {
        code: "",
        demo: "",
      },
    },
  ],

  experience: [
    {
      role: "Développeur Web / Backend / Freelance",
      company: "Indépendant",
      period: "Janv. 2024 - Aujourd'hui",
      bullets: [
        "Création d'interfaces Next.js propres et rapides (landing pages, dashboards privés)",
        "Développement d'APIs sécurisées avec rôles / permissions / logs",
        "Intégration paiements, espace client protégé, automatisation back-office",
      ],
    },
    {
      role: "Dev Serveur FiveM / Minecraft / Systèmes Gameplay",
      company: "Serveurs RP & serveurs communautaires (privé)",
      period: "Mars 2020 - Aujourd'hui",
      bullets: [
        "Développement et maintenance de serveurs FiveM RP (économie, métiers, inventaire, interactions police / EMS)",
        "Création et configuration de serveurs Minecraft personnalisés (plugins, économie, permissions, anti-abus)",
        "Optimisation perf serveur & client, réduction du lag, amélioration stabilité",
        "Outils staff : gestion joueurs, logs actions modération, protections anti-cheat basiques",
      ],
    },
  ],
};

// =========================
// ICONES & HEADER SECTIONS
// =========================

function OfferingIcon({ type }: { type: string }) {
  if (type === "zap") return <Zap className="w-4 h-4 text-violet-400" />;
  if (type === "shield")
    return <ShieldCheck className="w-4 h-4 text-violet-300" />;
  if (type === "cpu") return <Cpu className="w-4 h-4 text-violet-300" />;
  return <Zap className="w-4 h-4 text-violet-400" />;
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 text-neutral-200">
      <div className="text-violet-400">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

// =========================
// PAGE PRINCIPALE
// =========================

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-[#0a0614] text-neutral-100 flex flex-col items-center px-4 py-12 gap-16 font-sans overflow-hidden">
      {/* BACKGROUND GLOW / BLUR VIOLET */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.55)_0%,rgba(10,6,20,0)_70%)] blur-[120px] opacity-60" />
        <div className="absolute right-[15%] bottom-[20%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(88,28,135,0.6)_0%,rgba(10,6,20,0)_70%)] blur-[140px] opacity-40" />
        <div className="absolute left-[10%] top-[60%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.35)_0%,rgba(10,6,20,0)_70%)] blur-[160px] opacity-30" />
      </div>

      {/* HERO */}
      <section className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-6">
        {/* Location / Discord */}
        <div className="flex flex-col text-xs text-neutral-300 leading-relaxed">
          <span className="text-violet-300 font-medium">{DATA.location}</span>
          <span className="text-neutral-400">
            Discord :{" "}
            <span className="text-violet-200 font-semibold">
              {DATA.discord}
            </span>
          </span>
        </div>

        {/* Name / Role */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-[0_8px_32px_rgba(168,85,247,0.5)]">
            {DATA.name}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-violet-300">
            {DATA.role}
          </h2>
        </div>

        {/* Pitch */}
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl">
          {DATA.pitch}
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button
            asChild
            className="rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 shadow-[0_20px_60px_rgba(168,85,247,0.45)]"
          >
            <a href={`mailto:${DATA.email}`} className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Me contacter</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-2xl border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:bg-neutral-800 text-sm font-medium px-4 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            <a
              href={DATA.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </Button>

          {DATA.linkedin && (
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-neutral-700 bg-neutral-800/60 text-neutral-200 hover:bg-neutral-700 text-sm font-medium px-4 py-2 shadow-[0_20px_60px_rgba(168,85,247,0.3)] ring-1 ring-violet-500/30"
            >
              <a
                href={DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 w-full max-w-6xl space-y-6">
        <SectionHeader
          icon={<Briefcase className="w-5 h-5 text-violet-400" />}
          title="Ce que je peux faire pour vous"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {DATA.offerings.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="bg-neutral-900/40 border border-neutral-700 rounded-2xl shadow-[0_30px_120px_rgba(124,58,237,0.25)] backdrop-blur-[2px] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-neutral-300">
                      <OfferingIcon type={offer.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-base leading-tight">
                        {offer.title}
                      </div>
                      <div className="text-neutral-400 text-sm leading-relaxed mt-1">
                        {offer.desc}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {offer.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-1 rounded-xl border border-neutral-700 bg-neutral-800/60 text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 w-full max-w-6xl space-y-6">
        <SectionHeader
          icon={<Code2 className="w-5 h-5 text-violet-400" />}
          title="Projets / Réalisations"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {DATA.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="bg-neutral-900/40 border border-neutral-700 rounded-2xl shadow-[0_30px_120px_rgba(168,85,247,0.25)] backdrop-blur-[2px] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed mt-2">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-1 rounded-xl border border-neutral-700 bg-neutral-800/60 text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative z-10 w-full max-w-6xl space-y-6">
        <SectionHeader
          icon={<Briefcase className="w-5 h-5 text-violet-400" />}
          title="Expérience"
        />

        <div className="grid gap-4">
          {DATA.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-neutral-900/40 border border-neutral-700 rounded-2xl p-6 shadow-[0_30px_120px_rgba(168,85,247,0.2)] backdrop-blur-[2px]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <div className="text-white font-semibold text-base leading-tight">
                    {job.role}
                  </div>
                  <div className="text-neutral-400 text-sm">{job.company}</div>
                </div>
                <div className="text-neutral-500 text-xs font-mono">
                  {job.period}
                </div>
              </div>

              <ul className="mt-4 text-neutral-300 text-sm leading-relaxed grid gap-2">
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 translate-y-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/10 border border-neutral-700 rounded-2xl p-8 md:p-10 text-center shadow-[0_40px_160px_rgba(168,85,247,0.3)]"
        >
          <div className="text-neutral-400 text-xs font-mono tracking-wide mb-2 uppercase">
            Disponible maintenant
          </div>
          <div className="text-white text-2xl font-semibold leading-tight">
            Besoin d'un dev fiable et réactif ?
          </div>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Je peux rejoindre votre projet rapidement (freelance / mission
            courte / renfort tech). Web, backend, API sécurisée, outils internes
            et serveurs FiveM / Minecraft.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <Button
              asChild
              className="rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 min-w-[160px] shadow-[0_20px_60px_rgba(168,85,247,0.45)]"
            >
              <a href={`mailto:${DATA.email}`} className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
              </a>
            </Button>

            <Button
              variant="outline"
              className="rounded-2xl border-neutral-700 bg-neutral-900/60 text-neutral-200 hover:bg-neutral-800 text-sm font-medium px-4 py-2 min-w-[160px] flex items-center gap-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discord : {DATA.discord}</span>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-6xl text-center border-t border-neutral-800 pt-8 mt-8 pb-20">
        <p className="text-neutral-500 text-xs">
          © {new Date().getFullYear()} NayZn — Portfolio
        </p>
        <p className="text-neutral-600 text-[11px] mt-2">
          Next.js • Node.js • API sécurisée • FiveM / Minecraft Dev
        </p>
      </footer>
    </main>
  );
}
