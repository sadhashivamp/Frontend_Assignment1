import React, { useEffect, useState } from "react";
import axios from "axios";

export const Stocks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://retoolapi.dev/V9tsOI/users")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="stocks">
      <h1>Stocks page</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Sector</th>
          <th>Validtill</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.Symbol}</td>
            <td>{item.Name}</td>
            <td>{item.Sector}</td>
            <td>{item.Validtill}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
