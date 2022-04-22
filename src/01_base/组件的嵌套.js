import React, { Component } from 'react'

class Navbar extends Component{

    render(){
        return <div>Navbar</div>
    }
}
function Swiper(){
    return <div>swiper</div>
}
const Tabbar=()=>{
    return <div>tabber</div>
}
export default class App extends Component {
  render() {
    return (
        <div>
      <Navbar><div>sssssssss</div></Navbar>
      <Swiper></Swiper>
      <Tabbar></Tabbar>
        </div>


    )
  }
}
