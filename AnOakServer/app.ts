import { Application } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

export{};

await app.listen({ port: 8000 });