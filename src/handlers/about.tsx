import Navbar from "components/Navbar";
import { Hono } from "hono";
const about = new Hono<Env>();

//GET /about
about.get("/", (c) => {
  return c.render(
    <>
      <Navbar />
      <h1>yoo</h1>
    </>,
    { pageTitle: "About" }
  );
});

export default about;
