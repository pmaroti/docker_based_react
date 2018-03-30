/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App.js';
import MaterialTrackTable from './components/MaterialTrackTable.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


//ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
ReactDOM.render(<MuiThemeProvider><MaterialTrackTable/></MuiThemeProvider>, document.getElementById('root'));