import React from 'react';
import { RouterProvider } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import router from './router/router';

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>  
    </>
  );
}

export default App;
