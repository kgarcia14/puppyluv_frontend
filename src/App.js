import React from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from './components/profileStuff/Profile';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import { CssBaseline } from '@material-ui/core';
import FullProfile from './components/profileStuff/FullProfile';
import PossibleConnections from './components/nonConnectedUsers/PossibleConnections';
import MyProfile from './components/profileStuff/MyProfile';
import MyFavorites from './components/favoritesStuff/MyFavorites';
import UserInfo from './components/profileStuff/UserInfo';
import RegisterPet2 from './components/petRegistry/RegisterPet2'
import NearbyParksStatic from './components/mapStuff/NearbyParksStatic';

function App() {
  const { isLoading } = useAuth0();
  const [otherUserId, setotherUserId] = useState('');

  const _handleOtherUserId = (otherUserId) => {
    setotherUserId(otherUserId);
  }

  if (isLoading) return <div>Loading...</div>
  return (
      <Router>
        <Navbar/>

        <div style={{minHeight:'calc(100vh - 56px)', backgroundColor:'purple'}}>
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
          <Route exact path='/my_profile'>
            <MyProfile/>
          </Route>
          <Route exact path='/home'>
            <UserInfo/>
          </Route>
          <Route exact path='/my_favorites'>
            <MyFavorites/>
          </Route>
          <Route exact path='/pet2register'>
            <RegisterPet2 />
          </Route>
          <Route exact path='/nearbyparks'>
            <NearbyParksStatic />
          </Route>
        </Switch>
        </div>

        <Footer/>
      </Router>
  );
}

export default App;
