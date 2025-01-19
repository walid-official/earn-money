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
import AdminRouter from "./AdminRouter";
import TaskLists from "../Pages/WorkerRoutes/TaskLists";
import TaskDetails from "../Pages/WorkerRoutes/TaskDetails";
import MySubmissions from "../Pages/WorkerRoutes/MySubmissions";
import TaskToReview from "../Pages/ByerRoutes/TaskToReview";
import PurchaseCoin from "../Pages/ByerRoutes/PurchaseCoin";
import Payment from "../Pages/Payment/Payment";
import Withdrawals from "../Pages/WorkerRoutes/Withdrawals";
import ManageTasks from "../Pages/AdminRoutes/ManageTasks";

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
        path: "payment",
        element: <Payment></Payment>
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
        path: "manageTasks",
        element: <ManageTasks></ManageTasks>
      },
      {
        path: "purchaseCoin",
        element: <PurchaseCoin></PurchaseCoin>
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails></TaskDetails>,
      },
      {
        path: "mySubmission",
        element: <MySubmissions></MySubmissions>,
      },
      {
        path: "reviewTasks",
        element: <TaskToReview></TaskToReview>,
      },
      {
        path: "withdrawals",
        element: <Withdrawals></Withdrawals>
      },
      {
        path: "manageUsers",
        element: (
          <PrivetRouter>
            <ManageUsers></ManageUsers>
          </PrivetRouter>
        ),
      },
      {
        path: "taskLists",
        element: (
          <PrivetRouter>
            <TaskLists></TaskLists>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
