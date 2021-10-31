import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import { Qoutes } from "./Qoutes";
import { Stocks } from "./Stocks";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/stocks" component={Stocks} />
        <Route path="/qoutes" component={Qoutes} />
      </BrowserRouter>
    </div>
  );
};
export default App;
