import * as esbuild from "https://deno.land/x/esbuild@v0.17.12/mod.js"

const args=Deno.args

const buildOptions={
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './public/wonb.js'
}
export async function watch(){
  const ctx= await esbuild.context(buildOptions)
  ctx.watch()
}
export async function build(){
  await esbuild.build(buildOptions)
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