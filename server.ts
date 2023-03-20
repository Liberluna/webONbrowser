import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { watch, build } from "./build.ts"
import { mime } from "https://deno.land/x/mimetypes@v1.0.0/mod.ts"

if(Deno.args.includes("--dev")){
  watch()
}else{
  await build()
}


const app = new Hono()
app.use('*',async(ctx,next)=>{
  const _path=ctx._path
  ctx.path= _path.at(-1)==="/" ? _path.slice(0,-1) : _path
  await next()
})
app.get('/*',async(ctx)=>{
  let filedata
  const ext=ctx._path.split("/").at(-1).split(".").at(-1)
  ctx.header('Content-Type',mime.getType(ext))
  try{
    filedata= await Deno.readFile(`./public${ctx.path}`)
  }catch{
    try{
      filedata= await Deno.readFile(`./public${ctx.path}/index.html`)
    }catch{
      return ctx.notFound()
    }
  }
  return ctx.body(filedata)
})

serve(app.fetch)