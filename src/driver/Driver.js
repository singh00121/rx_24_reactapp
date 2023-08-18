import React from "react";
import "./Driver.css";
// import Navbar from "../navbar/Navbar";
import { MdEdit } from "react-icons/md";

import Topbar from "../main/Topbar";
import { Form ,FormControl,Button } from "react-bootstrap";

export default class Driver extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* <div className="main_screen2"> */}
           {/* <Topbar />  */}
          {/* <div className="dynamic2"> */}
          <div className="headdd5">
              <p>Drivers</p>
              </div>
             
           
            <div className="head5">
              <p>3 Driver</p>
            </div>

          
            <div className="data5" style={{width:'1068px',marginLeft:'15px',borderRadius:'25px',border:'none',marginBottom:'250px'}}>
               
               {/* <div className="table" style={{width:'1080px'}}> */}
               <table className="table5" style={{ width: "600px" ,borderSpacing:'0px'}}>
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
                       {/* <th style={{ border: "none" }}>Case Id</th> */}
                       <th style={{ border: "none" }}>Driver Name</th>
                      
                       <th style={{ border: "none" }}>Phone no.</th>
                        <th style={{ border: "none" }}>Car Detail</th> 
                      
                      
                       <th style={{
                           border: "none",
                           borderRadius: "0px 8px 8px 0px",
                           height: "20px",
                         }}
                       >
                         Edit
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
                       {/* <td
                      
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                        11
                       </td> */}
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
                    White Baleno
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
                      <MdEdit/>
                       </td>
                       
                       
                   
                   </table>

                   <div className="driverdetail" >
                  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="driver1" >Driver Name</Form.Label>
    <Form.Control className="mb-2" controlId="name" type="Text"  placeholder="Abhishek Gour"/><br/><br/>
     <Form.Label className="driver2" style={{marginRight:'200px'}} >Driver Phone No.</Form.Label>
     <Form.Control  className="mb-4" controlId="name" type="text" placeholder="9770069496"  /><br/><br/>
     <Form.Label className="driver3" >Vehicle Number</Form.Label>
    <Form.Control className="mb-5" controlId="name" type="text" placeholder="MP09 2365"  /><br/><br/>
    <Form.Label className="driver4"  >Vehicle Make</Form.Label>
    <Form.Control className="mb-6"  controlId="name" type="text" placeholder=" Blue Baleno" />
  </Form.Group>
  <Button  id="sub1" type="submit" >
    + Add Driver
  </Button>
</Form>
</div>

                 
                  
 
                 
                 
               
                   </div>
                


          
      </>
    );
  }
}