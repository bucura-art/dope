import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Partners | The Dope Company",
  description: "Partners at The Dope Company.",
};

export default function PartnersPage() {
  return (
    <main className="home-shell">
      <SiteHeader />
      <section
        aria-labelledby="partners-title"
        className="content-showcase"
      >
        <header className="content-showcase__header">
          <h1
            id="partners-title"
            className="content-showcase__title"
          >
            The Dope Partners
          </h1>
        </header>
        <div className="content-showcase__cards mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 text-left">
          <article className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-(--line) bg-[color-mix(in_srgb,var(--background),var(--foreground)_5%)] p-3 transition-[background-color,border-color,color] duration-300 sm:p-6">
            <h2 className="m-0 text-lg font-bold tracking-tight sm:text-2xl">
              <span className="block">Support</span>
              <span className="block">Our</span>
              <span className="block">mission</span>
            </h2>
            <button
              className="flex w-full items-center justify-center gap-1.5 rounded-full border border-(--line) bg-foreground px-2 py-2.5 text-xs font-bold text-background transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 sm:w-52 sm:justify-start sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
              type="button"
            >
              <svg aria-hidden="true" className="size-4 shrink-0 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18M5 17l5-5 3 3 6-7" />
                <path d="M15 8h4v4" />
              </svg>
              Invest
            </button>
          </article>
          <article className="flex items-start rounded-3xl border border-(--line) bg-[color-mix(in_srgb,var(--background),var(--foreground)_5%)] p-3 transition-[background-color,border-color,color] duration-300 sm:p-6">
            <h2 className="m-0 text-lg font-bold leading-snug tracking-tight sm:text-2xl">
              <span className="block">/Marketing</span>
              <span className="block">/Hosting</span>
              <span className="block">/Scaling</span>
              <span className="block">/Startup</span>
              <span className="block">/Funding</span>
            </h2>
          </article>
        </div>
      </section>
    </main>
  );
}
