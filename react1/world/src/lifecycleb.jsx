import { Component } from 'react'

class Lifecycleb extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vineetha'
      }
      console.log('lifecyclea constructor')
    }
    static getDerivedSateFromProps(props, state){
        console.log('getDerivedSateFromProps lifrcycleb')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('lifecycleB getsnaphotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
    
  render() {
    console.log('lifecycleB render');
    return (
      <div>
        Lifecycleb
      </div>
    )
  }
}

export default Lifecycleb
