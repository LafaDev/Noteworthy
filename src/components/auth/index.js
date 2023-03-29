import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useCookies } from 'react-cookie';

function PrivateRoute() {
  const [cookies] = useCookies(['jwt']);

  return cookies.jwt? <Outlet /> : <Navigate to="/login" replace/>; 
}

export default PrivateRoute;
