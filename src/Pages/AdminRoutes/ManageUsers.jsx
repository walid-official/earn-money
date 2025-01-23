import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "./ManageUsersTable";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user?.email);
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user?.email) return [];
      const { data } = await axiosSecure(`allUsers/${user?.email}`);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  const handleUserDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/user/${id}`);
      console.log(data);
      toast.success("successfully deleted");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleManageRole = (role, email) => {
    const roleUser = {
      role,
      email,
    };

    try {
      const { data } = axiosSecure.patch("update-role", roleUser);
      console.log(data);
      toast.success("Successfully Updated ");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-8">
        <h2 className="font-bold text-3xl text-center">User Management Hub</h2>
        <p className="w-[60%] mx-auto text-center py-2">
          A centralized system to manage users efficiently, allowing for role
          assignments, activity tracking, and profile updates, ensuring seamless
          administration and user engagement.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>photo</th>
              <th>Email</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Update role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((singleUser, index) => (
              <ManageUsersTable
                handleManageRole={handleManageRole}
                key={index}
                handleUserDelete={handleUserDelete}
                singleUser={singleUser}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
