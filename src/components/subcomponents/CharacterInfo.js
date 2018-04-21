import React, { Component } from 'react';
import { setBaseAttrs, setCharInfo } from '../../actions/index'
import { connect } from "react-redux";
// Constant imports
import METATYPES from '../../structs/Metatype';
// Style
import '../../styles/charInfo.css';

function mapDispatchToProps(dispatch) {
  return {
    setBaseAttrs: baseAttributes => dispatch(setBaseAttrs(baseAttributes)),
    setCharInfo: charInfo => {
      dispatch(setCharInfo(charInfo));
    }
  };
};

function mapStateToProps(state) {
  return {
    charInfo: state.charInfo
  };
}

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metatype: this.props.charInfo.metatype.charAt(0).toUpperCase() + this.props.charInfo.metatype.slice(1),
      characterInfo: this.props.characterInfo
    };
    this.metatypeChange = this.metatypeChange.bind(this);
    this.dataChanged = this.dataChanged.bind(this);
  }

  metatypeChange(e) {
    e.preventDefault();
    var metatype = e.target.value;
    var race = METATYPES[metatype];
    var attrs = Object.keys(race)
                .filter(k => k !== 'racials')
                .map(attr => race[attr]);
    this.props.setBaseAttrs(attrs.reduce((acc, a) => {
      acc[a.name] = a;
      return acc;
    }, {}));
    this.dataChanged({ metatype: metatype });
  }

  dataChanged(base={}) {
    var children = Array.from(document.getElementById('characterInfoDiv').querySelectorAll('input, select'));
    var charInfo = children.reduce((acc, c) => {
      acc[c.id] = c.value;
      return acc;
    }, base);
    this.props.setCharInfo(charInfo);
  }

  render() {
    return (
      <div id='characterInfoDiv'>

        <div className="charContainer1">
          <span className="realNameContainer">
            <label htmlFor="realName">Real Name:</label>
            <input type="text" id="realName" onChange={this.dataChanged} defaultValue={this.props.charInfo.realName}/>
          </span>
          <span className="metatypeContainer">
            <label htmlFor="metatype">Metatype:</label>
            <select id="metatype" onChange={this.metatypeChange} value={this.props.charInfo.metatype}>
              <option id="noMeta" value="">--</option>
              <option id="human" value="human">Human</option>
              <option id="elf" value="elf">Elf</option>
              <option id="dwarf" value="dwarf">Dwarf</option>
              <option id="ork" value="ork">Ork</option>
              <option id="troll" value="troll">Troll</option>
            </select>
          </span>
          <span className="realNameContainer">
            <label htmlFor="streetName">Street Name:</label>
            <input type="text" id="streetName" onChange={this.dataChanged} defaultValue={this.props.charInfo.streetName}/><br />
          </span>
        </div>

        <div className="charContainer2">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" onChange={this.dataChanged} value={this.props.charInfo.gender}>
            <option id="noGender" value="">--</option>
            <option id="male" value="male">Male</option>
            <option id="female" value="female">Female</option>
          </select>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.dataChanged} defaultValue={this.props.charInfo.age}/>
          <label htmlFor="height">Height:</label>
          <input type="text" id="height" onChange={this.dataChanged} defaultValue={this.props.charInfo.height}/>
          <label htmlFor="weight">Weight:</label>
          <input type="text" id="weight" onChange={this.dataChanged} defaultValue={this.props.charInfo.weight}/>
        </div>

        <label htmlFor="streetCred">Street Cred:</label>
        <input type="number" id="streetCred" onChange={this.dataChanged} defaultValue={this.props.charInfo.streetCred}/><br />
        <label htmlFor="notoriety">Notoriety:</label>
        <input type="number" id="notoriety" onChange={this.dataChanged} defaultValue={this.props.charInfo.notoriety}/><br />
        <label htmlFor="publicAwareness">Public Awareness:</label>
        <input type="number" id="publicAwareness" onChange={this.dataChanged} defaultValue={this.props.charInfo.publicAwareness}/><br />
        <label htmlFor="karma">Karma:</label>
        <div id="karma" style={{display:'inline'}}>
          <input type="text" id="karmaCurrent" onChange={this.dataChanged} defaultValue={this.props.charInfo.karmaCurrent}/>/
          <input type="text" id="karmaTotal" onChange={this.dataChanged} defaultValue={this.props.charInfo.karmaTotal}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfo);
