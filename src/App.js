import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Employee name = "Suman Saurav" role = "CEO"/>
        <Employee name = "Hariom"/>
        <Employee name = "Manish"/>
      </header>
    </div>
  );
}

export default App;
