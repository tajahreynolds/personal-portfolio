import Hero from "components/Hero";
import Projects from "components/Projects";
import { Hono } from "hono";

export const projects = new Hono();

projects.get("/", (c) =>
  c.render(
    <>
      <Hero header="Check Out What I Built" />
      <Projects />
    </>,
    { pageTitle: "Projects" }
  )
);

projects.get("/disbound", (c) =>
  c.render(<Hero header="Dissolving Boundaries" />, {
    pageTitle: "Disbound",
  })
);

projects.get("/apoc", (c) =>
  c.render(<Hero header="Apocalyptic Gaming Network" />, { pageTitle: "APOC" })
);

projects.get("/consulting", (c) =>
  c.render(<Hero header="Cultivating Online Growth" />, {
    pageTitle: "Consulting",
  })
);
