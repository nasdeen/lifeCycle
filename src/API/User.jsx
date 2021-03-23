import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("persons:", users);
        this.setState({
          persons: users,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Users Profile</h1>
        <hr />
        <div>
          {this.state.persons.map((user) => (
            <div>
              <p>email: {user.email} </p>
              <p>ID: {user.id}</p>
              <p>Name:{user.name}</p>
              <p>Phone: {user.phone}</p>
              <p>Username: {user.username}</p>
              <p>Website: {user.website}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default User;
