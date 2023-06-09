import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Editor from "../../pages/editor";
import Login from "../../pages/login";
import NotFound from "../../pages/notfound";
import PrivateRoute from "../auth";

function Main() {
  return (
    <CookiesProvider>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={ <Editor /> } />
        </Route>
        <Route exact path="/" element={ <Navigate to="/login" replace /> } />
        <Route exact path='*' element={ <NotFound /> } />
      </Routes>
    </CookiesProvider>
  )
}

export default Main;
