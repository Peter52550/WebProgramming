import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import styled from 'styled-components'

class Title extends Component {
    constructor() {
      super()
      console.log('Title created')
    }
    render() {
      return (
        <h1> title </h1>
      )
    }
  }
  
  class App extends Component {
    constructor() {
      super()
      this.state = {
        isShow: false
      }
      console.log('App created')
    }
  
    render() {
      const {isShow} = this.state
      return (
        <div>
          {isShow && <Title />/* 這邊利用短路的性質製造判斷式的效果 */} 
          <button onClick={() => {
            this.setState({
              isShow: !this.state.isShow // 這樣的話點一下就會把原本的改掉
            })
          }}>toggle</button>
        </div>
      )
    }
  }
//<h1 onClick={this.handleClick}>{this.state.title}</h1>
// class Title extends Component {
//     constructor() {
//       super()
//       console.log('Title created')
//     }
//     render() {
//       const {isShow} = this.props
//       return (
//         <h1 style={{
//           'display': isShow ? 'block' : 'none'
//         }}> title </h1>
//       )
//     }
//   }
  
//   class App extends Component {
//     constructor() {
//       super()
//       this.state = {
//         isShow: false
//       }
//       console.log('App created')
//     }
  
//     render() {
//       const {isShow} = this.state
//       return (
//         <div>
//           <Title isShow={isShow}/>
//           <button onClick={() => {
//             this.setState({
//               isShow: !this.state.isShow // 這樣的話點一下就會把原本的改掉
//             })
//           }}>toggle</button>
//         </div>
//       )
//     }
//   }
export default App;
