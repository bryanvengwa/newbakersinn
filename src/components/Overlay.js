import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Overlay(props) {

	function NavLinkStyles ({isActive}){
		
		return {
		color : isActive ? '#261B6C'	 : '',
		textDecoration : isActive ? 'line-through' : 'none'

		}

	}

  return (
		<div className={`overlay-menu ${props.isOpen ? "" : "active-menu"}`}>
			<ul>
				<li>
					{" "}
					<NavLink style={NavLinkStyles} to="/" onClick={props.toggle}>
						Home
					</NavLink>{" "}
				</li>
				<li>
					{" "}
					<NavLink
						style={NavLinkStyles}
						to="/about"
						onClick={props.toggle}
					>
						About
					</NavLink>{" "}
				</li>
				<li>
					{" "}
					<NavLink
						style={NavLinkStyles}
						to="/products"
						onClick={props.toggle}
					>
						Products
					</NavLink>{" "}
				</li>
				<li>
					{" "}
					<NavLink
						style={NavLinkStyles}
						to="/recipes"
						onClick={props.toggle}
					>
						Recipes
					</NavLink>{" "}
				</li>
				<li>
					{" "}
					<NavLink
						style={NavLinkStyles}
						to="/kids"
						onClick={props.toggle}
					>
						Kid's Corner
					</NavLink>{" "}
				</li>
				<li>
					{" "}
					<NavLink
						style={NavLinkStyles}
						to="/contact"
						onClick={props.toggle}
					>
						Contact Us
					</NavLink>{" "}
				</li>
			</ul>
		</div>
  );
}
