import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { LayoutRenderer } from "middlewares/LayoutRenderer";
import HomePageHandler from "handlers/home";
import AboutPageHandler from "handlers/about";
import { html } from "hono/html";
import { serveStatic } from "hono/bun";

export const hono = new Hono();
const port = 3000;

// apply middleware
hono.use(logger());
hono.use(LayoutRenderer);

// setup routes
hono.route("/", HomePageHandler);
hono.route("/about", AboutPageHandler);
hono.get("/robots.txt", serveStatic({ path: "./robots.txt"}));

// setup fallbacks
hono.notFound((c) => {
  return c.html("page not found", 404);
});
hono.onError((err, c) => {
  console.error(`${err}`);
  return c.html("you really hate to see it");
});

// todo add terminal style interaction, support mouse and keyboard
console.log(`Starting server on port ${port || 3000}`);

// vercel stuff
export const runtime = "edge";
export const GET = handle(hono);
export const POST = handle(hono);

// bun needs this to run http server
export default {
  port: port,
  fetch: hono.fetch,
};
