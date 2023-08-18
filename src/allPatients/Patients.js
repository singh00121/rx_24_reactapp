import React from "react";
import "./Patients.css";
// import Navbar from "../navbar/Navbar";
import Topbar from "../main/Topbar";
import { Form ,FormControl } from "react-bootstrap";
export default class Patients extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {/* <div className="main_screen2"> */}
           {/* <Topbar />  */}
          {/* <div className="dynamic2"> */}
            <div className="headdddd">
              <p>All Users</p>
             <div className="search">
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
                  </div>
           </div>
            <div className="head7">
              <p>Total 650 Cases</p>
            </div>
            <div className="data7" style={{width:'1068px',marginLeft:'15px',borderRadius:'25px',border:'none',marginBottom:'250px'}}>
               {/* <div className="table" style={{width:'1080px'}}> */}
               <table className="table7" style={{ width: "590px" ,borderSpacing:'0px'}}>
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
                       <th style={{ border: "none" }}>Login Id</th>
                       <th style={{ border: "none" }}>Login Name</th>
                       {/* <th style={{ border: "none" }}>LOgin No</th> */}
                       <th style={{
                           border: "none",
                           borderRadius: "0px 8px 8px 0px",
                           height: "20px",
                         }}
                       >
                         LoginNo
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
                      // id={data.appointment_id}
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                           textAlign:'center'
                         }}
                       >
                        458679
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
                         9770069496
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









