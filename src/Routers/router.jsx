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
// import TaskToReview from "../Pages/ByerRoutes/TaskToReview";
import PurchaseCoin from "../Pages/ByerRoutes/PurchaseCoin";
import Payment from "../Pages/Payment/Payment";
import Withdrawals from "../Pages/WorkerRoutes/Withdrawals";
import ManageTasks from "../Pages/AdminRoutes/ManageTasks";
import WorkerRouter from "./WorkerRouter";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
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
        element: (
          <PrivetRouter>
            <DashboardHome></DashboardHome>
          </PrivetRouter>
        ),
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "payment/:id",
        element: (
          <PrivetRouter>
            <BuyerRouter>
              {" "}
              <Payment></Payment>
            </BuyerRouter>
          </PrivetRouter>
        ),
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
        element: (
          <PrivetRouter>
            {" "}
            <AdminRouter>
              <ManageTasks></ManageTasks>
            </AdminRouter>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "purchaseCoin",
        element: (
          <PrivetRouter>
            {" "}
            <BuyerRouter>
              <PurchaseCoin></PurchaseCoin>
            </BuyerRouter>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "taskDetails/:id",
        element: (
          <PrivetRouter>
            <TaskDetails></TaskDetails>
          </PrivetRouter>
        ),
      },
      {
        path: "mySubmission",
        element: (
          <PrivetRouter>
            {" "}
            <WorkerRouter>
              <MySubmissions></MySubmissions>
            </WorkerRouter>{" "}
          </PrivetRouter>
        ),
      },

      {
        path: "withdrawals",
        element: (
          <PrivetRouter>
            {" "}
            <WorkerRouter>
              <Withdrawals></Withdrawals>
            </WorkerRouter>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivetRouter>
            <AdminRouter>
              <ManageUsers></ManageUsers>
            </AdminRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "taskLists",
        element: (
          <PrivetRouter>
            <WorkerRouter>
              <TaskLists></TaskLists>
            </WorkerRouter>
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
