import { app } from "server";
import { toSSG } from "hono/bun";

toSSG(app, {
    dir: "./public"
});