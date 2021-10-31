import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";

import { Stocks } from "./Stocks";
import { Qoutes } from "./Qoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/stocks" component={Stocks} />
        <Route exact path="/qoutes" component={Qoutes} />
      </BrowserRouter>
    </div>
  );
};
export default App;
