import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet the Team | The Dope Company",
  description:
    "Meet the developer and AI tools building products at The Dope Company.",
};

export default function TeamPage() {
  const uniqueMembers = teamMembers.filter(
    (member, index, members) =>
      members.findIndex((candidate) => candidate.image === member.image) === index,
  );

  return (
    <main className="home-shell">
      <SiteHeader />
      <section
        aria-labelledby="team-title"
        className="content-showcase"
      >
        <header className="content-showcase__header">
          <h1
            id="team-title"
            className="content-showcase__title"
          >
            The Dope Team
          </h1>
        </header>
        <div className="content-showcase__cards mx-auto grid w-full max-w-2xl grid-cols-2 gap-3">
          <article className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-(--line) bg-[color-mix(in_srgb,var(--background),var(--foreground)_5%)] p-3 text-left transition-[background-color,border-color,color] duration-300 sm:p-6">
            <div>
              <h2 className="m-0 text-lg font-bold tracking-tight sm:text-2xl">
                <span className="block">Contribute to</span>
                <span className="block">Open source</span>
              </h2>
            </div>
            <a
              className="flex w-full items-center justify-center gap-1.5 rounded-full border border-(--line) bg-foreground px-2 py-2.5 text-xs font-bold text-background transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 sm:w-52 sm:justify-start sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
              href="https://github.com/bucura-art"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" className="size-4 shrink-0 sm:size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.28 3.39 1.62.1-.72.4-1.21.72-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              Contribute
            </a>
          </article>
          <article className="flex items-start rounded-3xl border border-(--line) bg-[color-mix(in_srgb,var(--background),var(--foreground)_5%)] p-3 text-left transition-[background-color,border-color,color] duration-300 sm:p-6">
            <h2 className="m-0 text-lg font-bold leading-snug tracking-tight sm:text-2xl">
              <span className="block">/Designers</span>
              <span className="block">/engineers</span>
              <span className="block">/creatives</span>
              <span className="block">/coders</span>
            </h2>
          </article>
        </div>
        <div className="team-showcase__logos" aria-label="Team member logos">
          {uniqueMembers.map((member, index) => (
            <div className="team-showcase__logo" key={member.image}>
              <Image
                src={member.image}
                alt={`Team member logo ${index + 1}`}
                width={144}
                height={144}
                sizes="(max-width: 640px) 96px, 144px"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
