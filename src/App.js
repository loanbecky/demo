import React, { Component } from 'react';
import Navbar from './components/NavBar'
import Search from './components/Search'
class App extends Component {
  render() {
    return (
      <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
        <Navbar style={{}}/>
        <Search style={{flex: 20}}/>
      </div>
    );
  }
}

export default App;

// them img vao trong the div 


