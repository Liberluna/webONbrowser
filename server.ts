import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { watch, build } from "./build.ts"
import { mime } from "https://deno.land/x/mimetypes@v1.0.0/mod.ts"
import { isurl, reqErr, blob2b64 } from "./utils/index.ts"

if(Deno.args.includes("--dev")){
  watch()
}else{
  await build()
}


const app = new Hono()
app.use('*',async(ctx,next)=>{
  const _path=new URL(ctx.req.url).pathname
  ctx.set("path",_path.at(-1)==="/" ? _path.slice(0,-1) : _path)
  await next()
})
app.post('/proxy',async(ctx)=>{
  const datas=await ctx.req.parseBody();
  const url=datas.url.toString();
  if(!isurl(url))
    return reqErr(ctx,"Invalid data: 'url'")
  const req=Object.assign({
    url:"https://example.com"
  },{
    url:new URL(url),
  });
  const proxyRes=await fetch(req.url);
  const proxyBlob=await proxyRes.blob();
  const proxyB64=await blob2b64(proxyBlob);
  return ctx.json({
    body:proxyB64
  });
})
app.get('/*',async(ctx)=>{
  let filedata
  const ext=(ctx.get("path")).split("/").at(-1).split(".").at(-1)
  ctx.header('Content-Type',mime.getType(ext) || "text/html")
  try{
    filedata= await Deno.readFile(`./public${ctx.get("path")}`)
  }catch{
    try{
      filedata= await Deno.readFile(`./public${ctx.get("path")}/index.html`)
    }catch{
      return ctx.notFound()
    }
  }
  return ctx.body(filedata)
})

serve(app.fetch)