import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
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
  );
}

export default App;
