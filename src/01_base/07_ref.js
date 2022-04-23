import React, { Component } from 'react'

export default class App extends Component {
  
    myinput = React.createRef();
  handleClick4(){
      console.log(this.refs.inputtxt.value,this.myinput.current.value);
  }
  a=100;
  render() {
    return (
      <div><input ref="inputtxt"></input>
       <input ref={this.myinput}></input>
       <button onClick={()=>{
           this.handleClick4()
       }}>add4</button>
      </div>
    )
  }
}
