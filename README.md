# webONbrowser
webONbrowser(仮称) is ブラウザ上ブラウザ
## Use
- `deno task build`... ビルドします。出力はminifyされています
- `deno task dev`  ... 開発用モードです。サーバーを立ち上げ、watchモードでビルドし続けます。このときは、minifyされません。
- `deno task run`  ... 本番用モードです。一度minify buildをした後に、サーバーを立ち上げます。
## About
- 言語        ... TypeScript/JavaScript
- ランタイム   ... [Deno](https://deno.land)
- ビルドツール ... [esBuild](https://esbuild.github.io)
