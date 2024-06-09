import { Hono } from "hono";
import HomePage from "../pages/home";

const home = new Hono();

//GET /home
home.get("/", (c) => c.html(<HomePage />));

export default home;
