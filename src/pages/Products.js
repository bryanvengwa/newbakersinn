import React , {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Slider from '../components/Slider';
import ProductsSlider from '../components/ProductsSlider';
import Overlay from '../components/Overlay';

export default function Products(props) {
	const [activeTab , setActiveTab] = useState(1)
	const changeTab = (currentTab)=>{
		setActiveTab(currentTab)
	
	}
  return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<header className="home-header">
				<div className="container back" id="products">
					<div className="gradient"></div>
					<div className="text">
						<h2>Our Products Range</h2>
						<div className="down-arrow">
							<img
								src="imgs/arrow down.png"
								className="img-fluid"
								alt=""
							/>
						</div>
					</div>
				</div>
			</header>
			<ProductsSlider
				activeTab={activeTab}
				changeTab={changeTab}
				{...props.headers}
			/>
			<Footer />
		</>
  );
}
