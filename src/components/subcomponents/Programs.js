import React, { Component } from 'react';
import { connect } from "react-redux";
import { setPrograms } from '../../actions/index'

function mapDispatchToProps(dispatch) {
  return {
    setPrograms: programs => dispatch(setPrograms(programs)),
  };
};

function mapStateToProps(state) {
  return {
    programs: state.programs,
    program_count: state.programs.length
  };
}

class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: this.props.programs
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addProgram = this.addProgram.bind(this);
  }

  dataChanged(e) {
    var programs = [];
    var rows = Array.from(document.getElementById('programsDiv').querySelectorAll('tr[id*="program_"]'));
    rows.forEach((row) =>{
      var programData = Array.from(document.getElementById(row.id).querySelectorAll('input, select, textarea'));
      var data = programData.reduce((acc, p) => {
        acc[p.id.replace(/(?:program_\d+_)/, '')] = p.value;
        return acc;
      }, {})
      programs.push(data);
    });
    this.props.setPrograms(programs);
  }

  addProgram() {
    this.props.program.push({
      running: false,
      name: "",
      type: "",
      description: ""
    });
    this.props.setPrograms(this.props.programs);
  }

  render() {
    return (
      <div id="programsDiv">
        <table className="expandingTable">
          <tr>
            <th></th>
            <th>Loaded?</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          {
            this.props.programs.map((p, i) => {
              return (
                <tr key={i} id={`program_${i}`}>
                  <td>
                    <input type="checkbox" id="program_0_loaded"
                      defaultValue={p.loaded}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <input type="text" id="program_0_name"
                      defaultValue={p.name}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                  <select id="program_0_type" onChange={this.dataChanged} defaultValue={p.type}>
                    <option value="Common">Common</option>
                    <option value="Hacking">Hacking</option>
                  </select>
                  </td>
                  <td>
                    <textarea id="program_0_description"
                      defaultValue={p.description}
                      onChange={this.dataChanged}>
                    </textarea>
                  </td>
                </tr>
              )
            })
          }
        </table>
        <button id="addProgram" onClick="">New Program</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Programs);
