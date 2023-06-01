import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeProductsRange() {
  return (
		<>
			<section className="products">
				<div className="container">
					<div className="row">
						<h1>Our Product Range</h1>
						<div className="col-md-3">
							<div className="img-container">
								<img
									src="imgs/breadslices.png"
									className="img-fluid"
									alt="bread slices"
								/>
								<div className="overlay">
									<h2>Bread</h2>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="img-container">
								<img
									src="imgs/pie.png"
									className="img-fluid"
									alt="meat pies"
								/>
								<div className="overlay">
									<h2>Meat Pies</h2>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="img-container">
								<img
									src="imgs/scones.png"
									className="img-fluid"
									alt="scones"
								/>

								<div className="overlay">
									<h2>Scones</h2>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="img-container">
								<img
									src="imgs/donuts.png"
									className="img-fluid"
									alt="Dougnuts"
								/>

								<div className="overlay">
									{" "}
									<h2>Dougnuts</h2>
								</div>
							</div>
						</div>
						<div className="button-holder">
							{" "}
							<NavLink to="/products" className="complete">
								VIEW COMPLETE RANGE
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
