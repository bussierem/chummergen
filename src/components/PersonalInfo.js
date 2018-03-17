import React, { Component } from 'react';
// Component imports
import PageSection from './PageSection';
import CharacterInfo from './subcomponents/CharacterInfo';
import Lifestyle from './subcomponents/Lifestyle';

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
