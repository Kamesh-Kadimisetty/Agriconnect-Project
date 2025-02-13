import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import axios from "axios";

function Sidebar() {
  const [auth, setAuth] = useAuth();
  const [data, setdata] = useState(null);

  const findFarmers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API}/user/neighbours/${auth.user.location}`
      );
      console.log(res);
      if (res.data.users.length > 0) {
        setdata(res.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findFarmers();
  }, []);

  return (
    <div className="w-[300px] bg-[#7ED957] ml-5 rounded-md p-3">
      <div className="flex space-x-3 items-center text-black mb-5">
        <img
          className="h-[80px] w-[80px] rounded-full border-2 border-solid"
          src="https://image1.masterfile.com/getImage/645-02153594em-front-view-of-a-farmer-holding-plow-stock-photo.jpg"
          alt=""
        />
        <div>
          <p className="font-bold">{auth.user.name}</p>
          <p className="text-sm">@{auth.user.username}</p>
          <p className="text-sm">{auth.user.location}</p>
        </div>
      </div>
      <h1 className="text-center font-bold">Farmer's around you</h1>
      <div className="flex flex-wrap justify-start">
        {data &&
          data.map((e, i) => {
            if (e.name !== auth.user.name) {
              return (
                //
                <>
                  <div
                    key={i}
                    className="flex flex-col items-center m-2 bg-[#E4F9DC] p-2 rounded-sm"
                  >
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src="https://image1.masterfile.com/getImage/645-02153594em-front-view-of-a-farmer-holding-plow-stock-photo.jpg"
                      alt=""
                    />
                    <p className="text-sm">{e.name}</p>
                  </div>
                  {/*  */}
                </>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Sidebar;
