import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://enicomp.com.br";
const SITE_NAME = "Enicomp";
const SITE_TITLE = "Enicomp — Soluções em Tecnologia";
const SITE_DESCRIPTION =
  "Empresa de tecnologia especializada em desenvolvimento de sistemas web, aplicativos mobile (iOS, Android, React Native) e automações com inteligência artificial. Integrações, dashboards e infraestrutura em nuvem.";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Enicomp",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "Enicomp",
    "soluções em tecnologia",
    "desenvolvimento de software",
    "sistemas web",
    "aplicativos mobile",
    "iOS",
    "Android",
    "React Native",
    "Swift",
    "Kotlin",
    "Next.js",
    "React",
    "Ruby on Rails",
    "automação com IA",
    "inteligência artificial",
    "integrações de sistemas",
    "APIs",
    "dashboards",
    "BI",
    "infraestrutura cloud",
    "AWS",
    "GCP",
    "engenharia de software",
    "Brasil",
  ],
  authors: [{ name: "Enicomp" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Enicomp — Soluções em Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              legalName: "Enicomp Soluções em Tecnologia",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description: SITE_DESCRIPTION,
              areaServed: "BR",
              sameAs: [],
              knowsAbout: [
                "Desenvolvimento de Software",
                "Sistemas Web",
                "Aplicativos Mobile iOS",
                "Aplicativos Mobile Android",
                "React Native",
                "Inteligência Artificial",
                "Automação de Processos",
                "Integração de Sistemas",
                "Dashboards e BI",
                "Infraestrutura Cloud",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              inLanguage: "pt-BR",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
