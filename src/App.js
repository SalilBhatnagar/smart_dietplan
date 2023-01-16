import './Coustom.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './components/Index';
import otpContext from './components/otpContext'

function App(props) {
  const [optTrack, setOptTrack] = useState("")
  const [currentMobile, setCurrentMobile] = useState("")
  const [display, setDisplay] = useState(false)
  const [otpPage, setOtppage] = useState(false)
  return (
    <otpContext.Provider value={{ optTrack, setOptTrack, currentMobile, setCurrentMobile, display, setDisplay, otpPage, setOtppage }}>

        <Router>
          <Switch>
            <Route
              exact
              strict
              path="/"
              component={Index}
              history={props.history}
            />
          </Switch>
        </Router>
      
    </otpContext.Provider>
  );
}

export default App;
