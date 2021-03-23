import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import AppCenter from "./API/AppCenter";
import AppTodo from "./TodoList/AppTodo";
import AppAxios from "./TodoAxios/AppAxios";
import AppMovies from "./MovieReview/AppMovies";
import AppReview from "./NewYorkMovie/AppReview";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppReview />
    {/* <App /> */}
    {/* <AppCenter /> */}
    {/* <AppTodo /> */}
    {/* <AppAxios /> */}
    {/* <AppMovies /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
