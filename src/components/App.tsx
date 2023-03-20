import { Component, h, render } from "preact";
import Browser from "../browser/index.tsx";

export default class extends Component{
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (<div>
      <h1>WonB</h1>
      <p>By Liberluna</p>
      <Browser/>
    </div>)
  }
}