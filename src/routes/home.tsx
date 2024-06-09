import { Hono } from "hono";
import HomePage from "../pages/home";

const app = new Hono();

app.get("/", (c) => c.html(<HomePage />));
// app.get("/html", (c) => c.html(<RootLayout />));

export default app;
