import React, { Component } from 'react'

export default class App extends Component {
  handleClick2(){
    console.log(this.a)
  }
  handleClick3=()=>{
    console.log(this.a)
  }
  handleClick4(){
      console.log(this);
  }
  a=100;
  render() {
    return (
      <div><input></input>
      <button onClick={(e)=>{
          console.log(this.a)
      }}>add</button>
       <button onClick={this.handleClick2.bind(this)}>add2</button>
       <button onClick={this.handleClick3}>add3</button>
       <button onClick={()=>{
           this.handleClick4()
       }}>add4</button>
      </div>
    )
  }
}
