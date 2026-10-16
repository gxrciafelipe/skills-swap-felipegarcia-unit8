const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Browse Skills", href: "#skills" },
  { label: "Offer Skills", href: "#" },
  { label: "About", href: "#" },
];

function Header() {
  return (
    <header>
      <h1 className="site-name">Skill Swap</h1>
      <nav aria-label="Main navigation">
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={link.active ? "active" : ""}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
