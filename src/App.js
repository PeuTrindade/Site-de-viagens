import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App(props){
    return(
       <>
       <Router>
       <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
       </Switch>
       </Router>
       </>
    )
}
export default App;