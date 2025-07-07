import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import useRole from "../../Hooks/useRole";
import { BsCoin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const DashboardNavbar = ({ myInfo }) => {
  const { user, userSignOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {theme,toggleTheme} = useContext(ThemeContext)
  const [role] = useRole();
  const {
    data: notifications = [],
    isLoading: loading,
    refetch: twoFetch,
  } = useQuery({
    queryKey: ["notifications", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`api/notifications/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  const handleProfileLogout = async () => {
    await userSignOut();
  };

  const updatedNotifications = notifications.map((notification) => {
    const date = new Date(notification.time);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return {
      ...notification,
      time: `${hours}:${minutes}:${seconds}`, // Update the time to HH:mm:ss format
    };
  });

  console.log(updatedNotifications);

  return (
    <div className={` shadow-2xl py-2 ${
      theme === "light"
        ? " bg-[#ffffff] text-black shadow-2xl"
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    }`}>
      <div className="navbar flex justify-end">
        <div className="">
          {/* Notifications */}
          <div className="">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item">
                      {notifications.length}
                    </span>
                  </div>
                </button>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 min-h-20 rounded-box z-50 w-[500px] mt-6 p-2 shadow"
              >
                {updatedNotifications.map((notification, index) => (
                  <NavLink
                    to={notification?.actionRoute}
                    className=" hover:bg-accent rounded-lg px-3 py-4 my-1 flex gap-5"
                    key={index}
                  >
                    <i className="font-bold text-xl">
                      <MdOutlineNotificationsActive></MdOutlineNotificationsActive>
                    </i>
                    <div className="">
                      <li className="">{notification?.message}</li>
                      <li>{notification?.time}</li>
                    </div>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-6 flex items-center">
            <button onClick={toggleTheme} className="">
              {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
          {/* User Info */}
          <div className="flex justify-center items-center gap-10 ">
            <div className="dropdown dropdown-end mr-4">
              <div tabIndex={0} role="button" className="">
                <div className=" w-10 h-10 rounded-full">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={myInfo?.photo}
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-60 p-2 shadow mt-4"
              >
                <li>
                  <div className="flex">
                    <h2 className="pt-1 font-bold">{myInfo?.name}</h2>
                    <h2 className="bg-accent rounded-xl px-2">
                      {myInfo?.role}
                    </h2>
                  </div>
                </li>
                <li>
                  <NavLink to="/dashboard/profile">
                    <div className="flex gap-3">
                      <div className="text-[22px]">
                        <CgProfile></CgProfile>
                      </div>
                      <p>Your Profile</p>
                    </div>
                  </NavLink>
                </li>
                {
                  role !== "Admin" && <li>
                  <div className="flex gap-3">
                    <h2 className="text-xl">
                      <BsCoin></BsCoin>
                    </h2>
                    {myInfo.coin > 0 ? (
                      <span>{myInfo?.coin.toFixed(2)}</span>
                    ) : (
                      0
                    )}
                  </div>
                </li> 
                }
                

                <li onClick={handleProfileLogout}>
                  <div className="flex gap-3">
                    <button className="text-[22px]">
                      <MdOutlineLogout></MdOutlineLogout>
                    </button>
                    <h2>Logout</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
