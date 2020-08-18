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

  switchNameHandler = () => {
    //console.log("was clicked!");
    //this.state.persons[0].name = 'Andreius'
    this.setState({
      persons: [
        {name: 'Andre', age: 23},
        {name: 'Vanessa', age: 20},
        {name: 'Ziggy', age: 4}
      ]
    
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a heading'));
    //return React.createElement('div', {className: 'App'}, 'This is not');
  }
}

export default App;
