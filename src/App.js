import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import UserInfo from './components/UserInfo';
import LandingPage from './components/LandingPage';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url('https://i.pinimg.com/originals/f2/72/fe/f272fe97a657045cabb4dddb911cf4ae.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
}))

function App() {
  const { isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={classes.root}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <CssBaseline/>
            <LandingPage/>
            <MoreInfo/>
            <Profile />
          </Route>
          <Route exact path="/user_info">
            <UserInfo />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
