import { useAuth0 } from '@auth0/auth0-react';
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
      </header>
      <Profile />
    </div>
  );
}

export default App;
