import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Aaryn', age: 22},
      {name: 'Steph', age:33}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //DO NOT DO THIS this.state.persons[0].name = 'Maaaaaan';
    this.setState( {
      persons: [
        {name: 'Maxamillion', age: 48},
        {name: 'Aaryn', age: 19},
        {name: 'Steph', age:35}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!!!</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name="Aaryn" age='28'>My Hobbies: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!'));
  }
}

export default App;
