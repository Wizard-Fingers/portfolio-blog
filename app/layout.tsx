import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import TransitionProvider from "@/components/transition-provider";

export const metadata: Metadata = {
  title: "Art Beckett",
  description: "I'm a Full Stack Developer",
  metadataBase: new URL(process.env.Next_PUBLIC_SITE_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1419" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body className={cn("min-h-screen bg-brandCol1 dark:bg-brandCol2")}>
        <Providers>
          <div className="relative flex min-h-dvh flex-col">
            <TransitionProvider>
              <SiteHeader />

              <main className="flex-1 pt-[4rem]">{children}</main>

              <SiteFooter />
            </TransitionProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
