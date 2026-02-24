import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refinamento de Técnica - by Vanuza Aires | Curso Presencial de Nail Design",
  description:
    "Curso presencial exclusivo de refinamento técnico para profissionais da área de unhas. Alto nível de acabamento, mais segurança, mais lucro. Harrison, NJ.",
  keywords: [
    "curso de unhas",
    "nail design",
    "refinamento de técnica",
    "vanuza aires",
    "curso presencial",
    "manicure profissional",
    "alongamento de unhas",
    "fibra de vidro",
    "cutícula combinada",
    "Harrison NJ",
    "New Jersey",
  ],
  authors: [{ name: "Vanuza Aires" }],
  creator: "Vanuza Aires",
  publisher: "Aires Nails and Academy",
  metadataBase: new URL("https://vanuzaaires.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Refinamento de Técnica - by Vanuza Aires",
    description:
      "Curso presencial exclusivo de refinamento técnico para profissionais da área de unhas. Alto nível de acabamento, mais segurança, mais lucro.",
    url: "https://vanuzaaires.com",
    siteName: "Refinamento de Técnica - Vanuza Aires",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Refinamento de Técnica - Curso de Nail Design by Vanuza Aires",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refinamento de Técnica - by Vanuza Aires",
    description:
      "Curso presencial exclusivo de refinamento técnico para profissionais da área de unhas. Alto nível de acabamento, mais segurança, mais lucro.",
    images: ["/og-image.webp"],
    creator: "@vanuzaaires",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Substituir com código real do Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
