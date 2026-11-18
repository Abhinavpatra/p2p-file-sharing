import { Hono } from "hono";
import { cors } from "hono/cors";

type Env = {
  FRONTEND_DEV_URL: string;
};

const app = new Hono<{ Bindings: Env }>();
app.use("*", (c, next) => cors({ origin: c.env.FRONTEND_DEV_URL })(c, next));

app.get("/", (c) => {
  console.log("hello");
  return c.text("Hello Hono!");
});

app.get("/con", (c) => {
  console.log("hello");
  return c.text("Hello con!");
});

export default app;
