import React, { Component } from 'react';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {

  };
};

function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.skills = props.skills;
    this.state = {};
  }

  render() {
    return (
      <div id="skillsDiv">
        <table className="expandingTable">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Group</th>
            <th>Rating</th>
            <th>Attribute</th>
            <th>Type</th>
          </tr>
          {
            this.props.gear.map((c, i) => {
              return (
                <tr key={i} id={`skill_${i}`}>
                  <td>
                    <button id={`skill_${i}_reorder`} onClick="">=</button>
                  </td>
                  <td>
                    <input type="text" id={`skill_${i}_name`} />
                  </td>
                  <td>
                    <label id={`skill_${i}_group`}>None</label>
                  </td>
                  <td>
                    <input type="number" id={`skill_${i}_rating`} />
                  </td>
                  <td>
                    <select id={`skill_${i}_attr`}>
                      <optgroup label="Physical" id={`skill_${i}_attr_phys`}>
                        <option value="STR">STR</option>
                        <option value="AGI">AGI</option>
                        <option value="REA">REA</option>
                        <option value="BOD">BOD</option>
                      </optgroup>
                      <optgroup label="Mental" id={`skill_${i}_attr_ment`}>
                        <option value="WIS">WIS</option>
                        <option value="INT">INT</option>
                        <option value="LOG">LOG</option>
                        <option value="CHA">CHA</option>
                      </optgroup>
                      <optgroup label="Special" id={`skill_${i}_attr_spec`}>
                        <option value="MAG">MAG</option>
                        <option value="RES">RES</option>
                      </optgroup>
                    </select>
                  </td>
                  <td>
                    <input type="radio" name={`skill_${i}_type`} value="A" />A
                    <input type="radio" name={`skill_${i}_type`} value="K" />K
                    <input type="radio" name={`skill_${i}_type`} value="L" />L
                  </td>
                  <td>
                    <button id={`skill_${i}_delete`} onClick="">X</button>
                  </td>
                  <td>
                    <button id={`skill_${i}_addSpec`} onClick="">Spec</button><br />
                    <input type="text" id={`skill_${i}_spec_0`} /> | +2
                  </td>
                </tr>
              )
            })
          }
        </table>
        <button id="addSkill" onClick="">New Skill</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
