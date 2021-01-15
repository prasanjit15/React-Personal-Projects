import React, { Component } from 'react';
import './App.css';

//Here component and react is imported from react library
/* React is always required for rendering anything to the dom and the component also is required everytime
React calls render() to present/render html to the dom or the screen. 
Actually it is not HTML but JSX under the hood*/

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>Hi, I am a React App</h1>
      </div>
    );
  }
}

//ES6 feature to import whole file we only import the file name
export default App;
