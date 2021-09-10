import React, { Component } from "react";

class Band extends Component {

  render() {
    return (
      <li>
      {this.props.band.name} <button onClick={() => this.props.delete(this.props.band)}>DELETE</button>
      </li>
    )
  }
}

export default Band
