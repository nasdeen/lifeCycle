import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ todo: res });
      });
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        <div>
          {this.state.todo.map((eachTodo, index) => (
            <div key={index}>
              <h3>UserID:{eachTodo.userId}</h3>
              <h4>ID:{eachTodo.id}</h4>
              <h5>Title:{eachTodo.title}</h5>
              <h6>
                Completed: {eachTodo.completed && <span>True</span>}
                {!eachTodo.completed && <span>False</span>}
              </h6>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
