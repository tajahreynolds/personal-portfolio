import { describe, expect, it } from "bun:test";
import { hono } from "index";

describe("Server", () => {
  it("responds", async () => {
    const req = new Request("http://localhost/");
    const res = await hono.fetch(req);
    expect(res.status).toBe(200);
  });
});
