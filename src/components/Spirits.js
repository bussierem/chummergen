import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSpirits } from '../actions/index';
import SPIRITS from '../structs/Spirits';
// Component imports
import PageSection from './PageSection';

function unCamel(str) {
  return str.split('').reduce((acc, cur, i) => {
    if(i === 0) { // start of string
      return acc + cur.toUpperCase();
    } else if(cur === cur.toUpperCase()) { // next word
      return acc + ` ${cur}`;
    } else {
      return acc + cur;
    }
  }, "");
}

function mapStateToProps(state) {
  return {
    spirits: state.spirits,
    spirits_count: state.spirits.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpirits: spirits => dispatch(setSpirits(spirits)),
  };
};

class Spirits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spirits: this.props.spirits
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addSpirits = this.addSpirits.bind(this);
  }

  dataChanged(e) {
    var spirits = [];
    var rows = Array.from(document.getElementById('spiritsDiv').querySelectorAll('tr[id*="spirit_"]'));
    rows.forEach((row) =>{
      var spiritsData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = spiritsData.reduce((acc, g) => {
        acc[g.id.replace(/(?:spirit_\d+_)/, '')] = g.value;
        return acc;
      }, {})
      spirits.push(data);
    });
    this.props.setSpirits(spirits);
  }

  addSpirits() {
    this.props.spirits.push({
      type: "",
      bound: false,
      skills: [],
      powers: [],
      optionalPowers: [],
      str: "",
      agi: "",
      rea: "",
      bod: "",
      wil: "",
      int: "",
      log: "",
      cha: "",
      edg: "",
      ess: "",
      mag: "",
      physicalInit: "",
      astralInit: ""
    });
    this.props.setSpirits(this.props.spirits);
  }

  render() {
    var summonedSpirits = (spirit, i) => {
      return Object.keys(spirit).filter(
        (k) => {return k !== 'bound'} // skip bound
      ).map((key, x) => { return (
        <div key={x}>
          <label for={`spirit_${i}_${key}`}>{unCamel(key)}:</label>
          <label id={`spirit_${i}_${key}`}>{spirit[key]}</label>
        </div>
      )})
    };

    var spiritDesc = (type) => {
      return Object.keys(SPIRITS[type]).map((prop, i) => {
        return (
          <td key={i}>
          {(
            SPIRITS[type][prop].constructor === Array ?
            SPIRITS[type][prop].join(", ") :
            SPIRITS[type][prop]
          )}
          </td>
        )
      })
    }
    return (
      <div id="spiritsContainer">
        <PageSection sectionTitle=''>
          <div id="spiritsDiv">
            {
              this.props.spirits.map((spirit, i) => { return (
                <div key={i} id={`spirit_${i}`}>
                  <button id={`spirit_${i}_delete`}>X</button><br/>
                  <label htmlFor={`spirit_${i}_${spirit.bound}`}>Bound:</label>
                  <input type="checkbox" id={`spirit_${i}_${spirit.bound}`}/>
                  {summonedSpirits(spirit, i)}
                </div>
              )})
            }
          </div>
          <div id="spiritInfoDiv">
            <table className="spiritInfoTable">
              <tr>
                <th>Type</th>
                <th>Skills</th>
                <th>Powers</th>
                <th>Optional Powers</th>
                <th>STR</th>
                <th>AGI</th>
                <th>REA</th>
                <th>BOD</th>
                <th>WIL</th>
                <th>INT</th>
                <th>LOG</th>
                <th>CHA</th>
                <th>EDG</th>
                <th>ESS</th>
                <th>MAG</th>
                <th>Physical Init</th>
                <th>Astral Init</th>
              </tr>
              {
                Object.keys(SPIRITS).map((type, i) => {
                  return (
                    <tr key={i} id={`${type}_spirit`}>
                    {spiritDesc(type)}
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spirits);
