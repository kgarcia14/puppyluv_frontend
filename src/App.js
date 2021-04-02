import React from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from './components/profileStuff/Profile';
import Test from "./components/Test";
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import FullProfile from './components/profileStuff/FullProfile';
import PossibleConnections from './components/nonConnectedUsers/PossibleConnections';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '120vh',
    backgroundImage: `url('https://i.pinimg.com/originals/f2/72/fe/f272fe97a657045cabb4dddb911cf4ae.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'flex',
  },
}))

function App() {
  const { isLoading } = useAuth0();
  const classes = useStyles();
  const [otherUserId, setotherUserId] = useState('');

  const _handleOtherUserId = (otherUserId) => {
    setotherUserId(otherUserId);
  }

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={classes.root}>
      <Router>
        <Test/>
        <Switch>
          <Route exact path="/">
            <CssBaseline/>
            <Profile />
          </Route>
          <Route exact path="/chatbox">
            <Chatbox component={Chatbox} />
          </Route>
          <Route exact path="/possible_connections">
            <PossibleConnections handleOtherUserId={_handleOtherUserId}/>
          </Route>
          <Route exact path="/full_profile/:otherUserId">
            <FullProfile otherUserId={otherUserId}/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
