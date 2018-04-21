import React, { Component } from 'react';
import { connect } from "react-redux";
import { setPowers } from '../actions/index'
// Component imports
import PageSection from './PageSection';

function mapStateToProps(state) {
  return {
    powers: state.powers,
    powers_count: state.powers.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPowers: powers => dispatch(setPowers(powers)),
  };
};

class Powers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powers: this.props.powers
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addPowers = this.addPowers.bind(this);
  }

  dataChanged(e) {
    var powers = [];
    var rows = Array.from(document.getElementById('powersDiv').querySelectorAll('tr[id*="power_"]'));
    rows.forEach((row) =>{
      var powersData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = powersData.reduce((acc, g) => {
        acc[g.id.replace(/(?:power_\d+_)/, '')] = g.value;
        return acc;
      }, {})
      powers.push(data);
    });
    this.props.setPowers(powers);
  }

  addPowers() {
    this.props.powers.push({
      name: "",
      cost: 0.0,
      rating: 0,
      description: ""
    });
    this.props.setPowers(this.props.powers);
  }

  render() {
    return (
      <div id="powersDiv">
        <PageSection sectionTitle=''>
          <table className="expandingTable">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Rating</th>
              <th>Description</th>
            </tr>
            {
              this.props.powers.map((p, i) => {
                return (
                  <tr key={i} id={`power_${i}`}>
                    <td>
                      <i className='fa fa-reorder' id={`power_${i}_reorder`}></i>
                    </td>
                    <td>
                      <input type="text" id={`power_${i}_name`}
                        defaultValue={p.name}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`power_${i}_cost`}
                        step="0.01" min="0"
                        defaultValue={p.cost}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`power_${i}_rating`}
                        defaultValue={p.rating}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <textarea id={`power_${i}_description`}
                        defaultValue={p.description}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                )
              })
            }
          </table>
          <button id="addPowers" onClick={this.addPowers}>+</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Powers);
