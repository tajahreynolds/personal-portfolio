import { Hono } from "hono";
const about = new Hono();

//GET /about
about.get("/", (c) => c.render(<h1>yoo</h1>));

export default about;
