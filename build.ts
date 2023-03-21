import * as esbuild from "https://deno.land/x/esbuild@v0.17.12/mod.js"
import { cache } from "https://deno.land/x/esbuild_plugin_cache@v0.2.10/mod.ts"
import importmap from "./importmap.json" assert { type: "json" };

const args=Deno.args

const buildOptions={
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './public/wonb.js',
  plugins: [cache({
    importmap,
    directory:"./.cache"
  })],
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  loader: { '.html': 'base64' },
}
export async function watch(){
  const ctx= await esbuild.context(buildOptions)
  ctx.watch()
}
export async function build(){
  await esbuild.build(Object.assign({},{minify: true},buildOptions))
  esbuild.stop()
}
switch(args[0]){
  case "--watch":{
    await watch()
    break
  }
  case "--build":{
    await build()
    break
  }
}