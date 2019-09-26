//rfc
import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { img, title, author } = this.props.info;
    return (
      <div className="book">
        <img src={img} alt="book" width="150px" />
        <div>
          <h3>Tytuł: {title}</h3>
          <h4>Autor: {author}</h4>
          <button onClick={this.handleClick}>Buy</button>
          <h5>count: {this.state.count}</h5>
        </div>
      </div>
    );
  }
}

// 4:00
