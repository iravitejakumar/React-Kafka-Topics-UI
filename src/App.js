import React, { Component } from 'react';
import logo from './kafka.svg';

import './App.css';
import CustomTable from './Table/table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
class App extends Component {

constructor(props){
super(props);
this.state={title:"Hello"};
}

  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
       <AppBar
          title="Kafka Topics UI"
          iconElementLeft={<IconButton><img src={logo}/></IconButton>}
          iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
        />
       <CustomTable/>
       <div>{this.props.children}</div>
      </div>  
        </MuiThemeProvider>  
    );
  }
}

export default App;
