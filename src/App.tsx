import React from 'react';
import './App.css';
import { WebButton } from './components/button/webButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebButton label='Click here!'></WebButton>
      </header>
    </div>
  );
}

export default App;
