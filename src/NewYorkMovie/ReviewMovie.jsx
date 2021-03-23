import React, { Component } from "react";

class MovieReview extends Component {
  constructor() {
    super();
    this.state = {
      review: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=NBxDntesYHGyHNs3HSjh1ICVDPFViWhN"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({ review: res.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>New York Movie Reveiw</h1>
        <hr />
        <div>
          {this.state.review.map((eachMovie) => (
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

export default MovieReview;
