import Welcome from "./component/welcome";
import Fill from "./component/Greet";
import Message from "./component/message";
import Counter from "./component/counter"
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        {/* <Fill name="vineetha" heroName="prabhs"/> */}
        <Message />
        {/* <Welcome/> */}
      </div>
    );
  }
}

export default App;
