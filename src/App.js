import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import PlaceToVisit from './components/PlaceToVisit';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url('https://images.wallpaperscraft.com/image/dog_cat_kitten_puppy_drawing_heart_96341_1600x1200.jpg')`,
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
      <Navbar />
      <LandingPage/>
      <PlaceToVisit />
    <div className="App">
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
