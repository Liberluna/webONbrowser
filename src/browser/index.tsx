import { Component, h, render } from "preact";
import Omnibox from "./components/Omnibox.tsx";

export default class extends Component{
  constructor(){
    super();
    this.state={
      
    };
  }
  render(){
    return (<div>
      <Omnibox/>
    </div>)
  }
}