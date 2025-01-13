import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";

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
  ]);
  
export default router;