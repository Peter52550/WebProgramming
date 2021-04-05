import logo from './logo.svg';
import './App.css';
import React, {Component}from 'react'
import styled from 'styled-components'


class Title extends Component {
    shouldComponentUpdate(nextProps) {
      if (nextProps.title !== this.props.title) {
        return true;
      }
      return false;
    }
    render() {
      console.log('title render')
      return <h1>{this.props.title}</h1>
    }
  }
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        number: 1
      }
    }
    render() {
      const { number } = this.state
      return (
        <div>
          <h1>{number}</h1>
          <Title title={'hello world'} />
          <div onClick={() => {
            this.setState({
              number: this.state.number + 1
            })
          }}>click me</div>
        </div>
      )
    }
  }
  export default App
