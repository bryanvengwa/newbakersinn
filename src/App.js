import "./App.scss";
import Loader from "./components/Loader";

import { Routes, Route } from "react-router-dom";
import { lazy, useState , Suspense } from "react";

const Home = lazy(()=>import  ("./pages/Home"))
const About= lazy(()=>import  ("./pages/About"))
const Products = lazy(() => import("./pages/Products"));
const Kids = lazy(() => import("./pages/Kids"));
const Contact = lazy(()=>import("./pages/Contact"))
const Recipes = lazy(()=>import("./pages/Recipes") )

function App() {
	const [isOpen, setIsOpen] = useState(false);
	function toggle() {
		setIsOpen((prevVAlue) => !prevVAlue);
	}
	const headers = {
		header1: "For Kid's",
		header2: "For Vegans",
		header3: "For Family",
	};
	// / code for the active tab handler
	const [activeTab, setActiveTab] = useState(1);

	const data = [
		{
			bigimg: "imgs/shwarmabig.png",
			smallimg: "imgs/shwarmasmall.png",
			heading: "Shwarma Sandwich",
		},
		{
			bigimg: "imgs/shortbreadbig.png",
			smallimg: "imgs/breadsmall.png",
			heading: "Sweet ShortBread",
		},
		{
			bigimg: "imgs/salmonbig.png",
			smallimg: "imgs/salmonsmall.png",
			heading: "Salmon Strips",
		},
	];
	const [currentData, setCurrentData] = useState(data[0]);

	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
		setCurrentData(data[tabIndex - 1]);
	};
	////////////////Code Forn showing modal for///////////////////
	const [ShowRecipeModal, setRecipeShowModal] = useState(false);
	function RecipeModal() {
		setRecipeShowModal((old) => !old);
	}

	return (
		<div>
			<Suspense  fallback={<Loader/>} >
				<Routes>
					<Route
						path="/"
						element={
							<Home
								currentData={currentData}
								isOpen={isOpen}
								headers={headers}
								toggle={toggle}
								activeTab={activeTab}
								handleTabClick={handleTabClick}
								ShowRecipeModal={ShowRecipeModal}
								RecipeModal={RecipeModal}
							/>
						}
					/>
					<Route
						path="/about"
						element={<About isOpen={isOpen} toggle={toggle} />}
					/>
					<Route
						path="/Products"
						element={
							<Products
								isOpen={isOpen}
								headers={headers}
								toggle={toggle}
								activeTab={activeTab}
								handleTabClick={handleTabClick}
							/>
						}
					/>
					<Route
						path="/recipes"
						element={
							<Recipes
								headers={headers}
								currentData={currentData}
								isOpen={isOpen}
								toggle={toggle}
								activeTab={activeTab}
								handleTabClick={handleTabClick}
								ShowRecipeModal={ShowRecipeModal}
								RecipeModal={RecipeModal}
							/>
						}
					/>
					<Route
						path="/kids"
						element={<Kids isOpen={isOpen} toggle={toggle} />}
					/>
					<Route
						path="/contact"
						element={<Contact isOpen={isOpen} toggle={toggle} />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
