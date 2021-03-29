import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {
  const { isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
