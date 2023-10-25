import { Component } from "react";
import Child from "./child";
import Children from "./children";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childrenName) {
    alert(`hellow ${this.state.parentName} from ${childrenName}`);
  }
  render() {
    return (
      <div>
        <Child />
        <Children greetHandler={this.greetParent}/> 
      </div>
    );
  }
}

export default Parent;
