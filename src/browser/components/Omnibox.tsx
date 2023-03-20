import { Component, h, render } from "preact";

export default class extends Component{
  constructor(){
    super();
    this.state={
      
    };
  }
  render(){
    return (
      <div>
        <input
          class="omnibox-input"
          style={{
            width: '90%',
            height: '3em',
            borderRadius: '1.5em',
          }}
          placeholder="Input URL..."
        />
      </div>
    )
  }
}