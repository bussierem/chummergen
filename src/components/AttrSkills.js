import React, { Component } from 'react';
// Component imports
import PageSection from './PageSection';
import Attributes from './subcomponents/Attributes';
import Skills from './subcomponents/Skills';

class AttrSkills extends Component {
  render() {
    return (
      <div>
        <PageSection sectionTitle='Attributes'>
          <Attributes />
        </PageSection>
        <PageSection sectionTitle='Skills'>
          <Skills />
        </PageSection>
      </div>
    );
  }
}

export default AttrSkills;
