import React, { Component } from 'react';
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

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DO NOT DO THIS this.state.persons[0].name = 'Maaaaaan';
    this.setState( {
      persons: [
        {name: newName, age: 48},
        {name: 'Aaryn B', age: 19},
        {name: 'Steph', age:35}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Max', age: 48},
        {name: event.target.value, age: 19},
        {name: 'Steph', age:35}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi!!!</h1>
        <p>This is working.</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maxamillion')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}  />
        <Person
          name="Aaryn"
          age='28'
          //bind syntax is better for performance
          click={this.switchNameHandler.bind(this, 'Max!')}
          >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}  />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!'));
  }
}

export default App;
