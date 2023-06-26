import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeAbout() {
  return (
		<>
			<section className="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 about-responsiveness col-md-5 about-responsiveness">
							<h1>About Baker's Inn</h1>
						</div>
						<div className=" col-lg-7 about-responsiveness col-md-7 about-responsiveness">
							<p>
								It all started in the eighties when Baker's Inn
								was just a small confectionery company that
								employed 40 people and produced about 30,000
								loaves a day. We now aim to provide a
								nourishing, convinient and accessible answer to
								hunger's call.{" "}
							</p>{" "}
							<NavLink className=" read-more more" to="/about">
								{" "}
								READ MORE
							</NavLink>
						</div>
					</div>
					<div className="row bottom">
						<div className="col-md-3 about-responsiveness">
							<div className="img-container">
								<img
									src="imgs/sandwich.png"
									className="img-fluid"
									alt="sandwich"
								/>
							</div>
						</div>
						<div className="col-md-3 about-responsiveness">
							<div className="img-container">
								<img
									src="imgs/pie.png"
									className="img-fluid"
									alt="pie"
								/>
							</div>
						</div>
						<div className="col-md-3 about-responsiveness">
							<div className="img-container">
								<img
									src="imgs/doughnut tea.png"
									className="img-fluid"
									alt="doughnut with tea"
								/>
							</div>
						</div>
						<div className="col-md-3 about-responsiveness">
							<div className="img-container">
								<img
									src="imgs/slices.png"
									className="img-fluid"
									alt="slices"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
