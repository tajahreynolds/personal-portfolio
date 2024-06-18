import { Hono } from "hono";
import Hero from "components/Hero";
import Projects from "components/Projects";

export const home = new Hono<Env>();

//GET /
home.get((c) => {
  return c.render(
    <>
      <Hero header="Turning Ideas into Reality" />
      <Projects />
    </>,
    {
      pageTitle: "Home",
    }
  );
});

home.get("/about", (c) => {
  return c.render(
    <>
      <h1>yoo</h1>
    </>,
    { pageTitle: "About" }
  );
});
