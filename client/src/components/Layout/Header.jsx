import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
// import { handleChangeLang } from "../../App";
import { handleChangeLang } from "../../langUtils";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [auth, setAuth] = useAuth();
  const [mobNav, setmobNav] = useState(false);
  const handleSignout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfull");
  };

  // const handleChangeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <>
      <nav
        className="w-[280px] left-0 text-black bg-white flex flex-col"
        // style={{ zIndex: 9999 }}
      >
        <div className="flex w-full h-[100vh] bg-[#00BF63]">
          <div className="flex-col items-center justify-between w-screen px-3">
            <div className="mb-3">
              <Link
                to="/"
                className="flex items-center justify-center px-1 py-2 space-x-3 rounded-md"
              >
                <img
                  className="h-[70px] w-[70px] rounded-full"
                  src="https://firebasestorage.googleapis.com/v0/b/test-576b6.appspot.com/o/logo.png?alt=media&token=5df30844-c29f-4153-9915-1a0aad2b4c2f"
                  alt="logo"
                />
                <h1 className="text-2xl font-extrabold text-white">
                  AgriConnect
                </h1>
              </Link>
              <div className="fixed top-0 right-0 flex">
                <button
                  onClick={() => handleChangeLang(i18n, "hindi")}
                  className="px-2 py-1 text-black bg-white"
                >
                  Hindi
                </button>
                <button
                  onClick={() => handleChangeLang(i18n, "telugu")}
                  className="px-2 py-1 text-black bg-white"
                >
                  Telugu
                </button>
                <button
                  onClick={() => handleChangeLang(i18n, "english")}
                  className="px-2 py-1 text-black bg-white"
                >
                  English
                </button>
              </div>
            </div>
            {/*  */}
            <ul
              className="flex-1 flex-col space-y-2  text-2xl text-white font-semibold h-[calc(100vh-200px)]
            "
            >
              {!auth.user ? (
                <>
                  <li>
                    <NavLink to="/signup">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              ) : (
                <div className="flex flex-col h-[calc(100vh-140px)] justify-between">
                  <div className="flex flex-col space-y-3">
                    <li className="px-2 py-2 rounded-md duration-100 ease-in-out hover:bg-[#7ED957]">
                      <NavLink to="/" className="flex items-center space-x-5">
                        <HomeIcon
                          fontSize="large"
                          className="scale-[1.2] text-[white]"
                        />
                        <p>{t("header.home")}</p>
                        {/* <p>Home</p> */}
                      </NavLink>
                    </li>
                    <li className="px-2 py-2 rounded-md duration-100 ease-in-out hover:bg-[#7ED957]">
                      <NavLink
                        to="/weather"
                        className="flex items-center space-x-5"
                      >
                        <WbSunnyIcon
                          fontSize="large"
                          className="scale-[1.2] text-[white]"
                        />
                        <p>{t("header.weather")}</p>
                        {/* <p>Weather</p> */}
                      </NavLink>
                    </li>
                    <li className="px-2 py-2 rounded-md duration-100 ease-in-out hover:bg-[#7ED957]">
                      <NavLink
                        to="/trending"
                        className="flex items-center space-x-5"
                      >
                        <TrendingUpIcon
                          fontSize="large"
                          className="scale-[1.4] text-[white]"
                        />
                        <p>{t("header.trending")}</p>
                        {/* <p>Trending</p> */}
                      </NavLink>
                    </li>
                  </div>
                  {/* bottom part of login */}
                  <div>
                    <li className="px-1 py-2 rounded-md duration-100 ease-in-out hover:bg-[#7ED957]">
                      <NavLink
                        to={`/myprofile`}
                        className="flex items-center space-x-5"
                      >
                        <img
                          className="h-[40px] w-[40px] rounded-full"
                          src="https://cdn-icons-png.freepik.com/512/3626/3626507.png"
                          alt=""
                        />
                        <p>{t("header.profile")}</p>
                        {/* <p>Profile</p> */}
                      </NavLink>
                    </li>
                    <li className="px-2 py-2 rounded-md duration-100 ease-in-out hover:bg-[#7ED957]">
                      <NavLink
                        onClick={handleSignout}
                        to="/login"
                        className="flex items-center space-x-5"
                      >
                        <LogoutIcon
                          fontSize="large"
                          className="scale-[1.4] text-[white]"
                        />
                        <p>{t("header.logout")}</p>
                        {/* <p>Logout</p> */}
                      </NavLink>
                    </li>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
        {/*  */}
      </nav>
    </>
  );
};

export default Header;
