import React, { Component } from 'react';
import 'waypoints/lib/noframework.waypoints.js';
import Content from '../Content/Content';
import Header from '../Header/Header';
import './App.scss';

class App extends Component {
  state = {
    currentSection: 0
  }

  setSection = section => this.setState({ currentSection: section })
  
  render() {
    const { currentSection } = this.state;

    return (
      <div>
        <Header currentSection={currentSection} setSection={this.setSection} />
        <Content currentSection={currentSection} setSection={this.setSection} />
      </div>
    );
  }
}

export default App;
