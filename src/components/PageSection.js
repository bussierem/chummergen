import React, { Component } from 'react';

class PageSection extends Component {
  render() {
    return (
      <div className="sectionContainer">
        <div className="sectionTitleContainer">
          <p className="sectionTitle">{this.props.sectionTitle}</p>
        </div>
        <div className="sectionForm">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PageSection;
