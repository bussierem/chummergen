import React, { Component } from 'react';
import { setLifestyle } from '../../actions/index'
import { connect } from "react-redux";
import LIFESTYLE from '../../structs/Lifestyle';

function mapDispatchToProps(dispatch) {
  return {
    setLifestyle: lifestyle => dispatch(setLifestyle(lifestyle)),
  };
};

function mapStateToProps(state) {
  return {
    lifestyle: state.lifestyle
  };
}

class Lifestyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifestyle: this.props.lifestyle
    };
    this.dataChanged = this.dataChanged.bind(this);
  }

  dataChanged(base={}) {
    var children = Array.from(document.getElementById('lifestyleDiv').querySelectorAll('input, select'));
    var lifestyle = children.reduce((acc, c) => {
      acc[c.id] = c.value;
      return acc;
    }, base);
    lifestyle.cost = LIFESTYLE[lifestyle.lifestyle];
    this.props.setLifestyle(lifestyle);
  }

  render() {
    return (
      <div id="lifestyleDiv">
        <label htmlFor="lifestyle">Type:</label>
        <select id="lifestyle"
            onChange={this.dataChanged}
            defaultValue={this.props.lifestyle.lifestyle}>
          <option value="street">Street</option>
          <option value="squatter">Squatter</option>
          <option value="low">Low</option>
          <option value="middle">Middle</option>
          <option value="high">High</option>
          <option value="luxury">Luxury</option>
        </select><br />
        <label htmlFor="lifestyleLocation">Location:</label>
        <input type="text" id="lifestyleLocation"
          onChange={this.dataChanged}
          defaultValue={this.props.lifestyle.lifestyleLocation} /><br />
        <label htmlFor="monthsPaid">Months Paid:</label>
        <input type="number" id="monthsPaid"
          onChange={this.dataChanged}
          defaultValue={this.props.lifestyle.monthsPaid} /><br />
        <label htmlFor="cost">Cost:</label>
        <input type="text" disabled id="cost"
          onChange={this.dataChanged}
          value={this.props.lifestyle.cost} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lifestyle);
