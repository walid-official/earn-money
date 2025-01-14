import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";
import TestSlider from "../components/TestSlider/TestSlider";

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
      path: "/test",
      element: <TestSlider></TestSlider>
    }
  ]);
  
export default router;