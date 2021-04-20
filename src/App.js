import React, { useState } from 'react';
import Main from './components/Main';
import User from './components/User';
import Charts from './components/Charts';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  
  const [username, setUsername] = useState('Default');
  const [repos, setRepos] = useState([])

  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User username={username} />
          <Charts />
        </Route>
        <Route path="/">
          <Main setUsername={setUsername} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
