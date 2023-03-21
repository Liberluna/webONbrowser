import { Component, h, render } from "preact";
import Browser from "../browser/index.tsx";

export default class extends Component{
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (<div style={{width:"100%",height:"100%"}}>
      <Browser/>
    </div>)
  }
}