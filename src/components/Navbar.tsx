import type { HtmlEscapedString } from "hono/utils/html";
import githubIcon from "../../static/icons/github-icon-white-24";
import linkedinIcon from "../../static/icons/linkedin-icon-white-24";

export default function Navbar() {
  return (
    <nav>
      {/* <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About" /> */}
      <NavIcon
        href="https://linkedin.com/in/tajahreynolds"
        icon={linkedinIcon}
      />
      <h2 style="margin: 0">TaJah Reynolds</h2>
      <NavIcon href="https://github.com/tajahreynolds" icon={githubIcon} />
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

interface NavIconProps {
  href: string;
  icon: HtmlEscapedString | Promise<HtmlEscapedString>;
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <a hx-boost="true" href={href}>
      {label}
    </a>
  );
}

function NavIcon({ href, icon }: NavIconProps) {
  return (
    <a target="_blank" href={href}>
      {icon}
    </a>
  );
}
