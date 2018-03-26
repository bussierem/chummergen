import React, { Component } from 'react';
import { setCyberdeck } from '../../actions/index'
import { connect } from "react-redux";
// Constant imports

function mapDispatchToProps(dispatch) {
  return {
    setCyberdeck: cyberdeck => dispatch(setCyberdeck(cyberdeck)),
  };
};

function mapStateToProps(state) {
  return {
    cyberdeck: state.cyberdeck
  };
}

class Cyberdeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyberdeck: this.props.cyberdeck
    };
    this.dataChanged = this.dataChanged.bind(this);
  }

  dataChanged(base={}) {
    var children = Array.from(document.getElementById('cyberdeckDiv').querySelectorAll('input'));
    var cyberdeck = children.reduce((acc, c) => {
      acc[c.id] = c.value;
      return acc;
    }, base);
    this.props.setCyberdeck(cyberdeck);
  }

  render() {
    return (
      <div id='cyberdeckDiv'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.name}/><br />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.rating}/><br />
        <label htmlFor="attack">Attack:</label>
        <input type="number" id="attack" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.attack}/><br />
        <label htmlFor="sleaze">Sleaze:</label>
        <input type="number" id="sleaze" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.sleaze}/><br />
        <label htmlFor="dataProcessing">Data Processing:</label>
        <input type="number" id="dataProcessing" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.dataProcessing}/><br />
        <label htmlFor="firewall">Firewall:</label>
        <input type="number" id="firewall" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.firewall}/><br />
        <label htmlFor="matrixCondition">Matrix Condition:</label>
        <input type="number" id="matrixCondition" onChange={this.dataChanged} defaultValue={this.props.cyberdeck.matrixCondition}/><br />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cyberdeck);
