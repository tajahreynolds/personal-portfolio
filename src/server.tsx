import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
// import { applyRootLayout } from "middlewares/applyRootLayout";
import { injectHtmx } from "middlewares/injectHtmx";
import home from "handlers/home";
import about from "handlers/about";

const server = new Hono();
const port = 3000;
server.use(logger());
server.use(injectHtmx);
// app.use(applyRootLayout);
server.route("/", home);
server.route("/about", about);
server.notFound((c) => {
  return c.html("page not found");
});
server.onError((err, c) => {
  console.error(`${err}`);
  return c.html("you really hate to see it");
});

// todo add terminal style interaction, support mouse and keyboard
console.log(`Starting server on port ${port || 3000}`);
export const app = server;
export type AppType = typeof server;
export default handle(server);
