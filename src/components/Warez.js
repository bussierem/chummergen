import React, { Component } from 'react';
import { connect } from "react-redux";
import { setWarez } from '../actions/index'
// Component imports
import PageSection from './PageSection';

function mapStateToProps(state) {
  return {
    warez: state.warez,
    warez_count: state.warez.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setWarez: warez => dispatch(setWarez(warez)),
  };
};

class Warez extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warez: this.props.warez
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addWarez = this.addWarez.bind(this);
  }

  dataChanged(e) {
    var warez = [];
    var rows = Array.from(document.getElementById('warezDiv').querySelectorAll('tr[id*="warez_"]'));
    rows.forEach((row) =>{
      var warezData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = warezData.reduce((acc, g) => {
        acc[g.id.replace(/(?:warez_\d+_)/, '')] = g.value;
        return acc;
      }, {})
      warez.push(data);
    });
    this.props.setWarez(warez);
  }

  addWarez() {
    this.props.warez.push({
      name: "",
      rating: 0,
      essence: 0.0,
      notes: ""
    });
    this.props.setWarez(this.props.warez);
  }

  render() {
    return (
      <div id="warezDiv">
        <PageSection sectionTitle=''>
          <table className="expandingTable">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Rating</th>
              <th>Essence</th>
              <th>Notes</th>
            </tr>
            {
              this.props.warez.map((c, i) => {
                return (
                  <tr key={i} id={`warez_${i}`}>
                    <td>
                      <button id={`warez_${i}_reorder`} onClick="">=</button>
                    </td>
                    <td>
                      <input type="text" id={`warez_${i}_name`}
                        defaultValue={c.name}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`warez_${i}_rating`}
                        step="0.01" min="0"
                        defaultValue={c.rating}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="number" id={`warez_${i}_essence`}
                        defaultValue={c.essence}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <textarea id={`warez_${i}_notes`}
                        defaultValue={c.notes}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                )
              })
            }
          </table>
          <button id="addWarez" onClick={this.addWarez}>New Item</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Warez);
