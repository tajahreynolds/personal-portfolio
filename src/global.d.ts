import "typed-htmx";
declare global {
  namespace Hono {
    interface HTMLAttributes extends HtmxAttributes {}
  }
  type Env = {
    Variables: {
      pageTitle: string;
    };
  };
}

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<String>,
      props: { pageTitle: string = "Portfolio" }
    ): Response | Promise<Response>;
  }
}
