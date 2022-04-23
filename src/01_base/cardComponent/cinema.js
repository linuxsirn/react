import React, { Component } from 'react'
import axios from "axios"
export default class Cinema extends Component {

    constructor(){
        super();
        this.state={
            list:[]
        }
        // axios.get('https://m.maizuo.com/gateway?cityId=130200&ticketFlag=1&k=5870683').then((res)=>{

        // }).catch((err)=>{
        //     console.log(err);
        // })
        axios({
            url:'https://m.maizuo.com/gateway?cityId=130200&ticketFlag=1&k=5870683',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650715518368074402299905","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
            console.log(res.data.data.cinemas)
            this.setState({list:res.data.data.cinemas})
        }).catch((err)=>{
            console.log(err);
        })
    }
  render() {
    return (
      <div>
          {
              this.state.list.map((item)=>{
               return(
                <dl>
                <dt key={item.cinemaId}>{item.name}</dt>
                <dd key={item.cinemaId}>{item.phone}</dd>
                </dl>
               )
            
              })
          }
          
      </div>
    )
  }
}
