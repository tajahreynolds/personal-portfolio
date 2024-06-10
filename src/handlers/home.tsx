import { Hono } from "hono";
import HomePage from "pages/HomePage";

const home = new Hono();

//GET /
home.get((c) => c.render(<HomePage />));

export default home;
