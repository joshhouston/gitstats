import React, { useState, useEffect } from 'react';
import Main from './components/Main'
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
  // const [count, setCount] = useState(0);

  // useEffect(() => {
    
  //   var me = gh.getUser('joshhouston')
  //   me.listGists(function(err, repos) {
  //     console.log(repos)
  //   })
  // }, [])

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
