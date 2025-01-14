import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";
import TestSlider from "../components/TestSlider/TestSlider";
import Login from "../Pages/Authentications/Login";
import Register from "../Pages/Authentications/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageLayout></HomePageLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Register></Register>
    }
  ]);
  
export default router;