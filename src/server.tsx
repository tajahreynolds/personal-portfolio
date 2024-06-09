import { Hono } from "hono";
import { logger } from "hono/logger";
import { applyRootLayout } from "middlewares/applyRootLayout";
import home from "controllers/home";
import about from "controllers/about";

const app = new Hono();

app.use(logger());
app.use(applyRootLayout);
app.get("/", (c) =>
  c.render(
    <div hx-get="/about" hx-swap="outerHTML">
      click it up
    </div>
  )
);
app.route("/home", home);
app.route("/about", about);

// todo add terminal style interaction, support mouse and keyboard

export type AppType = typeof app;
export default app;
