import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Lilaas | Premium Marine Control Systems and Precision Mechanics",
  description:
    "Lilaas delivers premium marine control units, thruster control systems and precision mechanics for OEM, shipyard and offshore programs.",
  keywords: [
    "marine control systems",
    "thruster control",
    "control levers",
    "joystick marine",
    "precision mechanics",
    "offshore control systems",
    "Lilaas"
  ],
  openGraph: {
    title: "Lilaas | Premium Marine Control Systems",
    description:
      "Engineering-led marine control systems for critical vessel operations, from concept through commissioning and support.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="party-mode">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <AnalyticsPageview />
        <div className="party-overlay" aria-hidden>
          <div className="disco-ball">
            <span className="disco-core" />
          </div>
          <span className="disco-ray disco-ray-a" />
          <span className="disco-ray disco-ray-b" />
          <span className="disco-ray disco-ray-c" />
          <span className="disco-spark disco-spark-a" />
          <span className="disco-spark disco-spark-b" />
          <span className="disco-spark disco-spark-c" />
          <span className="disco-spark disco-spark-d" />
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
