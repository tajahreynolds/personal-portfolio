import { Hono } from "hono";

const home = new Hono<Env>();

//GET /
home.get((c) => {
  c.set("pageTitle", "Home");
  return c.render(
    <div>
      <h1>TaJah Tech Portfolio</h1>
      <div>
        <h2 hx-get="/about" hx-target="#root" hx-push-url="true">
          About
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          asperiores nostrum. Asperiores quasi eveniet aspernatur nesciunt omnis
          numquam labore adipisci saepe maxime, magni velit blanditiis magnam
          error laborum obcaecati nobis.
        </p>
      </div>
      <div>
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in
          consequatur, quos aliquid voluptate dicta quibusdam eaque porro odio
          explicabo aspernatur corrupti alias labore placeat iure voluptatum
          provident dolorem similique.
        </p>
      </div>
    </div>,
    {
      pageTitle: "Home"
    }
  );
});

export default home;
