import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
         <Dashboard></Dashboard>
       </div>
      </header>
    </div>
  );
}

export default App;
