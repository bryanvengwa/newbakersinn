import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import RecipesHeader from '../components/RecipesHeader';
import Overlay from '../components/Overlay';

export default function Recipes(props) {

	const headers = {
		header1: "For Kid's",
		header2: "For Vegans",
		header3: "For Family",
	};
  return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<RecipesHeader />
			<Slider  {...headers} />
			<div className="h50"></div>
			<Footer />
		</>
  );
}
