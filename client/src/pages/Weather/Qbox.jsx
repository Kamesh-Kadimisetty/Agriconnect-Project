import axios from "axios";
import React, { useEffect, useState } from "react";

function Qbox() {
  const [msgs, setmsgs] = useState([
    {
      role: "bot",
      text: "Hii, I can answer any of your queries regarding soil, crops, weather and farming.",
    },
  ]);

  const [msg, setmsg] = useState("");

  //   which crop to grow in summer
  const askQ = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_ML_API}/chat`, {
        message: "what crop should i grow in summer season",
      });
      console.log(res);
      setmsgs([
        ...msgs,
        {
          role: "bot",
          text: res.data.message,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 w-[500px] h-[500px] flex flex-col absolute right-0 bottom-0 bg-[white] border-2 shadow-lg rounded-md">
      <div className="flex-1 h-[600px] overflow-y-scroll">
        {msgs.map((e, i) => (
          <div
            key={i}
            className={
              e.role === "bot"
                ? "bg-[#E4F9DC] max-w-[350px] p-2 rounded-sm my-1"
                : "bg-[#7ED957]  max-w-[350px] p-2 rounded-sm my-1"
            }
          >
            {e.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(msg);
          setmsgs([
            ...msgs,
            {
              role: "user",
              text: msg,
            },
          ]);
          askQ();
        }}
      >
        <input
          type="text"
          className="w-full my-3 p-3 rounded-md outline-none border-2"
          placeholder="Enter your queries here!"
          value={msg}
          onChange={(e) => {
            setmsg(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Qbox;
