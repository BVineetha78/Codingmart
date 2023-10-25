

import  { Component } from 'react'

 class child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggingIn:true
      }
    }
    
  render() {
    return this.state.isLoggingIn && <div>annaya</div>
    // return (
    //     this.state.isLoggingIn?
    //     <div>vineetha</div>:
    //     <div>vinu</div>
    // )
    // let message
    // if(this.state.isLoggingIn){
    //     message=<div>message</div>
    // }
    // else{
    //     message = <div>nothing</div>
    // }
    // return <div>{message}</div>
//         if(this.state.isLoggingIn){
//         return(
// <div> welcome vinu</div>
//         )
//         }
//         else{
//             return(
//                 <div>guest</div>
//             )
//         }
        }
    }

export default child

