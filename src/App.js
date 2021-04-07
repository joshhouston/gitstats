import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import User from './components/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Github from 'github-api';
import './App.css';

// const gh = new Github({
//   // username: process.env.REACT_APP_USERNAME,
//   // password: process.env.REACT_APP_PASSWORD
// });


function App() {
  
  const [username, setUsername] = useState('Default');

  // useEffect(() => {
    
  //   var me = gh.getUser('joshhouston')
  //   me.listGists(function(err, repos) {
  //     console.log(repos)
  //   })
  // }, [])

  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User username={username} />
        </Route>
        <Route path="/">
          <Main setUsername={setUsername} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
