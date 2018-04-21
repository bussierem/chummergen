import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.warez = "'Warez";
  }

  render() {
    return (
      <div className="nav">
        <Link onClick={this.props.onSelect} to='/notes'><div className="navButton" id="notesNav">Notes</div></Link><br />
        <Link onClick={this.props.onSelect} to='/personalInfo'><div className="navButton" id="personalInfoNav">Personal Info</div></Link>
        <Link onClick={this.props.onSelect} to='/qualities'><div className="navButton" id="qualitiesNav">Qualities</div></Link>
        <Link onClick={this.props.onSelect} to='/attrSkills'><div className="navButton" id="attrSkillsNav">Attributes & Skills</div></Link>
        <Link onClick={this.props.onSelect} to='/contacts'><div className="navButton" id="contactsNav">Contacts</div></Link>
        <Link onClick={this.props.onSelect} to='/gear'><div className="navButton" id="gearNav">Gear</div></Link>
        <Link onClick={this.props.onSelect} to='/spellcasting'><div className="navButton" id="spellNav">Spellcasting</div></Link>
        <Link onClick={this.props.onSelect} to='/summoning'><div className="navButton" id="summoningNav">Summoning</div></Link>
        <Link onClick={this.props.onSelect} to='/adept'><div className="navButton" id="adeptNav">Adept Powers</div></Link>
        <Link onClick={this.props.onSelect} to='/technomancer'><div className="navButton" id="technoNav">Technomancer</div></Link>
        <Link onClick={this.props.onSelect} to='/compiling'><div className="navButton" id="compilingNav">Compiling</div></Link>
        <Link onClick={this.props.onSelect} to='/warez'><div className="navButton" id="warezNav">{this.warez}</div></Link>
        <Link onClick={this.props.onSelect} to='/decker'><div className="navButton" id="deckerNav">Decker</div></Link>
        <Link onClick={this.props.onSelect} to='/rigger'><div className="navButton" id="riggerNav">Rigger</div></Link>
        <Link onClick={this.props.onSelect} to='/settings'><div className="navButton" id="settingsNav">App Settings</div></Link>
      </div>
    );
  }
}

export default Sidebar;
