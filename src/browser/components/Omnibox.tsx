import { Component, h, render } from "preact";

export default class extends Component{
  static defaultProps = {
    onEnter: ()=>{},
  };
  constructor(props){
    super(props);
    this.state={
      omni:"",
    };
  }
  doInput(e){
    this.setState({
      omni:e.target.value
    })
  }
  doSubmit(e){
    e.preventDefault();
    this.props.onEnter(this.state.omni);
    return false;
  }
  doFocus(e){
    e.target.select();
  }
  componentDidUpdate(){
  
  }
  render(){
    return ( 
        <form
          class="omnibox-form"
          onSubmit={this.doSubmit.bind(this)}
          style={{
            width:"100%",
            height:"100%"
          }}
        >
          <input
            class="omnibox-input"
            style={{
              width: '100%',
              height: '20px',
              borderRadius: '10px',
            }}
            placeholder="Input URL..."
            onInput={this.doInput.bind(this)}
            onFocus={this.doFocus.bind(this)}
          />
        </form>
    )
  }
}