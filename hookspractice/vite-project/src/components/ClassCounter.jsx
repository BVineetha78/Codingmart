import  { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };
  }
  IncrementCount = () => {
    console.log(this.state.Count);
    this.setState({ Count: this.state.Count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.IncrementCount}>Count {this.state.Count}</button>
      </div>
    );
  }
}

export default ClassCounter;
