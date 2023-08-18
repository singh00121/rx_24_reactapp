import React from "react";
import "./Dashboard.css";
// import Navbar from "../navbar/Navbar";

// import Topbar from "./Topbar";
import { Card } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import {AiOutlineClose} from "react-icons/ai";



export default class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* <div className="main_screen"> */}
          {/* <Topbar /> */}
          {/* <div className="dynamic"> */}
            <div style={{}}>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <div className="col-md-3" style={{ marginTop: "35px" }}>
                <div className="card1" style={{}}>
                  <Card>
                    <div className="brief">
                      {" "}
                      <FaPhoneAlt />
                    </div>
                    <Card.Body className="appoin">
                      <Card.Title style={{ marginBottom: "9px" }}>
                        Appoinments
                      </Card.Title>
                      <span>10</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="col-md-3" style={{ marginTop: "35px" }}>
                <div className="card2" style={{}}>
                  <Card>
                    <div className="brief2">
                      {" "}
                      <FaFileDownload />
                    </div>
                    <Card.Body className="appoin2">
                      <Card.Title style={{ marginBottom: "9px" }}>
                        Prescription
                      </Card.Title>
                      <span>10</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-3" style={{ marginTop: "35px" }}>
                <div className="card3" style={{}}>
                  <Card>
                    <div className="brief3">
                      {" "}
                      <FaAmbulance />
                    </div>
                    <Card.Body className="appoin3">
                      <Card.Title style={{ marginBottom: "9px" }}>
                        Free Drivers
                      </Card.Title>
                      <span>10</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-3" style={{ marginTop: "35px" }}>
                <div className="card4" style={{}}>
                  <Card>
                    <div className="brief4">
                      {" "}
                      <FaRegUser />
                    </div>
                    <Card.Body className="appoin4">
                      <Card.Title style={{ marginBottom: "9px" }}>
                        Total User
                      </Card.Title>
                      <span>10</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="head">
              <p>Appoinment</p>
            </div>

          
            <div className="data" style={{width:'1068px',marginLeft:'15px',borderRadius:'25px',border:'none',marginBottom:'250px'}}>
               
               <table className="table" style={{ width: "1090px" ,borderSpacing:'0px'}}>
                     <tr
                       style={{
                         backgroundColor: "#D5D5D5",
                         fontSize: "15px",
                         border: "none",
                         height: "30px",
                         fontFamily: "roboto",
                         fontWeight: 700,
                         
                       }}
                     >
                       <th
                         style={{
                           border: "none",
                           borderRadius: "8px 0px 0px 8px",
                           paddingLeft: "10px",
                           height: "20px",
                         }}
                       >
                         Sr.no
                       </th>
                       <th style={{ border: "none" }}>Case Id</th>
                       <th style={{ border: "none" }}>Full Name</th>
                       <th style={{ border: "none" }}>Age</th>
                       <th style={{ border: "none" }}>Phone no.</th>

                       <th style={{ border: "none" }}>Doctor Name</th>
                       <th style={{ border: "none" }}>Appoint Time</th>
                       <th style={{ border: "none" }}>Status</th>
                       <th style={{
                           border: "none",
                           borderRadius: "0px 8px 8px 0px",
                           height: "20px",
                         }}
                       >
                         Remark
                       </th>
                     </tr>
                   
                       <td
                         style={{
                           border: "none",
                           paddingLeft: "10px",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center',
                           paddingTop:'10px'
                            }}
                       >
                         
                         1
                       </td>
                       <td
      
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                        11
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                         Abhishek gour
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                         29
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                        9770069496
                       </td>
                    
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                         Abhishekkkkkkkkkkkkk
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                        11:20
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                         open
                       </td>
                       <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                         Booked on call
                       </td>


                   
                   </table>


                  
                 
                  

                   
                   
                   
</div>
















                 </div>
              
           


           {/* </div> */}
         {/* </div> */}
      </>
  
    
    );
  }
}
   

