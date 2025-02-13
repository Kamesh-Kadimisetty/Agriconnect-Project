import React from "react";
import { useAuth } from "../../context/Auth";

const ProfileData = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className="bg-[#E4F9DC] p-3 space-x-10 flex justify-center">
      <div>
        <img
          className="h-[200px] w-[200px] rounded-full"
          src="https://cdn-icons-png.freepik.com/512/3626/3626507.png"
          alt=""
        />
      </div>
      <div className="text-2xl">
        <h1>Name: {auth.user.name}</h1>
        <h2>email: {auth.user.email}</h2>
        <h2>username: {auth.user.username}</h2>
      </div>
    </div>
  );
};

export default ProfileData;
