import React, { Component } from 'react'

export default class App extends Component {

    state={
        list : [
            {id:1,value:"aaaa"},
            {id:2,value:"bbbb"},
            {id:3,value:"eeee"}
        ]
    }
    delHandle=(index)=>{
    let newList = [...this.state.list];
    //console.log(index)   
    newList.splice(index,1);
     this.setState({list:newList});
   }
   addHandle=()=>{
    let txt = (this.refs.inputValue.value)
    this.refs.inputValue.value = "";
    let newList = [...this.state.list];
    let id = Math.random()*10000000;
     newList.push({id:id,value:txt});
      this.setState({list:newList});
   }
  render() {

    let ul = this.state.list.map((item,index)=>{
       return <li key={item.id}>{item.value}<button onClick={()=>{this.delHandle(index)}}>del</button></li>
    })
    return (
        
      <div>
          <input ref="inputValue"></input><button onClick={()=>this.addHandle()}>add</button>
          {this.state.list.length===0?<div>暂无显示</div>:null}
            <ul>{ul}</ul>
      </div>
    )
  }
}
