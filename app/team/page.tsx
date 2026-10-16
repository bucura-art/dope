import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import TeamMember from "@/components/team-member";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet the Team | The Dope Company",
  description:
    "Meet the developer and AI tools building products at The Dope Company.",
};

export default function TeamPage() {
  return (
    <main className="home-shell">
      <SiteHeader />
      <section
        aria-labelledby="team-title"
        style={{
          width: "min(100% - 48px, 1120px)",
          flex: 1,
          margin: "0 auto",
          padding: "clamp(56px, 10vh, 104px) 0 80px",
        }}
      >
        <header style={{ marginBottom: "clamp(32px, 6vw, 64px)", textAlign: "center" }}>
          <h1
            id="team-title"
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 76px)",
              fontWeight: 750,
              letterSpacing: "-0.065em",
              lineHeight: 0.95,
            }}
          >
            Meet the Team
          </h1>
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 18,
          }}
        >
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
