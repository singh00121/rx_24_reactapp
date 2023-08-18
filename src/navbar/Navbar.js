import React from "react";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import imagbg2 from '../images/Rx24.svg';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdBarChart } from 'react-icons/md';
import { FaStethoscope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { GiMedicines } from 'react-icons/gi';



export default class Navbar extends React.Component {
 render() {
    return (
      <>
        <div id="side" style={{height:'100vh'}}>
          <div className="sidebar" style={{width:'268px',height:'100%'}} >
            <div className="logo-details" >
            <img
              style={{
                width: "250px",
                border: "0px solid black",
                borderRadius: "20px",
                marginLeft: "5px",
                marginTop: "92px",
              }}
              src={imagbg2}
            />
            </div>
            <div>
            <ul class="nav-links" style={{marginTop:'121px'}}>
                <div id="dashboard">
             <li>
             
                 {/* <a href="" class="active">  */}
                 <Link to="/Dashboard">  
                  <h6 style={{ color: "white",fontSize:'18px',marginBottom:'35px' }}>
               
                 
                      <MdOutlineDashboard /> 
                     
                 
                  </h6>
                  <span class="links_name" style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
             Dashboard
                  </span>
                  </Link>
                {/* </a>  */}
               
                    
              </li>
              </div>
              <div id="apointment">
              <li>
              <Link to="/Appointment">  
             {/* <a href="" class="active"> */}
                  <h6 style={{ color: "white",fontSize:'15px',marginBottom:'28px' }}>
                    <FaPhoneAlt />
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Appoinments
                  </span>
                {/* </a> */}
              </Link>  
              </li>
              </div>
              <div id="ride">
              <li>
              <Link to="Car">
              {/* <a href="" class="active"> */}
                  <h6 style={{ color: "white",fontSize:'18px',marginBottom:'28px' }}>
                    <AiFillCar />
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Ride and Drive
                  </span>
                  </Link>
                {/* </a> */}
                
              </li>
              </div>
              <div id="prescription">
              <li>
              {/* <a href="" class="active"> */}
              <Link to="/Prescription">
                <h6 style={{ color: "white",fontSize:'18px',marginBottom:'28px' }}>
                    <BsPencilSquare />
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Prescription
                  </span>
                  {/* </a> */}
                  </Link>
              </li>
              </div>
              <div id="medicine">
            <li>
            {/* <a href="" class="active"> */}
            <Link to="/Medicine">
                <h6 style={{ color: "white",fontSize:'18px',marginBottom:'28px' }}>
                    <GiMedicines/>
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Medicine
                  </span>
                  {/* </a> */}
                  </Link>
              </li>
              </div>
              <div id="driver">
              <li>
                
              {/* <a href="" class="active"> */}
              <Link to="Driver">
                  <h6 style={{ color: "white" ,fontSize:'18px',marginBottom:'28px'}}>
                  <BsFillPersonFill/>
                  </h6>
                  <span class="links_name" style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Driver List
                  </span>
                  </Link>
                
              </li>
              </div>
              <div id="case">
              <li>
              {/* <a href="" class="active"> */}
              <Link to="Case">
                  <h6 style={{ color: "white",fontSize:'18px' }}>
                    <MdBarChart/>
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Cases
                  </span>
                {/* </a> */}
                </Link>
              </li>
              </div>
              <div class="patient">
              <li>
              {/* <a href="" class="active"> */}
              <Link to="Patients">
                  <h6 style={{ color: "white",fontSize:'18px' }}>
                    <MdBarChart/>
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    All Patients
                  </span>
              </Link>
              </li>
              </div>
              <div id="doctor">
              <li >
                
              {/* <a href=""  class="active"> */}
              <Link to="Doctor">
                  <h6 style={{ color: "white" ,fontSize:'18px'}}>
                    <FaStethoscope />
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    Doctor
                  </span>
                {/* </a> */}
                </Link>  
              </li>
              </div>
              <div id="whatsapp">
          <li>
          {/* <a href="" class="active"> */}
          <Link to="WhatsApp">
                  <h6 style={{ color: "white",fontSize:'18px' }}>
                    <BsWhatsapp/>
                  </h6>
                  <span class="links_name"  style={{ marginLeft: "20px",fontFamily:'roboto',fontWeight:'medium',fontSize:'18px',opacity:'1',letterSpacing:'24',fontWeight:'medium' }}>
                    WhatsApp to Rx
                  </span>
                {/* </a> */}
                </Link>
              </li>
              </div>
              </ul>
               
            </div>
            </div>
           
          
          </div>
          
          
</>
    )
            };

        }
    
