import React, { useState } from 'react';
import './App.css';
import { WebButton } from './components/button/webButton';
import { WebDropdown } from './components/dropdown/webDropdown';

function App() {

  const [label, setLabel] = useState('Hello !');

  return (
    <div className="App">
      <header className="App-header">
        <div>{label}</div>
        <WebButton label="Click ..."></WebButton>
        <WebDropdown options={['Azul', 'Amarelo']} onSelect={(value) => setLabel(value)}></WebDropdown>
      </header>
    </div>
  );
}

export default App;
