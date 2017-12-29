import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!!!</h1>
        <p>This is working.</p>
        <Person name="Max" age="28" />
        <Person name="Aaryn" age='28'>My Hobbies: Racing</Person>
        <Person name="Jeff" age='32'/>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!'));
  }
}

export default App;
