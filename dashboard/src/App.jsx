import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import router from './router/router';
import TokenService from './services/token.service';
import { useDispatch } from 'react-redux';
import { logout } from './app/features/user/userSlice';

function App() {

  let authTokens = TokenService.getUser() || "";
  const dispatch = useDispatch()
  if (authTokens) {
    const user = jwt_decode(authTokens.token);
    const isExpired = new Date(user?.exp * 1000) - Date.now() < 1;
    isExpired && dispatch(logout())
  }
  
  return (
    <>
      <RouterProvider router={router}/>  
    </>
  );
}

export default App;
