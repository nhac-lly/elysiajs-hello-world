import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { staticPlugin } from "@elysiajs/static";

const port = process.env.PORT || 3000;
const app = new Elysia()
  .use(swagger())
  .use(staticPlugin())
  .get("/", () => {
    return new Response(Bun.file("dist/index.html"));
  })
  .post("/hello", () => ({ message: "Hello from ElysiaJS!" }))
  .post("/test", () => ({ message: "Test endpoint" }))
  .post("/hau", () => ({ message: "Ghét Hàu" }))
  .post("/counter", ({ body }) => {
    const { action, currentCount } = body as {
      action: "increment" | "decrement";
      currentCount: number;
    };
    let newCount = currentCount;

    if (action === "increment") {
      newCount = currentCount + 1;
    } else if (action === "decrement") {
      newCount = currentCount - 1;
    }

    return { count: newCount, action, previousCount: currentCount };
  })
  .post("/theme", ({ body }) => {
    const { theme } = body as { theme: string };
    return {
      message: `Theme changed to ${theme}`,
      theme,
      timestamp: new Date().toISOString(),
    };
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
