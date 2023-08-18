import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Appointment from './appointment/Appointment';
import Car from './ridedrive/Car';
import Prescription from './prescription/Prescription'
import Main from './main/Main';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./login/Login";
function App() {
  return (
    <div className="App">
  <Navbar/>    
         <Main/> 

         <div
style={{
  backgroundColor: "#000000BF",
  height: "770px",
  display: "block",
  position: "absolute",
  width: "1349px",
  top:"0px"
  // display:'none'
}}

>
<h1>Hiii</h1>
</div>
  
    </div>

    
  );
}

export default App;
