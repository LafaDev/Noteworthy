import './App.css';
import React from "react";
import RouterComponent from "./routes";
import Login from './pages/login/login';
import './pages/login/login.css'


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
