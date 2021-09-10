import React, { Component } from "react";
import Band from './Band';

class Bands extends Component {

  renderBands = () => this.props.bands.map(band => <Band band={band} delete={this.props.deleteBand}/>)

  render() {
    return <ol>{this.renderBands()}</ol>
  }
}

export default Bands
