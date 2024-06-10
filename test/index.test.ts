import { describe, expect, it } from "bun:test";
import app from 'index';

describe("Server", () => {
  it("responds", async () => {
    const req = new Request('http://127.0.0.1/')
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
