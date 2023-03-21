import { Component, h, render, createRef, } from "preact";
import Omnibox from "./components/Omnibox.tsx";
import VM from "./vm/index.tsx"

export default class extends Component{
  constructor(){
    super();
    this.state={
      
    };
    this.vmRef=createRef();
  }
  doEnter(omni){
    console.log(this.vmRef.current)
    this.vmRef.current.enterOmnibox(omni);
  }
  render(){
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}>
        <Omnibox onEnter={this.doEnter.bind(this)}/>
        <VM ref={this.vmRef}/>
      </div>);
  }
}