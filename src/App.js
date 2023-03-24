import './App.css';
import React from "react";
import RouterComponent from "./routes";
import Login from './pages/login/index';
import './pages/login/index.css'


function App() {
  return (
    <div className="App">

      <RouterComponent />
    </div>
  );
}

export default App;
