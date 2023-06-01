import React from 'react'
import { NavLink } from 'react-router-dom';
export default function HomeHeader() {
  return (
		<>
			<header className="home-header">
				<div className="container back ">
					<div className="gradient">
						<div className="row">
							<div className="col-lg-4 col-md-6  header-text">
								<h1>
									Bringing you the <br />{" "}
									<span className="underline">
										best value
									</span>{" "}
									at the <br />{" "}
									<span className="underline">
										{" "}
										best prices.
									</span>{" "}
								</h1>
								<p>
									The freshest sandwiches you can make with
									Baker's inn soft white loaf.
								</p>{" "}
								<NavLink className="read-more" to="/about">
									{" "}
									Read More
								</NavLink>
							</div>

							<div className="col-lg-8 col-md-6 header-bread">
								<div className="bread">
									<img
										src="imgs/groupheader bread.png"
										className="img-fluid"
										alt="loaves of bread"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
  );
}
