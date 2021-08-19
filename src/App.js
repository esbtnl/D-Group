import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages"
import Calender from "./pages/Calender"
import Domd from "./pages/Domd"
import Event from "./pages/Event"
import Groupies from "./pages/Groupies"
import Movies from "./pages/Movies"
import WoF from "./pages/WoF"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  const  [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <>
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/groupies" exact component={Groupies}></Route>
        <Route path="/WallOfFame" exact component={WoF}></Route>
        <Route path="/taggfilmer" exact component={Movies}></Route>
        <Route path="/calender" exact component={Calender}></Route>
        <Route path="/events" exact component={Event}></Route>
        <Route path="/domd" exact component={Domd}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
