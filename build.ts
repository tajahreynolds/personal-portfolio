import { hono } from "index";
import { toSSG } from "hono/bun";

// generate static site from reigstered routes
toSSG(hono, {
  dir: "./build",
});