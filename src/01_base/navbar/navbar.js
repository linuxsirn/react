import React, { Component } from 'react'
import CheckPropTypes from 'prop-types'
export default class Navbar extends Component {
    //默认属性
    static defaultProps={
        title:'默认文本',
        isshow:false
    }
   
    static propTypes={
        title:CheckPropTypes.string,
        isshow:CheckPropTypes.bool
    }
    
  render() {
    let {title,isshow}=this.props;
    console.log(title,isshow)
    return (
        <div> {isshow && <button>头</button>}<button>{this.props.title}</button><button>尾部</button></div>
       
    )
  }
}
