import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { PageTransition } from "@/components/layout/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metricus.vercel.app"),
  title: {
    default: "MetricUS | SI Advocacy in the United States",
    template: "%s | MetricUS",
  },
  description:
    "MetricUS is an interactive platform advocating practical SI (metric) adoption in the United States through education, history, and action tools.",
  openGraph: {
    title: "MetricUS",
    description:
      "An interactive advocacy and education platform promoting SI adoption in the United States.",
    url: "https://metricus.vercel.app",
    siteName: "MetricUS",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(bodyFont.variable, displayFont.variable, "font-sans")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <PageTransition>
            <main className="pb-16 pt-8 sm:pt-10">{children}</main>
          </PageTransition>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

