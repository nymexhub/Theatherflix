import React from "react";
import ReactDOM, { render } from "react-dom";
import Movies from "./components/Movies.js";
import themoviedb from "./lib/themoviedb.js";

global.themoviedb = themoviedb;

render(<Movies />, document.getElementById("app"));
