import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { setLayout } from "middlewares/setLayout";
import HomePageHandler from "handlers/home";
import AboutPageHandler from "handlers/about";

const hono = new Hono();
const port = 3000;

// apply middleware
hono.use(logger());
hono.use(setLayout);

// setup routes
hono.route("/", HomePageHandler);
hono.route("/about", AboutPageHandler);

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
  app: hono,
  port: port,
  fetch: hono.fetch,
}
