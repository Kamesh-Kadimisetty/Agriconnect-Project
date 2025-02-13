import React, { useState } from "react";
import axios from "axios";

const CropRec = () => {
  const [N, setN] = useState(null);
  const [P, setP] = useState(null);
  const [K, setK] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [ph, setPh] = useState(null);
  const [rainfall, setRainfall] = useState(null);
  const [ans, setAns] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(import.meta.env.VITE_ML_API);
      const res = await axios.post(`${import.meta.env.VITE_ML_API}/predict`, {
        N,
        P,
        K,
        temperature,
        humidity,
        ph,
        rainfall,
      });

      if (res) {
        const answer = res.data.suggestion;
        console.log(answer);
        setAns(answer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-3 pb-10 rounded-lg flex flex-col px-10"
      >
        <div className="flex space-x-10 justify-around">
          <div>
            <div>
              <input
                value={P}
                type="number"
                placeholder="Phosphorous"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setP(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={K}
                type="number"
                placeholder="Potassium"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setK(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={N}
                type="number"
                placeholder="Nitrogen"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setN(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={ph}
                type="number"
                placeholder="pH"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setPh(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <input
                value={temperature}
                type="number"
                placeholder="Temperature"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setTemperature(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={humidity}
                type="number"
                placeholder="Humidity"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setHumidity(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                value={rainfall}
                type="number"
                placeholder="Rainfall"
                className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
                onChange={(e) => setRainfall(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#00BF63] text-white px-3 py-2 rounded-md mt-5 mb-3"
        >
          Predict
        </button>
        <h1 className="text-center">
          {ans && `The most suitable crop would be ${ans}`}
        </h1>
      </form>
    </div>
  );
};

export default CropRec;
