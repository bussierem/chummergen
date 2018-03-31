import React, { Component } from 'react';
// Component imports
import PageSection from './PageSection';
import Persona from './subcomponents/Persona';
import ComplexForms from './subcomponents/ComplexForms';

class Technomancer extends Component {
  render() {
    return (
      <div>
        <PageSection sectionTitle='Living Persona'>
          <Persona />
        </PageSection>
        <PageSection sectionTitle='Complex Forms'>
          <ComplexForms />
        </PageSection>
      </div>
    );
  }
}

export default Technomancer;
