import { Hono } from "hono";

const about = new Hono();

//GET /about
about.get("/", (c) =>
  c.render(
    <h1 hx-get="/" hx-swap="outerHTML">
      This is the About Page
    </h1>
  )
);

export default about;
