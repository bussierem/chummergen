import React, { Component } from 'react';
import { connect } from "react-redux";
import { setContacts } from '../actions/index'
// Component imports
import PageSection from './PageSection';


function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    contact_count: state.contacts.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setContacts: contacts => dispatch(setContacts(contacts)),
  };
};

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };

    this.dataChanged = this.dataChanged.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  dataChanged(e) {
    var contacts = [];
    var children = Array.from(document.getElementById('contactsDiv').querySelectorAll('div[id*="contact_"]'));
    children.forEach((child) =>{
      var contactData = Array.from(document.getElementById(child.id).querySelectorAll('input, textarea'));
      var data = contactData.reduce((acc, cd) => {
        acc[cd.id.replace(/(?:contact_\d+_)/, '')] = cd.value;
        return acc;
      }, {})
      contacts.push(data);
    });
    this.props.setContacts(contacts);
  }

  addContact() {
    this.props.contacts.push({
      name: "",
      connection: 0,
      loyalty: 0,
      notes: "",
    });
    this.props.setContacts(this.props.contacts);
  }

  render() {
    return (
      <div id="contactsDiv">
        <PageSection sectionTitle=''>
          {
            this.props.contacts.map((c, i) => {
              return (
                <div key={i} id={`contact_${i}`}>
                  <label htmlFor="contact_0_name">Name:</label>
                  <input type="text" id="contact_0_name"
                    defaultValue={c.name}
                    onChange={this.dataChanged}/>
                  <label htmlFor="contact_0_conn">Connection:</label>
                  <input type="number" id="contact_0_conn"
                    defaultValue={c.connection}
                    onChange={this.dataChanged}/>
                  <label htmlFor="contact_0_loyal">Loyalty:</label>
                  <input type="number" id="contact_0_loyal"
                    defaultValue={c.loyalty}
                    onChange={this.dataChanged}/><br />
                  <label htmlFor="contact_0_notes">Notes:</label>
                  <textarea id="contact_0_notes"
                    defaultValue={c.notes}
                    onChange={this.dataChanged}>
                  </textarea>
                </div>
              )
            })
          }
          <br/><button id="addContact" onClick={this.addContact}>New Contact</button>
        </PageSection>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
