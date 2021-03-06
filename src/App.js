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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id  === id;
    });  

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
              key={index}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      // style.backgroundColor = 'maroon';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1){ 
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is a paragraph</p>
        <button className="button" onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a heading'));
    //return React.createElement('div', {className: 'App'}, 'This is not');
  }
}

export default App;
