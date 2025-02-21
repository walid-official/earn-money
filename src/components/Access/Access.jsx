import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Access = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="w-11/12 mx-auto">
      <div
       className={`grid lg:grid-cols-3 rounded-xl gap-4 p-8 ${
        theme === "light"
          ? " text-black"
          : " text-white"
      }`}
       >
        <div className="flex items-center gap-4">
          <div className="w-[28%]">
            <img
              src="https://toka.peerduck.com/wp-content/uploads/2022/03/key.png"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="font-bold  text-xl pb-2">Register</h2>
            <p className="">
              Access your dream with your perfect approach as a buyer or worker
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[40%]">
            <img
              src="https://toka.peerduck.com/wp-content/uploads/2022/02/app03r34.png"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="font-bold  text-xl pb-2">Connect Dashboard</h2>
            <p className="">Entire to your dashboard as a buyer or worker</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[40%]">
            <img
              src="https://toka.peerduck.com/wp-content/uploads/2022/02/crypto-trading-hit.png"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="font-bold  text-xl pb-2">Access Profit</h2>
            <p className="">
              Profit by doing the work yourself or by having someone else do it
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
