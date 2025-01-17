import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentications/Login";
import Register from "../Pages/Authentications/Register";
import ErrorPage from "../Pages/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashboardHome from "../Pages/DashboardHome";
import PrivetRouter from "./PrivetRouter";
import AddNewTasks from "../Pages/ByerRoutes/AddNewTasks";
import MyTasks from "../Pages/ByerRoutes/MyTasks";
import BuyerRouter from "./BuyerRouter";
import ManageUsers from "../Pages/AdminRoutes/ManageUsers";
import AdminRouter from './AdminRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        <DashBoardLayout></DashBoardLayout>
      </PrivetRouter>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "addNewTasks",
        element: (
          <PrivetRouter>
            {" "}
            <BuyerRouter>
              <AddNewTasks></AddNewTasks>
            </BuyerRouter>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "myTasks",
        element: (
          <PrivetRouter>
            {" "}
            <BuyerRouter>
              <MyTasks></MyTasks>
            </BuyerRouter>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "manageUsers",
        element: <PrivetRouter><ManageUsers></ManageUsers></PrivetRouter> 
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
