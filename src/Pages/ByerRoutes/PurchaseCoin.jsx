import React from "react";
import { NavLink } from "react-router-dom";

const PurchaseCoin = () => {
  return (
    <div>
      <div className="py-10">
        <h2 className="font-bold text-center text-3xl">Payment Info</h2>
        <p className="text-center py-3 w-[30%] mx-auto">
          A form for securely entering payment details to complete a
          transaction.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-[90%] mx-auto my-4">
        <NavLink to="/dashboard/payment" className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">10 coins</h2>
            <p className="font-bold py-4 text-3xl text-center">=</p>
            <h2 className="font-bold text-2xl text-center">1$</h2>
          </div>
        </NavLink>
        <NavLink to="/dashboard/payment" className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">200 coins</h2>
            <p className="font-bold py-4 text-3xl text-center">=</p>
            <h2 className="font-bold text-2xl text-center">10$</h2>
          </div>
        </NavLink>
        <NavLink to="/dashboard/payment" className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">500 coins</h2>
            <p className="font-bold py-4 text-3xl text-center">=</p>
            <h2 className="font-bold text-2xl text-center">20$</h2>
          </div>
        </NavLink>
        <NavLink to="/dashboard/payment" className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">1000 coins</h2>
            <p className="font-bold py-4 text-3xl text-center">=</p>
            <h2 className="font-bold text-2xl text-center">35$</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default PurchaseCoin;
