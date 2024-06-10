import { Hono } from "hono";
import AboutPage from "pages/AboutPage";
const about = new Hono();

//GET /about
about.get("/", (c) => c.render(<AboutPage />));

export default about;
