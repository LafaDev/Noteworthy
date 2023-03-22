import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Editor from "../../pages/editor";
import Login from '../../pages/login';
import NotFound from "../../pages/notfound";

function Main() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/editor" element={ <Editor /> } />
        <Route exact path="/" element={ <Navigate to="/login" replace /> } />
        <Route exact path='*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default Main;
