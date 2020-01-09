import React from 'react';
import Dashboard from './components/Dashboard';
import SearchCharacter from './components/SearchCharacter';
import ErrorBoundary from './shared/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Router>
            <Switch>
              <Router exact path="/">
                <Dashboard></Dashboard>
              </Router>
              <Router path="/search">
                <SearchCharacter></SearchCharacter>
              </Router>
            </Switch>
          </Router>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
