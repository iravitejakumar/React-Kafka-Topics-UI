import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTable from './Table/table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

constructor(props){
super(props);
this.state={title:"Hello"};
}

  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.title}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <CustomTable/>
      </div>  
        </MuiThemeProvider>  
    );
  }
}

export default App;
