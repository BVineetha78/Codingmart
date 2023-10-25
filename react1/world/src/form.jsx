import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      comments: " ",
      topic: " ",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange=event=>{
    this.setState({
      topic:event.target.value
    })
  }
  handleSubmit=event=>{
    alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>comments</label>
          <textarea
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="java">java</option>
            <option value="html">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
