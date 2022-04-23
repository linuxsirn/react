import React, { Component } from 'react'
import "../css/card.css"
import Film from './cardComponent/film'
import Cinema from './cardComponent/cinema'
import Center from './cardComponent/center'
export default class App extends Component {
  state={
      list:[{id:0,valaue:'电影'},{id:1,valaue:'影院'},{id:2,valaue:'我的'}],
      current:0
  }
  clickHandle=(index)=>{
      console.log(index);
      this.setState({current:index})
  }
  render() {
    return (
      <div>
          {/* <Film></Film>
          <Cinema></Cinema>
          <Center></Center> */}
          {
              this.state.current===0&&<Film></Film>
             
          }
          {
               this.state.current===1&&<Cinema></Cinema>
          }
          {
              this.state.current===2&&<Center></Center>
         }
          <ul>
              {
                  this.state.list.map((item)=>{
                      return <li key={item.id} className={this.state.current===item.id?"active":""} onClick={()=>{this.clickHandle(item.id)}}>{item.valaue}</li>
                  })
              }
          </ul>
      </div>
    )
  }
}
