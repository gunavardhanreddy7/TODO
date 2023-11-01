import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useReducer, useState } from "react";
import ToDo from "./ToDo";
import Weather from "./Weather";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/ToDo">TODO</Link>
          </li>
          <li>
            <Link to="/Weather">Weather</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/ToDo" element={[<ToDo />]}>
            ToDO
          </Route>
          <Route path="/Weather" element={[<Weather />]}>
            Weather
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
