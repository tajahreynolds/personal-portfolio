import { createMiddleware } from "hono/factory";
// import { html } from 'hono/html';

export const injectHtmx = createMiddleware(async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html>
        <head>
          <script
            src="https://unpkg.com/htmx.org@1.9.12"
            integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
            <main hx-boost="true">{content}</main>
        </body>
      </html>
    );
  });
  await next();
});
