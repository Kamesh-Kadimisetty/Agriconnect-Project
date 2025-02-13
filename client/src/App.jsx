import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/Routes/Private";
import Weather from "./pages/Weather/Weather";
import Trending from "./pages/trending/Trending";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/trending" element={<Trending />} />
        </Route>
        {/* <Route path="profile/:username" element={<UserProfile />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
