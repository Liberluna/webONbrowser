/** @jsx h */
/* global document */
import { Component, h, render } from "preact";
import proxy from "./proxy.ts";
import homeHTML from "../../../public/home.html";
import pre from "./pre.ts";

export type stateType={
  omni:string,
}
export default class extends Component{
  state:stateType;
  iframe:HTMLIframeElement;
  constructor(){
    super();
    this.state={
      omni:"",
      siteData:{
        body:""
      }
    };
  }
  async enterOmnibox(omni){
    this.setState({
      omni
    })
    const siteData=await proxy({
      url:omni
    })
    this.setState({
      siteData:await pre(siteData)
    })
  }
  render(){
    return (
      <iframe
          class="browser-vm-iframe"
          src={this.state.omni? this.state.siteData.body:"data:text/html;base64,"+homeHTML}
          style={{
            width:"90vw",
            height:"50vh",
          }}>
        </iframe>)
  }
  componentDidUpdate(){
    this.iframe=document.getElementsByClassName("browser-vm-iframe");
    this.window=this.iframe.contentWindow;
  }
}