import { Context } from "https://deno.land/x/hono@v2.5.1/mod.ts";
export default (c:Context,text:string):Response=>{
  c.status(400);
  return c.json({
    error:text
  })
}