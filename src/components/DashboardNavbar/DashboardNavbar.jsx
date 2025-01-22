import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";

const DashboardNavbar = ({myInfo}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();



  const {
    data: notifications = [],
    isLoading: loading,
    refetch: twoFetch,
  } = useQuery({
    queryKey: ["notifications", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`notification/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(notifications);

  return (
    <div className="bg-[#242835] text-white shadow-2xl">
      <div className="navbar flex justify-end ">
        {/* <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div> */}
        <div className="">
          <div className="flex justify-center items-center gap-10">
            <div className="flex justify-center flex-col items-center space-y-4">
              <h2 className="font-bold text-xl">
                Available Coin: { myInfo.coin > 0  ? <span>{myInfo?.coin}</span> : 0} 
              </h2>
              <div className="badge badge-accent text-white font-bold">
                {myInfo?.role}
              </div>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div className="bg-white w-12 h-12 rounded-full">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={myInfo?.photo}
                  alt=""
                />
              </div>
              <h2 className="pt-1 font-bold text-xl">{myInfo?.name}</h2>
            </div>
          </div>
          <div className="px-8 text-slate-950">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <button className="btn btn-ghost btn-circle text-white">
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
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[400px] mt-6 p-2 shadow"
              >
                {notifications.map((notification, index) => (
                  <NavLink to={notification?.actionRoute} className="bg-accent text-white rounded-xl p-2 my-1" key={index}>
                    <li className="">{notification?.message}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
