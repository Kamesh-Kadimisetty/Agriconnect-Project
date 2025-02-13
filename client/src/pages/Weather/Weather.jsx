import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import DateSelector from "./DateSelector";
import WeatherReport from "./WeatherReport";
import CropRec from "./CropRec";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Qbox from "./Qbox";

function Weather() {
  const [today, setToday] = useState(new Date());
  const [assistant, setAssistant] = useState(false);

  //   useEffect(() => {
  //     console.log(today);
  //   }, [today]);

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-[#7ED957] flex flex-col space-y-5 p-5 rounded-md">
          <DateSelector setToday={setToday} />
          <div className="flex">
            <WeatherReport date={today} />
            <CropRec />
          </div>
        </div>
        <button
          onClick={() => setAssistant(true)}
          className="flex items-center space-x-3 font-bold text-xl bg-white px-3 py-2 rounded-md shadow-lg fixed right-2 "
        >
          <p>Have any questions?</p>
          <SmartToyIcon fontSize="large" />
        </button>
      </div>
      {assistant && <Qbox />}
    </Layout>
  );
}

export default Weather;
