import React, { Component } from 'react';
// Component imports
import PageSection from './PageSection';
import CharacterInfo from './subcomponents/CharacterInfo';

class Lifestyle extends Component {
  render() {
    return (
      <div>
        <label htmlFor="lifestyle_type">Type:</label>
        <select id="lifestyle_type">
          <option value="street">Street</option>
          <option value="squatter">Squatter</option>
          <option value="low">Low</option>
          <option value="middle">Middle</option>
          <option value="high">High</option>
          <option value="luxury">Luxury</option>
        </select><br />
        <label htmlFor="lifestyle_loc">Location:</label>
        <input type="text" id="lifestyle_loc" /><br />
        <label htmlFor="lifestyle_paidMonths">Months Paid:</label>
        <input type="number" id="lifestyle_paidMonths" /><br />
        <label htmlFor="lifestyle_cost">Cost:</label>
        <input type="text" disabled id="lifestyle_cost" />
      </div>
    );
  }
}

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <PageSection sectionTitle='Character'>
          <CharacterInfo/>
        </PageSection>
        <PageSection sectionTitle='Lifestyle'>
          <Lifestyle/>
        </PageSection>
      </div>
    );
  }
}

export default PersonalInfo;
