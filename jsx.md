# JSX 语法（JavaScript XML) 
1. ### jsx 直接支持HTML 标签 。不用写引号，但script标签的type 属性 text/babel
2. ### 虚拟DOM 本质是一个 object 类型的对象
3. 标签中混入JS时要用{}
4. 样式的类名指定，不要用class 要用className,for 替换 htmlFor
5. 内联样式使用style={{key：value}} 两个单词要使用驼峰命名
6. 虚拟DOM 必须只有一个根标签
7. 标签必须闭合
8. 标签首字母
   1. 若小写开头，则将转为html标签，若html中午这个标签，将发生错误
   2. 若大写开头，代表是一个component;
#React 组件编程
1. 函数式组件
2. 类式组件


# react事件
React中的事件，用的是事件代理的方式，不是绑定到具体的DOM上，
# Ref
给标签设置 ref="username"  
通过这个获取this.refs.username. 可以获得真实的DOM 

给组件设置 ref="username"  
通过这个可以获取 组件对象

# state
```
  class App extends Compontent{
      state={
          "mytxt":"aaaa"
      }
  }
```
只能通过 this.setState({mytxt:'bbbb'}) 来修改

不要直接修改状态，可能会造成不可预期的问题

slice()、contact()方法如果不传任何参数，,以及 【。。。 展开】 是对数组进行深度复制

bind方法第二个以后的参数可以带参数过去

#直接解析HTML,这样会把HTML标签解析显示出来，但这个比较危险
```
  <div dangerouslySetInnerHTML={
      __html=this.state.code
  }>  </div>
```

 