import React, { Component } from 'react';
import { connect } from "react-redux";
import { setQualities } from '../actions/index'
// Component imports
import PageSection from './PageSection';

function mapStateToProps(state) {
  return {
    qualities: state.qualities,
    qualities_count: state.qualities.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setQualities: qualities => dispatch(setQualities(qualities)),
  };
};

class Qualities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qualities: this.props.qualities
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addQualities = this.addQualities.bind(this);
  }

  dataChanged(e) {
    var qualities = [];
    var rows = Array.from(document.getElementById('qualitiesDiv').querySelectorAll('tr[id*="quality_"]'));
    rows.forEach((row) =>{
      var qualitiesData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = qualitiesData.reduce((acc, q) => {
        acc[q.id.replace(/(?:quality_\d+_)/, '')] = q.value;
        return acc;
      }, {})
      qualities.push(data);
    });
    this.props.setQualities(qualities);
  }

  addQualities() {
    this.props.qualities.push({
      name: "",
      description: "",
      rating: 0,
      count: 0,
      price: 0
    });
    this.props.setQualities(this.props.qualities);
  }

  render() {
    return (
      <div id="qualitiesDiv">
        <PageSection sectionTitle=''>
        <table className="expandingTable">
          <tr>
            <th></th>
            <th>Type</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
          {
            this.props.qualities.map((q, i) => {
              return (
                <tr key={i} id={`quality_${i}`}>
                  <td>
                    <i className='fa fa-reorder' id={`quality_${i}_reorder`}></i>
                  </td>
                  <td>
                    <input type="radio" name={`quality_${i}_type`}
                      value="pos"
                      defaultChecked={q.type === "pos"}
                      onChange={this.dataChanged}
                    />+
                    <input type="radio" name={`quality_${i}_type`}
                      value="neg"
                      defaultChecked={q.type === "neg"}
                      onChange={this.dataChanged}
                    />-
                  </td>
                  <td>
                    <input type="text" id={`quality_${i}_name`}
                      defaultValue={q.name}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <input type="number" id={`quality_${i}_rating`}
                      defaultValue={q.rating}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <button id={`quality_${i}_delete" onClick="`}>X</button>
                  </td>
                  <button id={`quality_${i}_notes_toggle" onClick="`}>></button>
                  <label htmlFor={`quality_${i}_notes`}>Notes:</label>
                  <textarea id={`quality_${i}_notes`}
                    defaultValue={q.notes}
                    onChange={this.dataChanged}>
                  </textarea>
                </tr>
              )
            })
          }
        </table>
        <button id="addQualities" onClick={this.addQualities}>+</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Qualities);
