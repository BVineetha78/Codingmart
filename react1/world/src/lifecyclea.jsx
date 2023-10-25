import { Component } from 'react'
import Lifecycleb from './lifecycleb'

class Lifecyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vineetha'
      }
      console.log('lifecyclea constructor')
    }
    static getDerivedSateFromProps({props}, state){
        console.log('getDerivedSateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('lifecycleA getsnaphotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    changeSate=()=>{
      this.setState({
        name:'codeevaluation'
      })
    }
  render() {
    console.log('lifecyclea render');
    return (
        <div>
            <div>
        Lifecyclea
      </div>
      <button onClick={this.changeState}>change state</button>
      <Lifecycleb/>
        </div>
     
    )
  }
}

export default Lifecyclea
