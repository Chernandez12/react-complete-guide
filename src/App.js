import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import { render } from '@testing-library/react';

class App extends Component{

  state = {
    persons: [
      {name: 'Andre', age: 22},
      {name: 'Vanessa', age: 19},
      {name: 'Ziggy', age: 3}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    //this.state.persons[0].name = 'Andreius'
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Vanessa', age: 20},
        {name: 'Ziggy', age: 3}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button onClick={() => this.switchNameHandler('ANDRE!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dre!!')}>I like Andre</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a heading'));
    //return React.createElement('div', {className: 'App'}, 'This is not');
  }
}

export default App;
