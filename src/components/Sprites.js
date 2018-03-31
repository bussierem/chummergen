import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSprites } from '../actions/index';
import SPRITES from '../structs/Sprites';
// Component imports
import PageSection from './PageSection';

function unCamel(str) {
  return str.split('').reduce((acc, cur, i) => {
    if(i === 0) { // start of string
      return acc + cur.toUpperCase();
    } else if(cur === cur.toUpperCase()) { // next word
      return acc + ` ${cur}`;
    } else {
      return acc + cur;
    }
  }, "");
}

function mapStateToProps(state) {
  return {
    sprites: state.sprites,
    sprites_count: state.sprites.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSprites: sprites => dispatch(setSprites(sprites)),
  };
};

class Sprites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprites: this.props.sprites
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addSprites = this.addSprites.bind(this);
  }

  dataChanged(e) {
    var sprites = [];
    var rows = Array.from(document.getElementById('spritesDiv').querySelectorAll('tr[id*="sprite_"]'));
    rows.forEach((row) =>{
      var spritesData = Array.from(document.getElementById(row.id).querySelectorAll('input, textarea'));
      var data = spritesData.reduce((acc, s) => {
        acc[s.id.replace(/(?:sprite_\d+_)/, '')] = s.value;
        return acc;
      }, {})
      sprites.push(data);
    });
    this.props.setSprites(sprites);
  }

  addSprites() {
    this.props.sprites.push({
      type: "",
      registered: false,
      skills: [],
      powers: [],
      attack: 0,
      sleaze: 0,
      dataProcessing: 0,
      firewall: 0,
      init: "",
      res: 0
    });
    this.props.setSprites(this.props.sprites);
  }

  render() {
    var compiledSprites = (sprite, i) => {
      return Object.keys(sprite).filter(
        (k) => {return k !== 'registered'} // skip registered
      ).map((key, x) => { return (
        <div key={x}>
          <label for={`sprite_${i}_key}`}>{unCamel(key)}:</label>
          <label id={`sprite_${i}_key}`}>{sprite[key]}</label>
        </div>
      )})
    };

    var spriteDesc = (name) => {
      return Object.keys(SPRITES[name]).map((prop, i) => {
        return (
          <td key={i}>
          {(
            SPRITES[name][prop].constructor === Array ?
            SPRITES[name][prop].join(", ") :
            SPRITES[name][prop]
          )}
          </td>
        )
      })
    }
    return (
      <div id="spritesContainer">
        <PageSection sectionTitle=''>
          <div id="spritesDiv">
            {
              this.props.sprites.map((sprite, i) => { return (
                <div key={i} id={`sprite_${i}`}>
                  <button id={`sprite_${i}_delete`}>X</button><br/>
                  <label htmlFor={`sprite_${i}_${sprite.registered}`}>Registered:</label>
                  <input type="checkbox" id={`sprite_${i}_${sprite.registered}`}/>
                  {compiledSprites(sprite, i)}
                </div>
              )})
            }
          </div>
          <div id="spriteInfoDiv">
            <table className="spriteInfoTable">
              <tr>
                <th>Type</th>
                <th>Skills</th>
                <th>Powers</th>
                <th>Attack</th>
                <th>Sleaze</th>
                <th>Data Processing</th>
                <th>Firewall</th>
                <th>Init</th>
                <th>RES</th>
              </tr>
              {
                Object.keys(SPRITES).map((name, i) => {
                  return (
                    <tr key={i} id={`${name}_sprite`}>
                    {spriteDesc(name)}
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprites);
