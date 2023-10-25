import { Component } from "react";
import Parent from "./propsmethod/parent";
import List from "./propsmethod/list"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent />
        <List />
      </div>
    );
  }
}

export default App;
