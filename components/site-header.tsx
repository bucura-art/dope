"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";

const navigation = [
  { label: "Team", href: "/team" },
  //{ label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-left">
        <div className="header-brand">
          <Link className="site-logo" href="/" aria-label="The Dope Company home">
            <Image src="/brand/dope-logo.png" alt="" width={48} height={48} priority />
          </Link>
          <Link className="site-wordmark" href="/" aria-label="The Dope Company home">
            the dope<br />company
          </Link>
        </div>
      </div>
      <ThemeToggle>
        <nav
          className="primary-navigation"
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              className="navigation-link"
              href={item.href}
              key={item.label}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </ThemeToggle>
    </header>
  );
}
