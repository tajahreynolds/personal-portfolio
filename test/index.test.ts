import { describe, it, expect } from "bun:test";
import app from "../src/index"

describe('Portfolio', () => {
    it('responds', async () => {
        const res = await app.request('/');
        expect(res.status).toBe(200);
    })
})