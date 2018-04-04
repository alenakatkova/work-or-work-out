import React, { Component } from 'react';
import Choice from './Choice';
import Work from './Work';
import WorkOut from './WorkOut';

class App extends Component {
  render() {
    return (
        <div><Choice/> <Work/> <WorkOut/></div> );
  }
}

export default App;
