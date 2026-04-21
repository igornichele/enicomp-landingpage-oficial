import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Globe,
  Smartphone,
  Lock,
  Wrench,
  MessageCircle,
  Palette,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proposta — Site Profissional para seu Negócio",
  description:
    "Site profissional sob medida para pequenos negócios. Criação a partir de R$ 297, domínio .com.br + hospedagem por R$ 59,90/mês. Sem fidelidade.",
  openGraph: {
    title: "Site profissional para o seu negócio — Enicomp",
    description:
      "Criamos, hospedamos e cuidamos do seu site. A partir de R$ 297 — sem fidelidade.",
    url: "https://enicomp.com.br/proposta",
    siteName: "Enicomp",
    images: [
      {
        url: "/og-proposta.png",
        width: 1200,
        height: 630,
        alt: "Enicomp — Site profissional para pequenos negócios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site profissional para o seu negócio — Enicomp",
    description:
      "Criamos, hospedamos e cuidamos do seu site. A partir de R$ 297 — sem fidelidade.",
    images: ["/og-proposta.png"],
  },
};

const features = [
  {
    icon: Palette,
    title: "Site sob medida",
    desc: "Design exclusivo com as cores, fotos e informações do seu negócio. Não é template genérico.",
  },
  {
    icon: Smartphone,
    title: "Funciona em celular",
    desc: "Adaptado para qualquer tela — desktop, tablet ou smartphone.",
  },
  {
    icon: Globe,
    title: "Domínio .com.br próprio",
    desc: "Endereço profissional no seu nome (ex.: suaempresa.com.br). Incluso na mensalidade.",
  },
  {
    icon: Lock,
    title: "Hospedagem segura",
    desc: "Servidor confiável com certificado SSL (cadeado verde). Site sempre no ar, rápido e seguro.",
  },
  {
    icon: Wrench,
    title: "Ajustes sempre que precisar",
    desc: "Mudou o horário, endereço ou cardápio? É só avisar. Atualizamos sem custo extra.",
  },
  {
    icon: MessageCircle,
    title: "Botão de WhatsApp",
    desc: "Seus visitantes chegam direto no seu WhatsApp com um clique. Mais contato, mais venda.",
  },
];

const steps = [
  {
    n: "1",
    title: "Você aprova a demonstração",
    desc: "Mostramos um protótipo do seu site antes de qualquer pagamento. Gostou? Seguimos.",
  },
  {
    n: "2",
    title: "Fazemos o site completo",
    desc: "Em até 5 dias úteis o site está pronto, com domínio .com.br registrado no seu nome.",
  },
  {
    n: "3",
    title: "Você revisa e aprova",
    desc: "Mostramos tudo antes de publicar. Qualquer ajuste é feito sem custo adicional.",
  },
  {
    n: "4",
    title: "Site no ar — e a gente cuida",
    desc: "Publicamos, monitoramos e atualizamos sempre que você precisar. Suporte direto pelo WhatsApp.",
  },
];

export default function PropostaPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* header */}
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
      </header>

      {/* hero */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-16 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300"
        >
          🌐 Presença digital profissional
        </Badge>
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Tenha um site{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            profissional
          </span>{" "}
          em poucos dias
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
          Criamos, hospedamos e cuidamos do seu site. Você foca no que realmente
          importa: atender seus clientes.
        </p>
      </section>

      {/* por que importa */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 px-6 py-5">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Hoje,{" "}
            <span className="font-semibold text-foreground">
              mais de 70% das pessoas pesquisam na internet
            </span>{" "}
            antes de contratar um serviço local. Se o seu negócio não aparece —
            ou aparece mal —, você está perdendo clientes para a concorrência
            todos os dias, mesmo sendo melhor naquilo que faz.
          </p>
        </div>
      </section>

      {/* o que você recebe */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
            O que você recebe
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Tudo incluso, sem surpresa
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="group relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur transition hover:border-fuchsia-500/40 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <CardContent className="relative p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 ring-1 ring-white/10">
                  <f.icon className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h3 className="mb-1.5 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* como funciona */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Como funciona
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Do contato ao site no ar
          </h2>
        </div>
        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-white/10" />
                )}
              </div>
              <div className={`pb-8 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <h3 className="pt-1 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* preço */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Investimento
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Simples e transparente
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {/* criação */}
          <div className="relative overflow-hidden rounded-2xl border border-fuchsia-500/40 bg-fuchsia-500/5 p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl" />
            <Badge className="mb-4 border-fuchsia-500/30 bg-fuchsia-500/20 text-fuchsia-300">
              ✨ Criação
            </Badge>
            <h3 className="mb-1 font-semibold">Criação do site</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                R$ 297
              </span>
              <span className="text-sm text-muted-foreground">à vista</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              ou 6× de R$ 54,09 sem juros
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Site completo personalizado",
                "Design exclusivo para o seu negócio",
                "Versão mobile inclusa",
                "Botão de WhatsApp integrado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* mensal */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <Badge
              variant="outline"
              className="mb-4 border-white/20 text-muted-foreground"
            >
              📆 Mensal
            </Badge>
            <h3 className="mb-1 font-semibold">Manutenção mensal</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                R$ 59,90
              </span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">&nbsp;</p>
            <ul className="mt-5 space-y-2">
              {[
                "Domínio .com.br próprio",
                "Hospedagem segura com SSL",
                "Atualizações de conteúdo ilimitadas",
                "Suporte via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* sem fidelidade */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4">
          <span className="text-xl">✌️</span>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Sem fidelidade, sem letras miúdas.
            </span>{" "}
            Você cancela quando quiser, sem multa e sem burocracia. O domínio e
            o conteúdo são seus — sempre.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-600/20 via-purple-600/20 to-cyan-600/20 p-8 text-center ring-1 ring-white/10">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Pronto para colocar seu negócio online?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Fale agora pelo WhatsApp e receba a demonstração do seu site
            gratuitamente.
          </p>
          <a
            href="https://wa.me/5541936183386"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:from-fuchsia-400 hover:to-purple-500"
          >
            📲 Falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* footer */}
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
          </p>
        </div>
      </footer>
    </main>
  );
}
