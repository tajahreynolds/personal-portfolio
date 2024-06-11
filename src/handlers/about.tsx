import { Hono } from "hono";
const about = new Hono<Env>();

//GET /about
about.get("/", (c) => {
  c.set('pageTitle', "About");
  return c.render(<h1>yoo</h1>, { pageTitle: "About" });
});

export default about;
