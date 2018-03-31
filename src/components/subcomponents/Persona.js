import React, { Component } from 'react';
import { setPersona } from '../../actions/index'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    setPersona: persona => dispatch(setPersona(persona)),
  };
};

function mapStateToProps(state) {
  return {
    persona: state.persona
  };
}

class Persona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: this.props.persona
    };
    this.dataChanged = this.dataChanged.bind(this);
  }

  dataChanged(base={}) {
    var children = Array.from(document.getElementById('personaDiv').querySelectorAll('input'));
    var persona = children.reduce((acc, c) => {
      acc[c.id] = c.value;
      return acc;
    }, base);
    this.props.setPersona(persona);
  }

  render() {
    return (
      <div id='personaDiv'>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" onChange={this.dataChanged} defaultValue={this.props.persona.rating}/><br />
        <label htmlFor="attack">Attack:</label>
        <input type="number" id="attack" onChange={this.dataChanged} defaultValue={this.props.persona.attack}/><br />
        <label htmlFor="sleaze">Sleaze:</label>
        <input type="number" id="sleaze" onChange={this.dataChanged} defaultValue={this.props.persona.sleaze}/><br />
        <label htmlFor="dataProcessing">Data Processing:</label>
        <input type="number" id="dataProcessing" onChange={this.dataChanged} defaultValue={this.props.persona.dataProcessing}/><br />
        <label htmlFor="firewall">Firewall:</label>
        <input type="number" id="firewall" onChange={this.dataChanged} defaultValue={this.props.persona.firewall}/><br />
        <label htmlFor="submersion">Submersion Grade:</label>
        <input type="number" id="submersion" onChange={this.dataChanged} defaultValue={this.props.persona.submersion}/><br />
        <label htmlFor="submersion">Submersion Grade:</label>
        <input type="number" id="submersion" onChange={this.dataChanged} defaultValue={this.props.persona.submersion}/><br />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persona);
