import { h, render } from "preact";
import App from "./components/App.tsx";

export default function(){
  render(<App />, document.getElementById("app"));
}