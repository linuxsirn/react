import React, { Component } from 'react'
import Navbar from './navbar/navbar'
export default class App extends Component {
 
  render() {
    return (
      <div>
         
            <Navbar title="少时诵诗书所" isshow={false}></Navbar>
          
      </div>
    )
  }
}
