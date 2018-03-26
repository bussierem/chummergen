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
          <tr>
            <td>
              <button id="skill_0_reorder" onClick="">=</button>
            </td>
            <td>
              <input type="text" id="skill_0_name" />
            </td>
            <td>
              <label id="skill_0_group">None</label>
            </td>
            <td>
              <input type="number" id="skill_0_rating" />
            </td>
            <td>
              <select id="skill_0_attr">
                <optgroup label="Physical" id="skill_0_attr_phys">
                  <option value="STR">STR</option>
                  <option value="AGI">AGI</option>
                  <option value="REA">REA</option>
                  <option value="BOD">BOD</option>
                </optgroup>
                <optgroup label="Mental" id="skill_0_attr_ment">
                  <option value="WIS">WIS</option>
                  <option value="INT">INT</option>
                  <option value="LOG">LOG</option>
                  <option value="CHA">CHA</option>
                </optgroup>
                <optgroup label="Special" id="skill_0_attr_spec">
                  <option value="MAG">MAG</option>
                  <option value="RES">RES</option>
                </optgroup>
              </select>
            </td>
            <td>
              <input type="radio" name="skill_0_type" value="A" />A
              <input type="radio" name="skill_0_type" value="K" />K
              <input type="radio" name="skill_0_type" value="L" />L
            </td>
            <td>
              <button id="skill_0_delete" onClick="">X</button>
            </td>
          </tr>
          <button id="skill_0_addSpec" onClick="">Spec</button><br />
          <input type="text" id="skill_0_spec_0" /> | +2
        </table>
        <button id="addSkill" onClick="">New Skill</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
