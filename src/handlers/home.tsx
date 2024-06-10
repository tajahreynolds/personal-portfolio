import { Hono } from "hono";

const home = new Hono();

//GET /
home.get((c) => {
    return c.render(<h1>yo</h1>)
});

export default home;
