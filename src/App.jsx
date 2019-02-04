import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Routes from './routes';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);
