import React, { Component } from "react";
import axios from "axios";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=NBxDntesYHGyHNs3HSjh1ICVDPFViWhN"
      )
      .then((responds) => {
        console.log(responds);
        this.setState({ movies: responds.data.results });
      });
  }
  render() {
    return (
      <div>
        <h1>Movie Reviews</h1>
        <hr />
        <div>
          {this.state.movies.map((eachMovie) => (
            <div>
              <h3>byline: {eachMovie.byline}</h3>
              <h4>Critic Pick:{eachMovie.critics_pick}</h4>
              <h5>Title:{eachMovie.display_title}</h5>
              <h6>Headline:{eachMovie.headline}</h6>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Review;
