import React from 'react';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login />
    </div>
  );
}

export default App;
