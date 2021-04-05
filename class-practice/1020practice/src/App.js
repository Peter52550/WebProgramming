import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state  ={
      counter:100,
    }
  }
  click = (step) => {
    this.setState({
      counter:this.state.counter+step,
    })
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("Component will receive props")
  //   console.log(this.props)
  //   console.log(nextProps)
  // }
  render(){
    return(
      <div>
        <div className="App-display">{this.state.counter}</div>
        <div className="App-controls">
        {this.props.text}
        <button onClick={() => this.click(1)}>+</button>
        <button onClick={() => this.click(-1)}>-</button>
      </div>
    </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: "hello"}
  }
  // handleChangeText = () => {
  //   this.setState({text: "hi"})
  // }
  render(){
    return (
        <div className="App">
          <Counter   />
          
        </div>
      )
    }
}

export default App;

// <button onClick={this.handleChangeText} >hi</button>