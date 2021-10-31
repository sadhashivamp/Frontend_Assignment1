import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stocks.css";

export const Qoutes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Symbol = window.location.search.split("=")[1];
    console.log(Symbol);

    axios
      .get(`https://prototype.sbulltech.com/api/v2/quotes/${Symbol}`)
      .then((response) => setData(response.data.payload[Symbol]));
  }, []);
  console.log(data);
  return (
    <div className="stocks">
      <h1>Qoutes page</h1>
      <table>
        <tr>
          <th>Price</th>
          <th>Time</th>

          <th>Validtill</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.price}</td>
            <td>{item.time}</td>

            <td>{item.valid_till}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
