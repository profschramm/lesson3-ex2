import React, { Component } from "react";

class MovieCard extends Component {
  render() {

    const { movie } = this.props;

      return (<li> {movie.name} </li>);
  }
}

export default MovieCard;