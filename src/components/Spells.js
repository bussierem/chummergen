import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSpells } from '../actions/index'
// Component imports
import PageSection from './PageSection';

function mapStateToProps(state) {
  return {
    spells: state.spells,
    spells_count: state.spells.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpells: spells => dispatch(setSpells(spells)),
  };
};

class Spells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: this.props.spells
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addSpells = this.addSpells.bind(this);
  }

  dataChanged(e) {
    var spells = [];
    var rows = Array.from(document.getElementById('spellsDiv').querySelectorAll('tr[id*="spell_"]'));
    rows.forEach((row) =>{
      var spellsData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = spellsData.reduce((acc, g) => {
        acc[g.id.replace(/(?:spell_\d+_)/, '')] = g.value;
        return acc;
      }, {})
      spells.push(data);
    });
    this.props.setSpells(spells);
  }

  addSpells() {
    this.props.spells.push({
      name: "",
      type: "",
      target: "",
      range: "",
      duration: "",
      drain: "",
      notes: ""
    });
    this.props.setSpells(this.props.spells);
  }

  render() {
    return (
      <div id="spellsDiv">
        <PageSection sectionTitle=''>
          <table className="expandingTable">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Target</th>
              <th>Range</th>
              <th>Duration</th>
              <th>Drain</th>
              <th>Notes</th>
            </tr>
            {
              this.props.spells.map((s, i) => {
                return (
                  <tr key={i} id={`spell_${i}`}>
                    <td>
                      <button id={`spell_${i}_reorder`}
                      onClick="">=</button>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_name`}
                        defaultValue={s.name}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_type`}
                        defaultValue={s.type}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_target`}
                        defaultValue={s.target}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_range`}
                        defaultValue={s.range}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_duration`}
                        defaultValue={s.duration}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <input type="text" id={`spell_${i}_drain`}
                        defaultValue={s.drain}
                        onChange={this.dataChanged}/>
                    </td>
                    <td>
                      <textarea id={`spell_${i}_notes`}
                        defaultValue={s.notes}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                )
              })
            }
          </table>
          <button id="addSpells" onClick={this.addSpells}>New Item</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
