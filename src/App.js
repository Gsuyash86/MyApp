/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import Aboutus from "./components/Aboutus";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <>
      <Router>
        <Navbar title="Utils" mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Router path="/">
            <Form heading="Enter about you here" />
          </Router>
        </Switch>
      </Router>
    </>
  );
}

export default App;
