// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatList from './components/CatList';
import Cat from './components/Cat';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:name">
            <Cat />
          </Route>
          <Route path="/">
            <CatList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
