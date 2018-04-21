import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSpells } from '../actions/index'
// Component imports
import PageSection from './PageSection';
import '../styles/spells.css';

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
          {
            this.props.spells.map((s, i) => {
              return (
                <table key={i} className='cardTable' id={`spell_${i}`} cellpadding="10">
                  <tr>
                    <td className="extra" rowspan="7"><i className='fa fa-reorder' id={`spell_${i}_reorder`}></i></td>
                    <td className="left"><label htmlFor={`spell_${i}_name`}>Name:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_name`}
                        defaultValue={s.name}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_type`}>Type:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_type`}
                        defaultValue={s.type}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_target`}>Target:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_target`}
                        defaultValue={s.target}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_range`}>Range:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_range`}
                        defaultValue={s.range}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_duration`}>Duration:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_duration`}
                        defaultValue={s.duration}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_drain`}>Drain:</label></td>
                    <td className="right">
                      <input type="text" id={`spell_${i}_drain`}
                        defaultValue={s.drain}
                        onChange={this.dataChanged}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="left"><label htmlFor={`spell_${i}_notes`}>Notes:</label></td>
                    <td className="right">
                      <textarea id={`spell_${i}_notes`}
                        defaultValue={s.notes}
                        onChange={this.dataChanged}>
                      </textarea>
                    </td>
                  </tr>
                </table>
              )
            })
          }
          <button id="addSpells" onClick={this.addSpells}>+</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
