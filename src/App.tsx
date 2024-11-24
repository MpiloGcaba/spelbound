import React from "react";
import { Provider } from "react-redux";
import  store  from "./store/Index";
import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;