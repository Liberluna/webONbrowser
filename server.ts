import { Application } from "https://deno.land/x/oak/mod.ts";
import { encode } from "https://deno.land/std@0.92.0/encoding/base64.ts";

const app = new Application();

const router = new Router();
router
  .post("/proxy", (ctx) => {
    const res=await fetch("http://example.com");
    const arrayBuffer=await res.arrayBuffer();
    const b64=encode(arrayBuffer);
    ctx.response.body = {
      body:b64,
    };
  });
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
