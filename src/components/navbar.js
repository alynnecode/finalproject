import React from 'react';
import "./navbar.css"
import {  Link } from "react-router-dom";
import Sidesmenu from './sidesmenu';
const Navbar= () =>{
  return (
		<header class="header">
		<div class="left">
			<a href="#">Rusty's Burgers and More</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>

                
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/burgermenu">Burgers</Link>
    </li>
    <li>
      <Link to="/sidesmenu">Sides</Link>
    </li>
    <li>
      <Link to="/drinksmenu">Drinks</Link>
    </li>
		</ul>
   
  </div>
	<div class="right">
          <a href="#">Order Cart</a>
        </div>



    </header>
  );
}
export default Navbar;