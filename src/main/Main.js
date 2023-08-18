import React from "react";
import "./main.css";
// import Navbar from "../navbar/Navbar";

import Topbar from "./Topbar";
import { Card } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Appointment from "../appointment/Appointment";
import Car from "../ridedrive/Car";
import Prescription from "../prescription/Prescription";
import Dashboard from "../dashboard/Dashboard";
import Medicine from "../medicine/Medicine";
import Driver from "../driver/Driver";
import Case from "../cases/Case";
import Patients from "../allPatients/Patients";
import Doctor from "../doctor/Doctor";
import Navbar from "../navbar/Navbar"; 
import Login from "../login/Login";


export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="main_screen">
          <Topbar />
          

          <div className="dynamic">
  {/* <Router> */}
        <Routes>
        <Route exact path="Login" element={<Login/>} />
           <Route exact path="Dashboard" element={<Dashboard/>} />
          <Route exact path="Appointment" element={<Appointment/>} />
          <Route exact path="Car" element={<Car/>} />
          <Route exact path="Prescription" element={<Prescription/>} />
          <Route exact path="Medicine" element={<Medicine/>} />
          <Route exact path="Driver" element={<Driver/>} />
          <Route exact path="Case" element={<Case/>} />
          <Route exact path="Patients" element={<Patients/>} />
          <Route exact path="Doctor" element={<Doctor/>} />
        </Routes>
      {/* </Router> */}

           </div>
           {/* <div>
           <h1>login</h1>
         </div> */}
         </div>
        
      </>
    );
  }
}
