import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/Auth";
import ProfileData from "./ProfileData";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API}/posts/userposts`
        );
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <Layout>
      <div className="p-5 flex">
        <div className="bg-[#7ED957] p-5 rounded-md flex flex-col flex-1">
          <ProfileData />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
