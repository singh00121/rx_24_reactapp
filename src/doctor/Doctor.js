import React from "react";
import "./Doctor.css";
// import Navbar from "../navbar/Navbar";
import Topbar from "../main/Topbar";
import { Form ,FormControl,Button} from "react-bootstrap";

export default class Doctor extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* <div className="main_screen1"> */}
           {/* <Topbar />  */}
          {/* <div className="dynamic1"> */}
            <div className="headd7">
              <p>Doctor List</p>
              <div className="btn">
        <button id="btn1" style={{border:'2px solid #FE3B4F'}}>
                  Doctor Category
              </button></div>
        </div>
       
              <div className="dropdown" style={{ display:"flex",marginLeft:'8px',marginTop:'35px'}}>
                  <select className="dropdown7" onChange={this.appointfilter} style={{border:'2px solid grey',fontWeight:'bold'}}>
                    <option style={{fontWeight:'bold'}}>All</option>
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
                  <Button
                    style={{
                      width: "230px",
                      marginLeft: "80px",
                      height: "35px",
                      borderRadius:'25px',
                      backgroundColor:'#FE3B4F',
                      border:'1px solid grey',
                      fontSize:'19px',
                      color:'white',
                      // display:'block'
                      marginTop:"1px"
                    }}
                    onClick={() => {
                      this.showModal2();
                    }}
                  >
                    Add New Doctor
                  </Button>
                  {/* </div> */}
                </div>
           
            <div className="head7">
              <p>115 Doctor</p>
            </div>

          
            <div className="data7" style={{width:'1068px',marginLeft:'15px',borderRadius:'25px',border:'none',marginBottom:'250px'}}>
               
               {/* <div className="table" style={{width:'1080px'}}> */}
               <table className="table7" style={{ width: "1090px" ,borderSpacing:'0px'}}>
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
                       <th style={{ border: "none" }}>Category</th>
                       <th style={{ border: "none" }}>Doctor Name</th>
                       {/* <th style={{ border: "none" }}>Age</th> */}
                       <th style={{ border: "none" }}>Phone no.</th>
                        <th style={{ border: "none" }}>Address</th> 
                       <th style={{ border: "none" }}>Degree</th>
                       <th style={{ border: "none" }}>Form</th>
                       <th style={{ border: "none" }}>To</th>
                       <th style={{ border: "none" }}>Fee</th>
                      
                       <th style={{
                           border: "none",
                           borderRadius: "0px 8px 8px 0px",
                           height: "20px",
                         }}
                       >
                         Status
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
                        Cardiologist
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
                       {/* <td
                         style={{
                           border: "none",
                           fontSize: "15px",
                           fontFamily: "roboto",
                           fontWeight: "700",
                         }}
                       >
                         tower square
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
                         M.B.B.S
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
                        11:20 AM
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
                         01:30 PM
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
                         1000
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
                              <label class="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>
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
