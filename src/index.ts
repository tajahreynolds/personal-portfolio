import { Hono } from "hono";
import home from "./routes/home";
import about from "./routes/about";

const app = new Hono();

app.route("/", home);
app.route("/about", about);

export default app;
