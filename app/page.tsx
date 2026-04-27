import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Code2,
  Cpu,
  Database,
  LineChart,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sistemas Web Sob Medida",
    desc: "Aplicações rápidas e escaláveis em Next.js, React e Rails — do MVP ao produto em produção.",
  },
  {
    icon: Bot,
    title: "Automação com IA",
    desc: "Agentes inteligentes aplicados a prospecção, atendimento e operações repetitivas.",
  },
  {
    icon: Workflow,
    title: "Integrações & APIs",
    desc: "Conexão entre sistemas: CRM, ERP, WhatsApp, pagamentos e qualquer API de negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Aplicativos nativos para iOS (Swift) e Android (Kotlin) e soluções cross-platform em React Native — performance, UX fluida e integração total com o backend.",
  },
  {
    icon: LineChart,
    title: "Dashboards & BI",
    desc: "Visualização de dados em tempo real pra decisões rápidas e embasadas.",
  },
  {
    icon: Database,
    title: "Infraestrutura Cloud",
    desc: "Deploy, monitoramento e escalabilidade em GCP, AWS e Vercel — com segurança e performance.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-branca.png"
            alt="Enicomp"
            width={400}
            height={120}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#expertise" className="transition hover:text-foreground">
            Expertise
          </a>
          <a href="#sobre" className="transition hover:text-foreground">
            Sobre
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
        <Badge
          variant="outline"
          className="mb-6 border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300"
        >
          <Sparkles className="mr-1 h-3 w-3" /> Soluções em Tecnologia
        </Badge>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Tecnologia que{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            resolve
          </span>{" "}
          problemas reais.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          A Enicomp é uma empresa de tecnologia especializada em
          desenvolvimento de sistemas web, aplicativos mobile e automações com
          inteligência artificial.
        </p>

      </section>

      <section id="expertise" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
          >
            <Zap className="mr-1 h-3 w-3" /> Áreas de expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Conhecimento aplicado, ponta a ponta.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Competências acumuladas em mais de uma década desenvolvendo
            produtos digitais em ambientes de alta exigência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur transition hover:border-fuchsia-500/40 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <CardContent className="relative p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 ring-1 ring-white/10">
                  <s.icon className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-purple-500/30 bg-purple-500/10 text-purple-300"
            >
              <Cpu className="mr-1 h-3 w-3" /> Sobre a Enicomp
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Engenharia moderna, foco em resultado.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A Enicomp une engenharia de software moderna com inteligência
              artificial aplicada. Nossa atuação combina desenvolvimento
              full-stack, automação de processos e infraestrutura em nuvem pra
              entregar soluções completas.
            </p>
            <p className="mt-4 text-muted-foreground">
              Atuamos com um princípio simples: tecnologia só tem valor quando
              resolve um problema de negócio de verdade. Nosso foco é qualidade
              técnica, clareza de comunicação e entregas que realmente fazem
              diferença na operação.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "React Native",
                "Swift",
                "Kotlin",
                "Rails",
                "Python",
                "TypeScript",
                "IA / LLMs",
                "GCP",
                "AWS",
                "Vercel",
                "PostgreSQL",
              ].map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-white/5 text-muted-foreground"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-500/30 blur-3xl" />
            <Image
              src="/logo-branca.png"
              alt="Enicomp logo"
              width={500}
              height={500}
              className="mx-auto h-auto w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <Image
            src="/logo-branca.png"
            alt="Enicomp"
            width={240}
            height={72}
            className="h-10 w-auto opacity-80"
          />
          <p>
            © {new Date().getFullYear()} Enicomp — Soluções em Tecnologia.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
