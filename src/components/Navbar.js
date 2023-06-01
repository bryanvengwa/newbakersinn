import React from 'react';
import {NavLink} from 'react-router-dom';
import Hamburger from './Hamburger';



export default function Navbar(props) {
	function handleStyles ({isActive}){
		return {
			color: isActive ? "#261B6C" : "rgb(149,136,184)",

		};

	}
  return (
		<>
			<nav className="nav">
				<NavLink style={handleStyles} to="/">
					<div className="logo">
						<img
							src="imgs/bakersinnlogo.png"
							className="img-fluid"
							alt=""
						/>
					</div>
				</NavLink>

				<ul>
					<li>
						{" "}
						<NavLink style={handleStyles} to="/about">
							About us
						</NavLink>{" "}
					</li>
					<li>
						{" "}
						<NavLink style={handleStyles} to="/products">
							Products
						</NavLink>{" "}
					</li>
					<li>
						{" "}
						<NavLink style={handleStyles} to="/recipes">
							Recipes
						</NavLink>{" "}
					</li>
					<li>
						{" "}
						<NavLink style={handleStyles} to="/kids">
							Kid's Corner
						</NavLink>{" "}
					</li>
					<li>
						{" "}
						<NavLink
							
							to="/contact"
							className="contact"
						>
							Contact Us
						</NavLink>{" "}
					</li>
				</ul>
				<Hamburger isOpen={props.isOpen} toggle={props.toggle} />
			</nav>
		</>
  );
}
