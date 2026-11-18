"use client";

import { useState } from "react";
import {
  Terminal,
  Cpu,
  Database,
  Code2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Layers,
  Eye,
  Server,
  Smartphone,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Lock,
  ShieldCheck,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type Lang = "en" | "pt";
type Category = "all" | "genai" | "vision" | "fullstack";

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const content = {
    en: {
      role: "AI & Machine Learning Engineer | Computer Vision & Full-Stack Systems",
      headline:
        "Designing, training, and deploying end-to-end Machine Learning, Computer Vision, and Full-Stack architectures.",
      subheadline:
        "AI and Software Engineer with a proven track record in building deep learning pipelines (PyTorch, YOLOv8, OpenCV, Scikit-Learn) combined with scalable APIs and web platforms (Python, FastAPI, TypeScript, Next.js, PostgreSQL, Supabase, Docker) for clinical diagnostics, biometric vision, and enterprise automation.",
      available: "Available for International Remote Roles",
      location: "Uberlândia, Brazil",
      ctaProjects: "Explore Projects",
      ctaExperience: "Work Experience",
      privateBadge: "Private Research (GRVA-UFU)",
      sections: {
        projects: "Featured Engineering & Research Projects",
        skills: "Technical Skills & Stack",
        experience: "Professional Experience",
        education: "Education & Languages",
      },
      filters: {
        all: "All Systems",
        genai: "GenAI & LLMs",
        vision: "Computer Vision & ML",
        fullstack: "Full-Stack & Automation",
      },
      experienceList: [
        {
          title: "AI Researcher & Software Developer",
          org: "GRVA-UFU (Virtual & Augmented Reality Group)",
          period: "Jan 2024 — Present",
          location: "Brazil",
          bullets: [
            "Medical Imaging AI: Developed a clinical breast cancer pre-diagnosis application using YOLOv8, Scikit-Learn, and Streamlit for mammography analysis, achieving 86% diagnostic accuracy.",
            "Predictive Modeling: Optimized Decision Tree ensembles to calculate the probability of malignant vs. benign tumors, automating diagnostic reports for clinicians.",
            "Clinical NLP & Data Analysis: Built a Python and Scikit-Learn evaluation assistant based on DSM-5 criteria alongside statistical pipelines for mental health indicators.",
            "Biometric Computer Vision: Implemented real-time multi-face detection and identity verification in Python using OpenCV, Haar Cascades, and LBPH on live video streams.",
          ],
        },
        {
          title: "IT Systems & Automation Engineer",
          org: "Colégio Ann Mackenzie",
          period: "Jan 2026 — Present",
          location: "Brazil",
          bullets: [
            "Full-Stack Service Desk: Engineered an IT help desk and asset management platform (Next.js, React Native, Supabase) integrated with PowerShell scripts, reducing ticket resolution time by 60%.",
            "AI Workflow Automation: Developed an automated campus visitor management system integrating Python, Streamlit, Supabase, and the Google Gemini API.",
            "Network Infrastructure & Security: Managed enterprise networks, FortiGate firewall security policies, Git-versioned automation routines, and high-availability campus systems.",
          ],
        },
        {
          title: "Data Operations & Administrative Assistant",
          org: "Ultra Popular",
          period: "2023 — 2026",
          location: "Brazil",
          bullets: [
            "Data & Inventory Analysis: Managed large-scale product inventory databases, demand forecasting models, and structured financial tracking workflows using advanced Excel.",
          ],
        },
      ],
      education: {
        degree: "B.Sc. in Computer Science — Emphasis in AI & Computer Vision",
        institution: "UNITRI — Uberlândia, Brazil",
        period: "Expected Dec 2026",
        languagesTitle: "Languages",
        languagesDesc: "English (Fluent Professional) | Portuguese (Native)",
      },
    },
    pt: {
      role: "Engenheiro de IA & Machine Learning | Visão Computacional & Sistemas Full-Stack",
      headline:
        "Projetando, treinando e implantando soluções de ponta a ponta em Machine Learning, Visão Computacional e Full-Stack.",
      subheadline:
        "Engenheiro de IA e Software com histórico comprovado na construção de pipelines de deep learning (PyTorch, YOLOv8, OpenCV, Scikit-Learn) combinados com APIs escaláveis e plataformas web (Python, FastAPI, TypeScript, Next.js, PostgreSQL, Supabase, Docker) voltados para diagnósticos clínicos, visão biométrica e automação corporativa.",
      available: "Disponível para Vagas Remotas Internacionais e Nacionais",
      location: "Uberlândia, Brasil",
      ctaProjects: "Ver Projetos",
      ctaExperience: "Experiência Profissional",
      privateBadge: "Pesquisa Privada (GRVA-UFU)",
      sections: {
        projects: "Projetos de Engenharia & Pesquisa",
        skills: "Habilidades Técnicas",
        experience: "Experiência Profissional",
        education: "Educação & Idiomas",
      },
      filters: {
        all: "Todos os Sistemas",
        genai: "IA Generativa & LLMs",
        vision: "Visão Computacional & ML",
        fullstack: "Full-Stack & Automação",
      },
      experienceList: [
        {
          title: "Pesquisador de IA & Desenvolvedor de Software",
          org: "GRVA-UFU",
          period: "Jan 2024 — Presente",
          location: "Brasil",
          bullets: [
            "IA em Imagens Médicas: Desenvolvimento de um aplicativo clínico de pré-diagnóstico de câncer de mama utilizando YOLOv8, Scikit-Learn e Streamlit para análise de mamografias, alcançando 86% de apuração certa.",
            "Modelagem Preditiva: Otimização de conjuntos de árvores de decisão para calcular a probabilidade de tumores malignos vs. benignos, automatizando relatórios diagnósticos para clínicos.",
            "PLN Clínico & Análise de Dados: Construção de um assistente de avaliação em Python e Scikit-Learn baseado nos critérios do DSM-5, além de pipelines estatísticos para indicadores de saúde mental.",
            "Visão Computacional Biométrica: Implementação de detecção multi-face em tempo real e verificação de identidade em Python utilizando OpenCV, Haar Cascades e LBPH em fluxos de vídeo ao vivo.",
          ],
        },
        {
          title: "Engenheiro de Sistemas de TI & Automação",
          org: "Colégio Ann Mackenzie",
          period: "Jan 2026 — Presente",
          location: "Brasil",
          bullets: [
            "Central de Serviços Full-Stack: Criação de uma plataforma de help desk de TI e gestão de ativos (Next.js, React Native, Supabase) integrada a scripts em PowerShell, reduzindo o tempo de resolução de chamados em 60%.",
            "Automação de Fluxos com IA: Desenvolvimento de um sistema automatizado de gestão de visitantes no campus, integrando Python, Streamlit, Supabase e a API do Google Gemini.",
            "Infraestrutura de Rede & Segurança: Gerenciamento de redes corporativas, políticas de segurança de firewall FortiGate, rotinas de automação versionadas em Git e sistemas de alta disponibilidade para o campus.",
          ],
        },
        {
          title: "Operações de Dados & Assistente Administrativo",
          org: "Ultra Popular",
          period: "2023 — 2026",
          location: "Brasil",
          bullets: [
            "Análise de Dados & Estoque: Gestão de grandes bases de dados de estoque de produtos, modelos de previsão de demanda e fluxos estruturados de acompanhamento financeiro utilizando Excel avançado.",
          ],
        },
      ],
      education: {
        degree: "Bacharelado em Ciência da Computação | Ênfase em IA & Visão Computacional",
        institution: "UNITRI — Uberlândia, Brasil",
        period: "Previsto para Dez 2026",
        languagesTitle: "Idiomas",
        languagesDesc: "Inglês (Profissional Fluente) | Português (Nativo)",
      },
    },
  };

  const projects = [
    {
      id: "rag",
      category: "genai" as Category,
      icon: Database,
      title: {
        en: "Enterprise RAG Knowledge Base",
        pt: "Base de Conhecimento RAG Vetorial",
      },
      description: {
        en: "End-to-end Retrieval-Augmented Generation pipeline that ingests technical PDFs, generates 768-d embeddings via Google Gemini, and executes in-database cosine similarity searches on Supabase pgvector with exact page citations.",
        pt: "Sistema RAG completo que processa PDFs técnicos, gera embeddings de 768 dimensões com Google Gemini e executa busca semântica por similaridade de cosseno no Supabase (pgvector) com citação exata de páginas.",
      },
      tech: ["Python", "LangChain", "Supabase pgvector", "Gemini API", "Streamlit"],
      github: "https://github.com/izak1404",
      live: "",
      isPrivate: false,
    },
    {
      id: "triage",
      category: "genai" as Category,
      icon: Cpu,
      title: {
        en: "AI Incident & Triage Engine (Structured Outputs)",
        pt: "Motor de Triagem Técnica com IA (Structured Outputs)",
      },
      description: {
        en: "Full-stack AI application transforming unstructured server logs and support tickets into strictly typed JSON diagnostics using Gemini Schema enforcement, fault-tolerant model routing, and MongoDB Atlas NoSQL persistence.",
        pt: "Aplicação full-stack de IA que converte logs de servidores e chamados em diagnósticos JSON estritamente tipados via Gemini Schema, com roteamento tolerante a falhas e persistência NoSQL no MongoDB Atlas.",
      },
      tech: ["Next.js", "TypeScript", "Gemini Schema", "MongoDB Atlas", "Tailwind CSS"],
      github: "https://github.com/izak1404/ai-incident-triage-nextjs",
      live: "",
      isPrivate: false,
    },
    {
      id: "vision",
      category: "vision" as Category,
      icon: Eye,
      title: {
        en: "Real-Time Computer Vision API (YOLOv8)",
        pt: "Microsserviço REST de Visão Computacional (YOLOv8)",
      },
      description: {
        en: "Containerized FastAPI microservice powered by Ultralytics YOLOv8 Nano and OpenCV Headless. Delivers low-latency CPU object detection with Pydantic-validated bounding box coordinates and real-time image annotation.",
        pt: "Microsserviço containerizado em FastAPI com Ultralytics YOLOv8 Nano e OpenCV Headless. Entrega detecção de objetos de baixa latência em CPU com validação Pydantic e anotação visual em tempo real.",
      },
      tech: ["FastAPI", "YOLOv8", "OpenCV", "Docker", "Pydantic"],
      github: "https://github.com/izak1404",
      live: "",
      isPrivate: false,
    },
    {
      id: "medical-ml",
      category: "vision" as Category,
      icon: Server,
      title: {
        en: "Clinical Breast Cancer Pre-Diagnosis System (86% Accuracy)",
        pt: "Sistema Clínico de Pré-Diagnóstico de Câncer de Mama (86% Acurácia)",
      },
      description: {
        en: "Medical imaging AI developed at GRVA-UFU combining YOLOv8 mammography analysis with optimized Scikit-Learn Decision Tree ensembles and Streamlit to calculate malignant vs. benign tumor probabilities and automate clinical reports.",
        pt: "Aplicação clínica desenvolvida no GRVA-UFU combinando análise de mamografias via YOLOv8 com árvores de decisão no Scikit-Learn e Streamlit para calcular probabilidades de tumores malignos vs. benignos com 86% de acerto.",
      },
      tech: ["Python", "YOLOv8", "Scikit-Learn", "Decision Trees", "Streamlit"],
      github: "",
      live: "",
      isPrivate: true,
    },
    {
      id: "ticketing",
      category: "fullstack" as Category,
      icon: Smartphone,
      title: {
        en: "Full-Stack IT Service Desk & Asset Management",
        pt: "Plataforma Full-Stack de Help Desk & Gestão de Ativos",
      },
      description: {
        en: "Multi-platform enterprise system comprising a Next.js web portal and an Expo React Native mobile app backed by Supabase PostgreSQL and PowerShell automation, reducing ticket resolution time by 60%.",
        pt: "Ecossistema multiplataforma composto por portal web em Next.js e app mobile em React Native (Expo) integrado ao Supabase PostgreSQL e scripts PowerShell, reduzindo o tempo de resolução de chamados em 60%.",
      },
      tech: ["Next.js", "React Native (Expo)", "Supabase", "PowerShell", "TypeScript"],
      github: "https://github.com/izak1404",
      live: "https://chamados-ruby.vercel.app",
      isPrivate: false,
    },
    {
      id: "biometrics",
      category: "vision" as Category,
      icon: ShieldCheck,
      title: {
        en: "Biometric Multi-Face Recognition & Campus AI Automation",
        pt: "Reconhecimento Facial Biométrico & Automação com IA",
      },
      description: {
        en: "Real-time multi-face detection and identity verification pipeline using Python, OpenCV, Haar Cascades, and LBPH on live video streams, alongside an AI-powered campus visitor assistant built with Gemini API and Supabase.",
        pt: "Pipeline de detecção multi-face em tempo real e verificação de identidade em vídeo ao vivo com OpenCV, Haar Cascades e LBPH, aliado a um sistema automatizado de gestão de visitantes com Gemini API e Supabase.",
      },
      tech: ["Python", "OpenCV", "LBPH", "Haar Cascades", "Gemini API", "Supabase"],
      github: "https://github.com/izak1404",
      live: "",
      isPrivate: false,
    },
  ];

  const skillGroups = [
    {
      title: lang === "en" ? "AI & Computer Vision" : "IA & Visão Computacional",
      icon: Cpu,
      items: [
        "PyTorch & Deep Learning",
        "Ultralytics YOLOv8 & Object Detection",
        "OpenCV & Biometric Facial Recognition (LBPH)",
        "Scikit-Learn & Decision Tree Ensembles",
        "Predictive Modeling & Clinical NLP (DSM-5)",
        "Google Gemini API, LangChain & RAG",
      ],
    },
    {
      title: "Backend & Full-Stack",
      icon: Code2,
      items: [
        "Python (FastAPI, Streamlit)",
        "TypeScript & JavaScript",
        "Next.js (App Router) & React",
        "React Native (Expo)",
        "RESTful APIs & Prisma ORM",
        "Tailwind CSS",
      ],
    },
    {
      title: lang === "en" ? "Data, Cloud & MLOps" : "Dados, Nuvem & MLOps",
      icon: Database,
      items: [
        "PostgreSQL & Supabase (pgvector)",
        "MongoDB Atlas (NoSQL)",
        "Docker & Containerization",
        "AWS, Vercel & CI/CD Pipelines",
        "PowerShell Automation & Git/GitHub",
        "Linux/Windows Servers & FortiGate Security",
      ],
    },
  ];

  const t = content[lang];
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-500/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg">
              <Terminal className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-semibold tracking-tight text-sm md:text-base">
              Izak Vasconcelos Pinheiro
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/izak1404"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition p-2"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/izak-pinheiro-a778b425a"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition p-2"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:izak.v.pinheiro2005@gmail.com"
              className="text-neutral-400 hover:text-white transition p-2"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="flex items-center gap-1.5 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-md transition"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === "en" ? "EN / PT" : "PT / EN"}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-14 space-y-24">
        {/* Hero Section */}
        <section className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.available}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold">
              {t.role}
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.headline}
            </h1>
          </div>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">{t.subheadline}</p>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-1">
            <a
              href="mailto:izak.v.pinheiro2005@gmail.com"
              className="flex items-center gap-1.5 hover:text-neutral-200 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>izak.v.pinheiro2005@gmail.com</span>
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="tel:+5538998665531"
              className="flex items-center gap-1.5 hover:text-neutral-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+55 (38) 99866-5531</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
            >
              <span>{t.ctaProjects}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-sm font-medium px-5 py-2.5 rounded-lg transition"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>{t.ctaExperience}</span>
            </a>
            <a
              href="https://linkedin.com/in/izak-pinheiro-a778b425a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-sm font-medium px-4 py-2.5 rounded-lg transition"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/izak1404"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-sm font-medium px-4 py-2.5 rounded-lg transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>{t.sections.projects}</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {(["all", "genai", "vision", "fullstack"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-md border transition ${
                    activeCategory === cat
                      ? "bg-blue-600/15 border-blue-500/50 text-blue-300 font-medium"
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {t.filters[cat]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-neutral-900/50 border border-neutral-800/90 hover:border-neutral-700 rounded-xl p-6 flex flex-col justify-between space-y-6 transition"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-2.5 bg-neutral-950 border border-neutral-800 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        {project.isPrivate && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                            <Lock className="w-3 h-3" />
                            <span>{t.privateBadge}</span>
                          </span>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-400 hover:text-white p-1.5 bg-neutral-950 border border-neutral-800 rounded-md transition"
                            title="Live Deployment"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-400 hover:text-white p-1.5 bg-neutral-950 border border-neutral-800 rounded-md transition"
                            title="Source Code"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-white">{project.title[lang]}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{project.description[lang]}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/60">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono bg-neutral-950 text-neutral-300 border border-neutral-800 px-2.5 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="border-b border-neutral-800 pb-4">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span>{t.sections.experience}</span>
            </h2>
          </div>

          <div className="space-y-6">
            {t.experienceList.map((exp, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm font-medium text-blue-400">{exp.org}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="font-mono bg-neutral-950 border border-neutral-800 px-2.5 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-neutral-300 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="space-y-8">
          <div className="border-b border-neutral-800 pb-4">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>{t.sections.skills}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-blue-400" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((skill) => (
                      <li key={skill} className="text-sm text-neutral-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education & Languages Section */}
        <section className="space-y-8">
          <div className="border-b border-neutral-800 pb-4">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span>{t.sections.education}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-blue-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  {t.education.institution}
                </span>
                <span className="font-mono bg-neutral-950 border border-neutral-800 px-2.5 py-0.5 rounded">
                  {t.education.period}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white pt-1">{t.education.degree}</h3>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400">
                <Globe className="w-4 h-4" />
                <span>{t.education.languagesTitle}</span>
              </div>
              <h3 className="text-base font-semibold text-white pt-1">{t.education.languagesDesc}</h3>
            </div>
          </div>
        </section>
      </main>

     {/* Footer */}
      <footer className="border-t border-neutral-800/80 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>
            © 2026 Izak Vasconcelos Pinheiro. Built with Next.js, TypeScript & Tailwind CSS.
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:izak.v.pinheiro2005@gmail.com" className="hover:text-neutral-300 transition">
              izak.v.pinheiro2005@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/izak-pinheiro-a778b425a"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/izak1404"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition"
            >
              github.com/izak1404
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}