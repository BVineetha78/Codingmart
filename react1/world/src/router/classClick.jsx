import { Component } from "react";

class classClick extends Component {
  clickHandler() {
    console.log("clicked the handler");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>clickme</button>
      </div>
    );
  }
}

export default classClick;
