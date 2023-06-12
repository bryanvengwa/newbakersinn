import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
		<>
			<footer>
				<div className="container-fluid back">
					<div className="row">
						<div className="logo">
							<div className="line"></div>
							<div className="logo-container">
								<img
									src="imgs/footer logo.png"
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="line"></div>
						</div>
						<div className=" col-lg-5 col-md-3">
							<h2 className="heading">Instagram Feed</h2>
							<div className="row feed">
								<div className="col-md-4 feed-container">
									<img
										src="imgs/HOTBUN.png"
										className="img-fluid"
										alt="instafeed"
									/>
								</div>
								<div className="col-md-4 feed-container">
									<img
										src="imgs/insta feed.png"
										className="img-fluid"
										alt="instafeed"
									/>
								</div>
								<div className="col-md-4- feed-container">
									<img
										src="imgs/instafeed.png"
										className="img-fluid"
										alt="instafeed"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<ul>
								{" "}
								<li className="heading" id="heading">
									Our Location
								</li>
								<li>1 Sheperton Road,</li>
								<li>Graniteside,</li>
								<li>Harare,</li>
								<li>Zimbabwe.</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-4">
							<ul>
								{" "}
								<li className="heading">
									Get In Touch With Us
								</li>
								<li>
									{" "}
									<span className="icons">
										<img
											src="imgs/call.png"
											className="img-fluid "
											alt="call"
										/>
									</span>{" "}
									08080151
								</li>
								<li className="left">08080152</li>
								<li className="left">+263 242 751 481</li>
								<li className="left">+263 242 710 334</li>
								<li>
									{" "}
									<span className="icons">
										<img
											src="imgs/mail.png"
											className="img-fluid "
											alt="mail"
										/>
									</span>{" "}
									marketing@bakersinnzim.com
								</li>
							</ul>
						</div>
						<div className="col-lg-1 col-md-2">
							<ul>
								<li className="heading">Sitemap</li>
								<li>
									{" "}
									<Link to="/">Home</Link>{" "}
								</li>
								<li>
									<Link to="/about">About Us</Link>{" "}
								</li>
								<li>
									<Link to="/recipes">Recipes</Link>
								</li>
								<li>
									<Link to="/kids">Kid's Corner</Link>
								</li>
							</ul>
						</div>
						<div className="row">
							<div className="line"></div>
							<div className="bottom">
								<div className="left">
									<h5>subsidiary of</h5>
									<img
										src="imgs/inscor_logo@2x 1.png"
										className="img-fluid"
										alt=""
									/>
								</div>
								<div className="right">
									<p>
										Copyright © 2022 Bakers Inn. All rights
										reserved. Site by{" "}
										<span>
											<a href="https://github.com/bryanvengwa/Portfolio">
												Bryan Vengwa
											</a>
										</span>{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
  );
}
