import React from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div>
      <ChangeColor/>
      <Profile />
      <Login />
    </div>
  )
}

export default App