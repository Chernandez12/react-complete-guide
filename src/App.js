import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import { render } from '@testing-library/react';

class App extends Component{

  state = {
    persons: [
      {id: 'asdf', name: 'Andre', age: 22},
      {id: 'wasd', name: 'Vanessa', age: 19},
      {id: 'qwerty', name: 'Ziggy', age: 3}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Andre', age: 28 },
        { name: event.target.value, age: 28 },
        { name: 'Ziggy', age: 28 }
      ]
    })
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundCOlor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={index}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a heading'));
    //return React.createElement('div', {className: 'App'}, 'This is not');
  }
}

export default App;
