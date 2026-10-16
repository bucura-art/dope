import Link from "next/link";

const navigation = [
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link
          className="site-wordmark"
          href="/"
          aria-label="The Dope Company home"
        >
          the dope<br />company
        </Link>

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
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
