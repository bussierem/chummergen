import React, { Component } from 'react';
import { connect } from "react-redux";
import { setGear } from '../actions/index'
// Component imports
import PageSection from './PageSection';
// Styles
import '../styles/tables.css';

function mapStateToProps(state) {
  return {
    gear: state.gear,
    gear_count: state.gear.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGear: gear => dispatch(setGear(gear)),
  };
};

class Gear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gear: this.props.gear
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addGear = this.addGear.bind(this);
  }

  dataChanged(e) {
    var gear = [];
    var rows = Array.from(document.getElementById('gearDiv').querySelectorAll('tr[id*="gear_"]'));
    rows.forEach((row) =>{
      var gearData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = gearData.reduce((acc, g) => {
        acc[g.id.replace(/(?:gear_\d+_)/, '')] = g.value;
        return acc;
      }, {})
      gear.push(data);
    });
    this.props.setGear(gear);
  }

  addGear() {
    this.props.gear.push({
      name: "",
      description: "",
      rating: 0,
      count: 0,
      price: 0
    });
    this.props.setGear(this.props.gear);
  }

  render() {
    return (
      <div id="gearDiv">
        <PageSection sectionTitle=''>
          <table className="expandingTable">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Rating</th>
                <th>Count</th>
                <th>Price ( ¥ )</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.gear.map((c, i) => {
                return (
                  <tr key={i} id={`gear_${i}`}>
                    <td>
                      <i className='fa fa-reorder' id={`gear_${i}_reorder`}></i>
                    </td>
                    <td>
                      <input type="text" id={`gear_${i}_name`}
                        defaultValue={c.name}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`gear_${i}_rating`}
                        defaultValue={c.rating}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`gear_${i}_count`}
                        defaultValue={c.count}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`gear_${i}_price`}
                        defaultValue={c.price}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <textarea id={`gear_${i}_description`}
                        defaultValue={c.description}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          <button id="addGear" onClick={this.addGear}>+</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gear);
