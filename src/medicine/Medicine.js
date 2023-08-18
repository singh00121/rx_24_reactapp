import React from "react";
import "./Medicine.css";
// import Navbar from "../navbar/Navbar";

import Topbar from "../main/Topbar";
import { Form ,FormControl } from "react-bootstrap";

export default class Medicine extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* <div className="main_screen2"> */}
           {/* <Topbar />  */}
          {/* <div className="dynamic2"> */}
          <div className="headdd">
              <p>Medicine</p>
              </div>
              <div className="dropdown" style={{ display:"flex"}}>
                  <select className="dropdown2" onChange={this.appointfilter} style={{border:'2px solid grey',fontWeight:'bold'}}>
                    <option style={{fontWeight:'bold'}}>Open</option>
                    <option style={{fontWeight:'bold'}}>option 1</option>
                    <option style={{fontWeight:'bold'}}>option 2</option>
                    <option style={{fontWeight:'bold'}}>option 3</option>
                  </select>

                  {/* <div className="search" style={{width:'250px',marginLeft:'520px'}}> */}
                  <Form
                    style={{
                      width: "320px",
                      marginLeft: "80px",
                      height: "25px",
                    }}
                  >
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      style={{ borderRadius: "20px",width:'256px',height:'29px' }}
                    />
                  </Form>
                 
                  {/* </div> */}
                </div>
           
            <div className="head1">
              <p>Medicine</p>
            </div>

          
            <div className="data1" style={{width:'1068px',marginLeft:'15px',borderRadius:'25px',border:'none',marginBottom:'250px'}}>
               
               {/* <div className="table" style={{width:'1080px'}}> */}
               <table className="table2" style={{ width: "1090px" ,borderSpacing:'0px'}}>
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
                       <th style={{ border: "none" }}>Full Name</th>
                       {/* <th style={{ border: "none" }}>Age</th> */}
                       <th style={{ border: "none" }}>Phone no.</th>
                        <th style={{ border: "none" }}>Address</th> 
                       <th style={{ border: "none" }}>Files</th>
                       <th style={{ border: "none" }}>Update Date Time</th>
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
                        Tower Square
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
                         09/03/2022 10:30AM
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
                         Medicine Prescribed
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
                         Send To Rx
                       </td>
                   
                   </table>
                 {/* </div> */}
                 </div>


           {/* </div> */}
        {/* //  </div> */}
      </>
    );
  }
}