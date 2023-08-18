import React from "react";
import "./topbar.css";
import {FiPower} from "react-icons/fi";
import {BiBell} from "react-icons/bi";

export default class Topbar extends React.Component{
    constructor(){
        super()
    this.state={
        day:"",
        time:"",
        date:""
    }

   
    }

    componentDidMount=()=>{
        this.getDate();
       
    }

    getDate(){
        // alert(new Date().toLocaleString());
        this.setState({date:new Date().toLocaleString()})
       var time = new Date().toLocaleTimeString();
       this.setState({time:time});
      console.log("My Time", time);
       var day = new Date().getDay();
       if(day==0){
         day="Sunday"
       }else if(day==1){
        day="Monday"
      }else if(day==2){
        day="Tuesday"
      }else if(day==3){
        day="Wednesday"
      }else if(day==4){
        day="Thursday"
      }else if(day==5){
        day="Friday"
      }else{
        day="Saturday"
      }
       this.setState({day:day});
     }

    render(){
        return(
            <>
             <div className="main_nav"> 
             <div > 

                 <div style={{width:"500px", margin:"auto", paddingTop:"25px", fontWeight:"600"}}>  {this.state.day} {this.state.date} </div>
                  </div>
                <div className="bell_div"> <BiBell/> <FiPower/></div>
             </div>
            </>
        )
    }
}