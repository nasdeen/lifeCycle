import React, { Component } from "react";
import axios from "axios";

class AxiosTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/todos/").then((respond) => {
      console.log(respond.data);
      this.setState({
        todo: respond.data,
      });
    });
  }

  render() {
    return (
      <>
        <h1>Todos</h1>
        <hr />
        <div>
          {this.state.todo.map((eachItem) => (
            <div>
              <h3>User ID: {eachItem.userId}</h3>
              <h4>ID: {eachItem.id}</h4>
              <h5>Title: {eachItem.title}</h5>
              <h6>
                Completed: {eachItem.completed && <span>True</span>}
                {!eachItem.completed && <span>False</span>}
              </h6>
              <hr />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default AxiosTodo;
