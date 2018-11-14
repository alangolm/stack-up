import React, { Component } from 'react';
import CandidateIdForm from './components/CandidateIdForm.js'
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <center><h1>Stack Up</h1></center>
        <CandidateIdForm />
      </div>
    );
  }
}

export default App;
