import React, { Component } from 'react';
import { connect } from "react-redux";
import { setDrones } from '../actions/index'
// Component imports
import PageSection from './PageSection';

function mapStateToProps(state) {
  return {
    drones: state.drones,
    drones_count: state.drones.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDrones: drones => dispatch(setDrones(drones)),
  };
};

class Rigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drones: this.props.drones
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addDrones = this.addDrones.bind(this);
  }

  dataChanged(e) {
    var drones = [];
    var rows = Array.from(document.getElementById('dronesDiv').querySelectorAll('tr[id*="drones_"]'));
    rows.forEach((row) =>{
      var dronesData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = dronesData.reduce((acc, d) => {
        acc[d.id.replace(/(?:drones_\d+_)/, '')] = d.value;
        return acc;
      }, {})
      drones.push(data);
    });
    this.props.setDrones(drones);
  }

  addDrones() {
    this.props.drones.push({
      name: "",
      pilot: 0,
      body: 0,
      armor: 0,
      speed: 0,
      accel: 0,
      handling: 0,
      sensor: 0,
      notes: ""
    });
    this.props.setDrones(this.props.drones);
  }

  render() {
    return (
      <div id="dronesDiv">
        <PageSection sectionTitle=''>
          <table className="expandingTable">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pilot</th>
              <th>Body</th>
              <th>Armor</th>
              <th>Speed</th>
              <th>Accel</th>
              <th>Handling</th>
              <th>Sensor</th>
              <th>Notes</th>
            </tr>
            {
              this.props.drones.map((c, i) => {
                return (
                  <tr key={i} id={`drones_${i}`}>
                    <td>
                      <button id="drones_0_reorder" onClick="">=</button>
                    </td>
                    <td>
                      <input type="text" id="drones_0_name"
                        defaultValue={c.name}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_pilot"
                        defaultValue={c.pilot}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_body"
                        defaultValue={c.body}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_armor"
                        defaultValue={c.armor}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_speed"
                        defaultValue={c.speed}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_accel"
                        defaultValue={c.accel}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_handling"
                        defaultValue={c.handling}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id="drones_0_sensor"
                        defaultValue={c.sensor}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <textarea id="drones_0_notes"
                        defaultValue={c.notes}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                )
              })
            }
          </table>
          <button id="addDrones" onClick={this.addDrones}>New Item</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rigger);
