import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Careers | The Dope Company",
  description: "Careers at The Dope Company.",
};

export default function CareersPage() {
  return (
    <main className="home-shell">
      <SiteHeader />
      <section
        aria-labelledby="careers-title"
        style={{
          display: "grid",
          flex: 1,
          placeItems: "center",
          padding: "48px 24px 96px",
          textAlign: "center",
        }}
      >
        <h1
          id="careers-title"
          style={{
            margin: 0,
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 750,
            letterSpacing: "-0.075em",
            lineHeight: 0.95,
          }}
        >
          Careers
        </h1>
      </section>
    </main>
  );
}
