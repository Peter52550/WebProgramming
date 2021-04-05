import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled from 'styled-components'

// class Title extends React.Component{
//   render(){
//     return (
//       <h2>{this.props.children}</h2>
//     )
//   }
// }
const Header = styled.h1`
  color: red;
  font-size: 50px;
`
class Text extends React.Component{
  render(){
    return (
      <p >text</p>
    )
  }
}
const Title = (props) => {
  return (
    <Header onClick={props.handleClick}>{props.text}</Header>
  )
}
// function Counter(props){
//   const {number} = props
//   return (
//     <div>{number}</div>
  
//   )
// }
const Counter = ({number}) => {
  return (
    <div>{number}</div>
  )
}
class App extends React.Component{
  constructor(){
    super()
    this.state={
      title: 'hi',
      counter:1,
    }
  }
  handleClick= () =>{
    this.setState({
      counter: this.state.counter+1
    })
  }
  render(){
    console.log('render')
    return (
      <div style={{'color': 'red'}}> 
        
          
        <Counter number = {this.state.counter}/>
        
        <Title handleClick={this.handleClick} 
           text={this.state.title}/>
        <Text/>
      </div>
    )
  }
}
//<h1 onClick={this.handleClick}>{this.state.title}</h1>

export default App;
