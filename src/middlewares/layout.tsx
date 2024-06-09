import { createMiddleware } from 'hono/factory';
import RootLayout from '../layout';

const applyRootLayout = createMiddleware(async (c, next) => {
  c.setRenderer((content) => {
    return c.html(<RootLayout>{content}</RootLayout>);
  });
  await next();
})