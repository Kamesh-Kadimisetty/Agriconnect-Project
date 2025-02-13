import React, { useEffect, useState } from "react";

const WeatherReport = ({ date }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [currdata, setCurrdata] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=visakhapatnam,in&mode=json&appid=${apiKey}`;
  let arr = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.list.map((e, i) => {
          if (i % 7 == 0) {
            arr.push(e);
            // console.log(date);
            let date1 = new Date(e.dt_txt).getDate();
            let date2 = new Date(date).getDate();
            if (date1 == date2) {
              setCurrdata(e);
            }
          }
        });
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    if (weatherData !== null) {
      weatherData.list.map((e, i) => {
        if (i % 7 == 0) {
          let date1 = new Date(e.dt_txt).getDate();
          let date2 = new Date(date).getDate();
          if (date1 == date2) {
            setCurrdata(e);
          }
        }
      });
    }
  }, [date]);

  return (
    <div className="bg-[#00BF63] p-7 py-10 text-white font-bold rounded-md mr-5">
      <h1 className="text-center text-xl mb-7 font-extrabold">
        Weather Report
      </h1>
      {weatherData ? (
        <div>
          <p>Description : {currdata.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${currdata.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>Temperature : {Math.round(currdata.main.temp - 273.15)} C</p>
          <p>Humidity : {currdata.main.humidity}</p>
          <p>Pressure : {currdata.main.pressure}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherReport;
