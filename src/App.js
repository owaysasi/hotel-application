import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Rooms from "./Pages/Rooms/Rooms";
import Facilities from './Pages/Facilities/Facilities';
import Contactus from './Pages/Contact-us/Contactus';

function App() {
  return (
    <Router basename="/hotel-application">
      <div className="App">
        <Switch>
          <Route exact path="/facilities" component={Facilities} />  
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
