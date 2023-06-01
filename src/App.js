
import './App.scss';
import { Routes , Route  } from 'react-router-dom';
import {useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Kids from './pages/Kids';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
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


  return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							isOpen={isOpen}
							headers={headers}
							toggle={toggle}
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
						/>
					}
				/>
				<Route
					path="/recipes"
					element={<Recipes isOpen={isOpen} toggle={toggle} />}
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
		</div>
  );
}

export default App;
