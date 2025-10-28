"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Globe, Code2, Briefcase, User } from "lucide-react";

const DATA = {
  name: "NayZn",
  role: "Développeur Web / Backend / Mobile",
  tagline:
    "Je conçois et développe des applications modernes, propres et performantes.",
  location: "Basé à Paris",
  email: "NayZnMc@gmail.com",
  github: "https://github.com/NayZnMc",
  linkedin: "", // on le mettra quand il sera prêt
  portfolioLink: "",

  skills: [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / Express / API REST",
    "SQL / PostgreSQL",
    "Git / GitHub / CI",
  ],

  projects: [
    {
      title: "Dashboard Admin SaaS",
      stack: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
      desc: "Application web type SaaS avec authentification, gestion d'utilisateurs, statistiques en temps réel et panneau d'administration.",
      codeUrl: "", // tu mettras ton repo GitHub quand tu l'auras push
      liveUrl: "", // tu mettras le lien déployé si tu le publies
    },
    {
      title: "API REST E-commerce",
      stack: ["Node.js", "Express", "JWT", "Stripe"],
      desc: "Backend sécurisé pour boutique en ligne : panier, paiement par carte, gestion des produits, comptes clients.",
      codeUrl: "",
      liveUrl: "",
    },
    {
      title: "App Mobile Task / IA",
      stack: ["React Native", "Expo", "SQLite"],
      desc: "Application mobile pour organiser ses tâches, avec priorisation intelligente et notifications.",
      codeUrl: "",
      liveUrl: "",
    },
  ],

  experience: [
    {
      role: "Freelance / Développeur Web",
      company: "Clients divers",
      period: "2024 - 2025",
      bullets: [
        "Création de sites vitrines et dashboards custom pour PME",
        "Intégration paiement et espace client sécurisé",
        "Maintenance + amélioration des perfs (temps de chargement <1s)",
      ],
    },
    {
      role: "Développement & projets perso",
      company: "Indépendant",
      period: "2023 - 2024",
      bullets: [
        "Mise en place d'APIs sécurisées (authentification JWT, rôles, permissions)",
        "Automatisation de tâches répétitives avec scripts Node.js",
        "Exploration d'apps mobiles avec React Native / Expo",
      ],
    },
  ],
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center px-4 py-12 gap-12 font-sans">
      {/* HEADER / HERO */}
      <section className="w-full max-w-5xl grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
            <User className="w-4 h-4" />
            <span>{DATA.location}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {DATA.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-300 font-medium">
            {DATA.role}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
            {DATA.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {/* Contact */}
            <Button
              asChild
              className="rounded-2xl bg-white text-black hover:bg-neutral-200 text-sm font-medium px-4 py-2"
            >
              <a
                href={`mailto:${DATA.email}`}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
              </a>
            </Button>

            {/* GitHub */}
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 text-sm font-medium px-4 py-2"
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

            {/* LinkedIn - vide pour l'instant */}
            {DATA.linkedin && (
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 text-sm font-medium px-4 py-2"
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
        </motion.div>

        {/* TECH STACK CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium">
            <Code2 className="w-4 h-4" />
            <span>Tech stack</span>
          </div>

          <ul className="text-neutral-400 text-sm leading-relaxed grid gap-2">
            {DATA.skills.map((skill, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 translate-y-2" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="w-full max-w-5xl space-y-6">
        <div className="flex items-center gap-2 text-neutral-200">
          <Briefcase className="w-5 h-5 text-neutral-400" />
          <h3 className="text-xl font-semibold">Projets récents</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {DATA.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="bg-neutral-900/40 border border-neutral-800 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold text-white leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mt-2">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-1 rounded-xl border border-neutral-700 bg-neutral-800/60 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 text-sm font-medium">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-300 hover:text-white underline underline-offset-4"
                      >
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-300 hover:text-white underline underline-offset-4"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full max-w-5xl space-y-6">
        <div className="flex items-center gap-2 text-neutral-200">
          <Briefcase className="w-5 h-5 text-neutral-400" />
          <h3 className="text-xl font-semibold">Expérience</h3>
        </div>

        <div className="grid gap-4">
          {DATA.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
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

              <ul className="mt-4 text-neutral-400 text-sm leading-relaxed grid gap-2">
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 translate-y-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="w-full max-w-5xl text-center border-t border-neutral-800 pt-8 mt-8 pb-20">
        <p className="text-neutral-500 text-xs">
          Disponible pour missions freelance 
        </p>
        <a
          href={`mailto:${DATA.email}`}
          className="mt-2 inline-block text-white text-sm font-medium underline underline-offset-4 hover:text-neutral-300"
        >
          {DATA.email}
        </a>
      </footer>
    </main>
  );
}
