import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

function Trending() {
  const [item, setitem] = useState("Potato");
  const [state, setstate] = useState("Karnataka");
  const [city, setcity] = useState("Bangalore");
  const [data, setdata] = useState(null);
  const [loader, setloader] = useState(false);

  const handleSubmit = async () => {
    try {
      setloader(true);
      const res = await axios.get(
        `${
          import.meta.env.VITE_ML_API
        }/request?commodity=${item}&state=${state}&market=${city}`
      );

      if (res) {
        console.log(res);
        setloader(false);
        setdata(res.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-[#7ED957] rounded-md p-5">
          <div className="text-2xl font-extrabold">Trending Crops</div>
          <div className="flex mt-5 space-x-3">
            <input
              type="text"
              placeholder="Commodity"
              value={item}
              onChange={(e) => setitem(e.target.value)}
              className="px-2 rounded-md"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="px-2 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="px-2 rounded-md"
            />
            <button
              className="bg-[#00BF63] text-white font-semibold px-3 py-2 rounded-md"
              onClick={handleSubmit}
            >
              Fetch Prices
            </button>
          </div>
        </div>
        {/* <div>
          {data &&
            data.map((e, i) => (
              <div key={i}>
                <p>date : {e.Date}</p>
                <p>Max Price : {e["Max Prize"]}</p>
                <p>Min Price : {e["Min Prize"]}</p>
                <p>Model Price : {e["Model Prize"]}</p>
              </div>
            ))}
        </div> */}
        {/*  ****************************/}
        {loader && <LinearProgress color="success" />}
        <div className="mt-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Max Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Min Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Model Price
                </th>
              </tr>
            </thead>

            {data == null && (
              <h1 className="mt-3">
                Fetch prices to know the current market price of {item}
              </h1>
            )}
            <tbody className="bg-white divide-y divide-gray-200">
            {data !== null && console.log(data)}
              {/* {data !== null &&
                data.map((e, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">{e.Date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {e["Max Prize"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {e["Min Prize"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {e["Model Prize"]}
                    </td>
                  </tr>
                ))} */}
            </tbody>
          </table>
        </div>
        {/* ********************** */}
      </div>
    </Layout>
  );
}

export default Trending;
