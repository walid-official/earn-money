import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Profile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {
      data: profileInfo = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["profileInfo", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`loggedUser/${user?.email}`);
        console.log(data);
  
        return data;
      },
    });
    
      console.log(profileInfo);

  return (
    <div className="bg-accent w-full h-60">
      <div className="flex justify-center pt-32">
        <div className="card bg-base-100 relative  shadow-xl">
          <figure className="px-10 ">
            <img 
              
              src={profileInfo.photo}
              alt="My Profile"
              className="rounded-full w-20 h-20 absolute  z-10 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pt-4">{profileInfo?.name}</h2>
            <p>{profileInfo?.email}</p>
            <p>Your Credits : {profileInfo?.coin}</p>
            <div className="card-actions">
              <button className="bg-accent text-white font-bold px-8 py-3 rounded-lg">{profileInfo?.role}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
