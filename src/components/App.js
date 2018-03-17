import React, { Component } from 'react';
import '../styles/App.css';
import { Route } from 'react-router'
// Component imports
import Sidebar from './Sidebar';
import PersonalInfo from './PersonalInfo'
import AttrSkills from './AttrSkills'

/* Boilerplate for page
class _ extends Component {
  render() {
    return (
      <PageSection sectionTitle=''>

      </PageSection>
    );
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    var url = window.location.href.split('/')[3] || "personalInfo";
    this.state = {
      currentPage: {
        personalInfo: "Personal Info",
        attrSkills: "Attributes & Skills",
        adept: "Adept Powers",
        warez: "'Warez",
        settings: "App Settings"
      }[url] || url.charAt(0).toUpperCase() + url.slice(1),
    }

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(e) {
    var title = e.target.innerText;
    document.cookie = `title=${title}`;
    this.setState({ currentPage: title });
  }


  render() {
    return (
      <div className="App">
        <Sidebar onSelect={this.changeTitle}/>
        <header className="App-header main">
          <h1 className="App-title">{this.state.currentPage}</h1>
        </header>
        <div className="main content">
          <Route exact path='/' component={PersonalInfo}/>
          <Route exact path='/personalInfo' component={PersonalInfo}/>
          <Route exact path='/attrSkills' component={AttrSkills}/>
        </div>
      </div>
    );
  }
}

/*
<Sidebar docked sidebar={sidebarContent.render()}
         styles={sidebarStyles}>
</Sidebar>

  <Route exact path='/notes' component={Notes}/>
  <Route exact path='/qualities' component={Qualities}/>
  <Route exact path='/contacts' component={Contacts}/>
  <Route exact path='/gear' component={Gear}/>
  <Route exact path='/spellcasting' component={Spellcasting}/>
  <Route exact path='/summoning' component={Summoning}/>
  <Route exact path='/adept' component={Adept}/>
  <Route exact path='/technomancer' component={Technomancer}/>
  <Route exact path='/warez' component={Warez}/>
  <Route exact path='/decker' component={Decker}/>
  <Route exact path='/rigger' component={Rigger}/>
  <Route exact path='/settings' component={Settings}/>
*/

export default App;
