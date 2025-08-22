import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

const port = process.env.PORT || 3000;
const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
