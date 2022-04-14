import React from 'react'
import Container from './StarContainer';



export default class Drinksmenu extends React.Component {
    render() {
        return (
      <div className="card w-75">
      <div className="card-header bg-success text-white">
       Drinks Menu
      </div>

      <div className="card-footer">
      <ul>
      <li> Sizes: One Size (Regular)
              </li>
           
          <li> Sprite <Container/>
              </li>
             
              <li> Limeade <Container/>
              </li>
              <li> Coke <Container/>
              </li>
              <li> Dr. Pepper <Container/>
              </li>

              </ul>
      
    
     
      </div>
    </div>
      
      );
    }
  }
  