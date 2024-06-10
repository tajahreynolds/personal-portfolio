import http from "index";
import { toSSG } from "hono/bun";

// generate static site from reigstered routes
toSSG(http.app, {
  dir: "./public",
});