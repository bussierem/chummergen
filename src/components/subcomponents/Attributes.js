import React, { Component } from 'react';
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    attributes: state.attributes
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
};

class Attributes extends Component {
  constructor(props) {
    super(props);
    this.attrs = props.attributes;
    this.state = {};
  }

  render() {
    return (
      <div>
        PHYSICAL<br  />
        <label htmlFor="STR">Strength (STR):</label>
        <input type="number" id="STR" value={this.attrs.STR.base} />
        <label id="augSTR" htmlFor="STR">({this.attrs.STR.max})</label> |
        <label id="maxSTR" htmlFor="STR">{this.attrs.STR.max}</label><br />

        <label htmlFor="AGI">Agility (AGI):</label>
        <input type="number" id="AGI" value={this.attrs.AGI.base} />
        <label id="augAGI" htmlFor="AGI">({this.attrs.AGI.max})</label> |
        <label id="maxAGI" htmlFor="AGI">{this.attrs.AGI.max}</label><br />

        <label htmlFor="REA">Reaction (REA):</label>
        <input type="number" id="REA" value={this.attrs.REA.base} />
        <label id="augREA" htmlFor="REA">({this.attrs.REA.max})</label> |
        <label id="maxREA" htmlFor="REA">{this.attrs.REA.max}</label><br />

        <label htmlFor="BOD">Body (BOD):</label>
        <input type="number" id="BOD" value={this.attrs.BOD.base} />
        <label id="augBOD" htmlFor="BOD">({this.attrs.BOD.max})</label> |
        <label id="maxBOD" htmlFor="BOD">{this.attrs.BOD.max}</label><br />

        MENTAL<br  />
        <label htmlFor="WIS">Wisdom (WIS):</label>
        <input type="number" id="WIS" value={this.attrs.WIS.base} />
        <label id="augWIS" htmlFor="WIS">({this.attrs.WIS.max})</label> |
        <label id="maxWIS" htmlFor="WIS">{this.attrs.WIS.max}</label><br />

        <label htmlFor="INT">Intuition (INT):</label>
        <input type="number" id="INT" value={this.attrs.INT.base} />
        <label id="augINT" htmlFor="INT">({this.attrs.INT.max})</label> |
        <label id="maxINT" htmlFor="INT">{this.attrs.INT.max}</label><br />

        <label htmlFor="LOG">Logic (LOG):</label>
        <input type="number" id="LOG" value={this.attrs.LOG.base} />
        <label id="augLOG" htmlFor="LOG">({this.attrs.LOG.max})</label> |
        <label id="maxLOG" htmlFor="LOG">{this.attrs.LOG.max}</label><br />

        <label htmlFor="CHA">Charisma (CHA):</label>
        <input type="number" id="CHA" value={this.attrs.CHA.base} />
        <label id="augCHA" htmlFor="CHA">({this.attrs.CHA.max})</label> |
        <label id="maxCHA" htmlFor="CHA">{this.attrs.CHA.max}</label><br />

        LIMITS<br  />
        <label htmlFor="physicalLim">Physical:</label>
        <input type="number" id="physicalLim" /><br />

        <label htmlFor="mentalLim">Mental:</label>
        <input type="number" id="mentalLim" /><br />

        <label htmlFor="socialLim">Social:</label>
        <input type="number" id="socialLim" /><br />

        SPECIAL<br  />
        <label htmlFor="EDG">Edge (EDG):</label>
        <input type="number" id="EDG" value={this.attrs.EDG.base} /> |
        <label id="maxEDG" htmlFor="EDG">{this.attrs.EDG.max}</label><br />

        <label htmlFor="ESS">Essence (ESS):</label>
        <input type="number" id="ESS" value={this.attrs.ESS.base} /> |
        <label id="maxESS" htmlFor="ESS">{this.attrs.ESS.max}</label><br />

        <label htmlFor="MAG">Magic (MAG):</label>
        <input type="number" id="MAG" value={this.attrs.MAG.base} /> |
        <label id="maxMAG" htmlFor="MAG">{this.attrs.MAG.max}</label><br />

        <label htmlFor="RES">Resonance (RES):</label>
        <input type="number" id="RES" value={this.attrs.RES.base} /> |
        <label id="maxRES" htmlFor="RES">{this.attrs.RES.max}</label><br />

        <label htmlFor="PP">Power Points (PP):</label>
        <input type="number" id="PP" value={this.attrs.PP.base} /> |
        <label id="maxPP" htmlFor="PP">{this.attrs.PP.max}</label><br />

        DERIVED<br  />
        <label htmlFor="composure">Composure:</label>
        <input type="number" id="composure" /><br />

        <label htmlFor="judgeIntent">Judge Intentions:</label>
        <input type="number" id="judgeIntent" /><br />

        <label htmlFor="memory">Memory:</label>
        <input type="number" id="memory" /><br />

        <label htmlFor="liftCarry">Lift/Carry:</label>
        <input type="number" id="liftCarry" /><br />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
