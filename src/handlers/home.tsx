import { Hono } from "hono";
import Navbar from "../components/Navbar";
import Hero from "components/Hero";

export const home = new Hono<Env>();

//GET /
home.get((c) => {
  return c.render(
    <>
      <Navbar />
      <Hero />
    </>,
    {
      pageTitle: "Home",
    }
  );
});

home.get("/about", (c) => {
	return c.render(
		<>
			<Navbar />
			<h1>yoo</h1>
		</>,
		{ pageTitle: "About" }
	);
});
