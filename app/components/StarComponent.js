import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

export default class Star extends Component {
  props = {
    // Default location of the star assets
    emptyStar: "/assets/star-empty.png",
    fullStar: "/assets/star-full.png",
    totalStars: 5,
    size: 32,
  };

  static propTypes = {
    emptyStar: PropTypes.string,
    fullStar: PropTypes.string,
    size: PropTypes.number,
    totalStars: PropTypes.number,
    stars: PropTypes.number.isRequired,
  };

  render = () => {
    var stars = Math.round(this.props.stars);
    var totalStars = Math.round(this.props.totalStars);
    var starStyle = {
      display: "block",
      marginLeft: "1",
      marginRight: "1",
      width: this.props.starSize,
      height: this.props.starSize,
    };

    var ratingStars = _.range(totalStars).map((value, index, array) => {
      if (stars >= index + 1) {
        console.log(this.props.fullStar);
        return (
          <img
            src={this.props.fullStar}
            style={starStyle}
            alt="rating-full-star"
          />
        );
      } else {
        return (
          <img
            src={this.props.emptyStar}
            style={starStyle}
            alt="rating-half-star"
          />
        );
      }
    });

    return <p className="rating-stars">{ratingStars}</p>;
  };
}
