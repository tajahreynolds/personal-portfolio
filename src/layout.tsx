import type { PropsWithChildren } from "hono/jsx";
export default ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Layout</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.12"
          integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};
