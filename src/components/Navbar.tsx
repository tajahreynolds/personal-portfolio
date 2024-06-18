import type { HtmlEscapedString } from "hono/utils/html";
import githubIcon from "../../static/icons/github-icon-white-24";
import linkedinIcon from "../../static/icons/linkedin-icon-white-24";

export default function Navbar() {
  return (
    <div id="navContainer">
      <nav>
        {/* <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" /> */}
        <NavIcon
          href="https://linkedin.com/in/tajahreynolds"
          icon={linkedinIcon}
        />
        <h2
          style="margin: 0; cursor: pointer;"
          hx-get="/"
          hx-target="#root"
          hx-push-url="true"
        >
          TaJah Reynolds
        </h2>
        <NavIcon href="https://github.com/tajahreynolds" icon={githubIcon} />
      </nav>
    </div>
  );
}

// interface NavLinkProps {
//   href: string;
//   label: string;
// }

// function NavLink({ href, label }: NavLinkProps) {
// 	return (
// 		<a hx-boost="true" href={href}>
// 			{label}
// 		</a>
// 	);
// }

interface NavIconProps {
  href: string;
  icon: HtmlEscapedString | Promise<HtmlEscapedString>;
}

function NavIcon({ href, icon }: NavIconProps) {
  return (
    <a target="_blank" href={href}>
      {icon}
    </a>
  );
}
