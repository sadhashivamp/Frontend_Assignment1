import React, { useEffect } from "react";
import axios from "axios";
import "./Stocks.css";

export const Qoutes = () => {
  useEffect(() => {
    axios
      .get("https://prototype.sbulltech.com/api/v2/quotes/MRF")
      .then((response) => console.log(response.data.payload));
  }, []);

  return (
    <div className="stocks">
      <h1>Qoutes page</h1>
    </div>
  );
};
