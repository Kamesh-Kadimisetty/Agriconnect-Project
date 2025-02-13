import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth";

const Neighbours = () => {

    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const getNeighbours = async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API}/user/dms/${auth.user.location}`
            );
            setDms(data.dms || []);
            setIsPrivate(data.isPrivate);
            setCrushlist(data.crushlist || []);
          } catch (error) {
            console.log(error);
            toast.error(error.data.message);
          }
        };
        getDms();
      }, []);
    
  return (
    <div>
        <div>Neighbours</div>

    </div>
  )
}

export default Neighbours