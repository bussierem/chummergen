import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSkills } from '../../actions/index';

function mapStateToProps(state) {
  return {
    skills: state.skills,
    skill_count: state.skills.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSkills: skills => dispatch(setSkills(skills)),
  };
};

class Skills extends Component {
  constructor(props) {
    super(props);
    this.skills = props.skills;
    this.state = {
      skills: this.props.skills
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addSkills = this.addSkills.bind(this);
  }

  dataChanged(e) {
    var skills = [];
    var rows = Array.from(document.getElementById('skillsDiv').querySelectorAll('tr[id*="skill_"]'));
    rows.forEach((row, i) =>{
      // Main data
      var skillsData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = skillsData.reduce((acc, s, i) => {
        acc[s.id.replace(/(?:skill_\d+_)/, '')] = s.value;
        return acc;
      }, {})
      // Specializations
      var skillSpecsData = Array.from(document.getElementById(`skill_${i}_specs_div`).querySelectorAll('label'));
      data['specializations'] = skillSpecsData.reduce((acc, s) => {
        acc.push(s.innerHTML);
        return acc;
      }, []);
      // Finished
      skills.push(data);
    });
    this.props.setSkills(skills);
  }

  addSkills() {
    this.props.skills.push({
      name: "",
      description: "",
      rating: 0,
      count: 0,
      price: 0,
      specializations: []
    });
    this.props.setSkills(this.props.skills);
  }

  addSpecialization(index) {
    var name = document.getElementById(`skill_${index}_name`).value;
    var specInput = document.getElementById(`skill_${index}_newSpec`);
    var spec = specInput.value;
    this.props.skills.forEach(s => console.log(s));
    var skill = this.props.skills.filter(s => {s.name === name})[0]
    skill['specializations'].push(spec);
    specInput.value = '';
  }

  render() {
    var skillSpecializations = (skill, i) => {
      return skill.specializations.map((spec, c) => {
        return (
          <span>
            <label id={`skill_${i}_spec_${c}`}>{spec}</label><br />
          </span>
        )
      });
    };

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
            this.props.skills.map((c, i) => {
              return (
                <tr key={i} id={`skill_${i}`}>
                  <td>
                    <button id={`skill_${i}_reorder`} onClick="">=</button>
                  </td>
                  <td>
                    <input type="text" id={`skill_${i}_name`} />
                    <div id={`skill_${i}_specs_div`}>
                      {skillSpecializations(c, i)}
                      <input type="text" id={`skill_${i}_newSpec`} />
                      <button id={`skill_${i}_addSpec`}
                      onClick={() => {this.addSpecialization(i)}}
                      >Add Spec</button><br />
                    </div>
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
