import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  render() {

    return (
      <main className='main-container'>
        <h1 className='main-container__header'>
        Business Sign up  
        </h1>
        <Form />
      </main>
    );
  }
}

export default App;
