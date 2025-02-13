import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

const DateSelector = ({ setToday }) => {
  // Function to generate an array of dates for today and the next 5 days
  const generateDates = () => {
    const dates = [];
    let currentDate = new Date();
    for (let i = 0; i < 6; i++) {
      dates.push(currentDate);
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
    return dates;
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const dates = generateDates();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setToday(date);
  };

  return (
    <div className="bg-[#E4F9DC] text-[#00BF63] p-3 rounded-md">
      {/* <h2>Select a Date:</h2> */}
      <div>
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            className="w-[80px] h-[80px] rounded-full"
            style={{
              margin: "5px",
              background:
                date.getDate() === selectedDate.getDate() ? "#00BF63" : "white",
              color:
                date.getDate() === selectedDate.getDate() ? "white" : "#00BF63",
            }}
          >
            <p className="text-3xl">
              {date.toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <p>
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            </p>
            {/* {`${date.toLocaleDateString("en-US", {
              weekday: "short",
            })}, ${date.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}`} */}
          </button>
        ))}
      </div>
      {/* <p>Selected Date: {selectedDate.toLocaleDateString()}</p> */}
    </div>
  );
};

export default DateSelector;
