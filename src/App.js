import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url('https://i.pinimg.com/originals/98/93/03/989303cde8235b119332ff7af0961bcd.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))

function App() {
  const { isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Home/>
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
