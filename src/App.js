import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import './App.css';
import LoginButton from './components/LoginButton'
import Logout from './components/LogoutButton';
import Profile from './components/Profile';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-links">
          <LoginButton />
          <Logout />
        </div>
        <h1>Puppy Luv</h1>
        <p>The app to bring the only pure souls in this cruel world, together.</p>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
