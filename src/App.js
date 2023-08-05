import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //it tells whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  // const [btntxt ,setbtntxt] = useState("Enable DarkMode");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
       document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");

      // document.title = 'Textutils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'Textutils is Virus Free and Amazing'

      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now'

      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      // document.title = 'Textutils - Light Mode'
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Edit Ease"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Edit Ease - Word Counter, Character Counter, Remove Extra Spaces "
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
