import React from 'react';
import { RouterProvider } from 'react-router-dom'// Make sure the path is correct
import router from './Controller/Navigators/routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
