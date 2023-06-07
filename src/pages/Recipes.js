import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import RecipesHeader from "../components/RecipesHeader";
import Overlay from "../components/Overlay";
import SliderModal from "../components/SliderModal";

export default function Recipes(props) {
	return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<RecipesHeader />

			<Slider
				{...props.headers}
				RecipeModal={props.RecipeModal}
				activeTab={props.activeTab}
				handleTabClick={props.handleTabClick}
			/>

			{props.ShowRecipeModal && (
				<SliderModal
					RecipeModal={props.RecipeModal}
					{...props.currentData}
				/>
			)}
			<div className="h50"></div>
			<Footer />
		</>
	);
}
