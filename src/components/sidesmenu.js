import React from 'react'
import Container from './StarContainer';



export default class Sidesmenu extends React.Component {
    render() {
        return (
      <div className="card w-75">
      <div className="card-header bg-success text-white">
       Sides Menu
      </div>
      <div className="card-body">
      {this.props.x}
      </div>
      <div className="card-footer">
      <ul>
          <li> Fries <Container/>
              </li>
              <li> Onion Rings  <Container/>
              </li>
              <li> Cheese Sticks <Container/>
              </li>
              <li> Churros <Container/>
              </li>
       
              </ul>
      
    
     
      </div>
    </div>
      
      );
    }
  }
  