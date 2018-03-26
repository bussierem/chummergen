import React, { Component } from 'react';
// Component imports
import PageSection from './PageSection';
import Cyberdeck from './subcomponents/Cyberdeck';
import Programs from './subcomponents/Programs';

class Decker extends Component {
  render() {
    return (
      <div>
        <PageSection sectionTitle='Cyberdeck'>
          <Cyberdeck />
        </PageSection>
        <PageSection sectionTitle='Programs'>
          <Programs />
        </PageSection>
      </div>
    );
  }
}

export default Decker;
