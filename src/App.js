import './App.css';
import React from "react";
import RouterComponent from "./routes";
import Login from './pages/login/login';
import './pages/login/login.css'

import React from "react";
import RouterComponent from "./routes";

function App() {
  return (
    <div className="App">
      <Login />
      <RouterComponent />
    </div>
  );
}

export default App;
