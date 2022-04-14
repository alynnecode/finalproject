import React from "react";

import Container from "./StarContainer";

import Burgermenu from "./burgermenu";



let e = React.createElement;


export default class Mainmenu extends React.Component {
  render() {
      return (


    <div className="card w-75">
    <div className="card-header bg-success text-white">
     Main Menu

    </div>
    <div className="card-body">
    {this.props.x}
    </div>



    
    <div className="card-footer">
    

    
      <Container/>
      
   
    </div>
  </div>
    
    );
  }
}

