import { createMiddleware } from "hono/factory";
import { html } from "hono/html";

export const LayoutRenderer = createMiddleware<Env>(async (c, next) => {
  c.setRenderer((content, { pageTitle }) => {
    return c.html(
      html`<!DOCTYPE html>` +
      (
        <html lang="en">
          <head>
            <title>{pageTitle} | TaJah Tech</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="A Technical Portfolio Showcasing the Work of TaJah Reynolds" />
            <script
              src="https://unpkg.com/htmx.org@1.9.12"
              integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
              crossorigin="anonymous"
            ></script>
            <link rel="stylesheet" href="styles/style.css"/>
          </head>
          <body>
            <main id="root">{content}</main>
          </body>
        </html>
      )
    );
  });
  await next();
});