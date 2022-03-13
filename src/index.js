import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./globalStyle.css";
import "swiper/css/bundle";

//redux
import { Provider } from "react-redux";
import store from "./reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
