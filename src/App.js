import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import Joke from './component/Joke';
import Data from './component/Data';

class App extends Component {
  constructor() {
    super() 
    this.state = {
        todos: Data,
        isLogged: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(id){
      this.setState(prevState => {
          const updateTodos = prevState.todos.map(todo => {
              if(todo.id === id)
                todo.completed = !todo.completed;
              return todo; 
          })
          return updateTodos;
      })
  }

  handleClick(){
    this.setState({isLogged: !this.state.isLogged})
  }

  render() {
    const DataComponent = this.state.todos.map(data => <MainContent key={data.id} mainContent={data} onchange={this.handleChange} />)
    return (
      <div>
        <Navbar />
        {DataComponent}
        <Footer />
        {/* <h3>{this.state.isLogged ? 'Logged In' : 'Logged Out'}</h3>
        <button onClick={this.handleClick}>Click here</button> */}
      </div>
    );
  }
}

export default App;
