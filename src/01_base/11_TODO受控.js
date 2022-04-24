import React, { Component } from 'react'

export default class App extends Component {

    state={
        serachTxt:"",
        list : [
            {id:1,value:"aaaa",isCheck:false},
            {id:2,value:"bbbb",isCheck:false},
            {id:3,value:"eeee",isCheck:false}
        ]
    }
    delHandle=(index)=>{
    let newList = [...this.state.list];
    console.log(index)   
    newList[index].isCheck=true;
     this.setState({list:newList});
   }
   checkHandle=(index)=>{
    let newList = [...this.state.list];
    //console.log(index)   
    newList[index].isCheck=!newList[index].isCheck;
     this.setState({list:newList});
   }
   addHandle=()=>{
    let txt = this.state.serachTxt;
    let newList = [...this.state.list];
    let id = Math.random()*10000000;
     newList.push({id:id,value:txt,isCheck:false});
      this.setState({list:newList,serachTxt:""});
   }
  render() {

    let ul = this.state.list.map((item,index)=>{
       return <li key={item.id}>{item.value}<input type="checkbox" checked={item.isCheck} onChange={()=>this.checkHandle(index)}></input><button onClick={()=>{this.delHandle(index)}}>del</button></li>
    })
    return (
        
      <div>
          <input value={this.state.serachTxt} onChange={(even)=>{
            this.setState({serachTxt:even.target.value})
          }}></input><button onClick={()=>this.addHandle()}>add</button>
          {this.state.list.length===0?<div>暂无显示</div>:null}
            <ul>{ul}</ul>
      </div>
    )
  }
}
