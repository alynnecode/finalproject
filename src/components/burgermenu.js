import React from 'react'
import Container from './StarContainer';



export default class Burgermenu extends React.Component {
    render() {
        return (

      <div className="card w-75">
      <div className="card-header bg-success text-white">
       Burger Menu
      </div>
      <div className="card-body">
      {this.props.x}
      </div>
      <div className="card-footer">
      <ul>
          <li> Big Classic: Double Patty Double Cheese <Container/>
              </li>
              <li> Big Bacon: Double Bacon Double Cheese <Container/>
              </li>
              <li> Big Picke: Double Patty Double Pickle <Container/>
              </li>
              <li> Big Plain: Plain Double Patty  <Container/>
              </li>
       
              </ul>
      
    
     
      </div>
    </div>
      
      );
    }
  }
  