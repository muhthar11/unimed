import { createBrowserRouter } from "react-router-dom";
import Home from '../../View/Pages/Home';


const router = createBrowserRouter([
  {
    path: "/", element: <Home /> ,
  },
]);

export default router;