import React, { Component } from 'react';
import { setComplexForms } from '../../actions/index'
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    complexForms: state.complexForms,
    cf_count: state.complexForms.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setComplexForms: complexForms => dispatch(setComplexForms(complexForms)),
  };
};

class ComplexForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complexForms: this.props.complexForms
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addComplexForms = this.addComplexForms.bind(this);
  }

  dataChanged(base={}) {
    var complexForms = [];
    var rows = Array.from(document.getElementById('complexFormsDiv').querySelectorAll('tr[id*="complexForm_"]'));
    rows.forEach((row) =>{
      var cfData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = cfData.reduce((acc, cf) => {
        acc[cf.id.replace(/(?:complexForm_\d+_)/, '')] = cf.value;
        return acc;
      }, {})
      complexForms.push(data);
    });
    this.props.setComplexForms(complexForms);
  }

  addComplexForms() {
    this.props.complexForms.push({
      name: "",
      target: "",
      duration: "",
      fade: "",
      description: ""
    });
    this.props.setComplexForms(this.props.complexForms);
  }

  render() {
    return (
      <div id="complexFormsDiv">
        <table className="expandingTable">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Target</th>
            <th>Duration</th>
            <th>Fade</th>
            <th>Description</th>
          </tr>
          {
            this.props.complexForms.map((cf, i) => {
              return (
                <tr key={i} id={`complexForm_${i}`}>
                  <td>
                    <i className='fa fa-reorder' id={`complexForm_${i}_reorder`}></i>
                  </td>
                  <td>
                    <input type="text" id={`complexForm_${i}_name`}
                      defaultValue={cf.name}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <input type="text" id={`complexForm_${i}_target`}
                      defaultValue={cf.target}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <input type="text" id={`complexForm_${i}_duration`}
                      defaultValue={cf.duration}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <input type="text" id={`complexForm_${i}_fade`}
                      defaultValue={cf.fade}
                      onChange={this.dataChanged}/>
                  </td>
                  <td>
                    <textarea id={`complexForm_${i}_description`}
                      defaultValue={cf.description}
                      onChange={this.dataChanged}>
                    </textarea>
                  </td>
                </tr>
              )
            })
          }
        </table>
        <button id="addComplexForms" onClick={this.addComplexForms}>+</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplexForms);
