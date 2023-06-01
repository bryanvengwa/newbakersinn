import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Overlay from '../components/Overlay';
import AboutHeader from '../components/AboutHeader';

export default function About(props) {
  return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<AboutHeader/>
			<section className="mission">
				<div className="container">
					<div className="row">
						<div className="col-md-1"></div>

						<div className="col-md-5">
							<div className="mission-container">
								<div className="img-container">
									<img
										src="imgs/our mission flag.png"
										className="img-fluid"
										alt="flag"
									/>
								</div>
								<div className="text-container">
									<h2>Our Mission</h2>
									<p>
										To sharpen our edge in the manufacture
										and marketing of quality baked products
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-5">
							<div className="mission-container">
								<div className="img-container">
									<img
										src="imgs/our vision eye.png"
										className="img-fluid"
										alt="eye"
									/>
								</div>
								<div className="text-container">
									<h2>Our Vision</h2>
									<p>
										To provide a nourishing, convinient and
										accessible answer to hunger's call
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="values">
				<div className="container">
					<h1>Our Core Values</h1>
					<div className="row">
						<div className="col-md-4">
							<div className="card" width="20rem">
								<div className="img-container">
									<img
										src="imgs/teamwork.png"
										data-tab="1"
										className="img-fluid recipes  active"
										alt="teamwork"
									/>
								</div>
								<div className="card-body">
									<h2>Teamwork</h2>
									<p>
										we set inspiring goals that we persue
										with passion, unity and focus. We
										support each other, build our strengths
										and ensure that every player in our team
										contributes fully.We play to win and
										realise that energy , communication and
										alignment bind us together.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card" width="22rem">
								<div className="img-container">
									<img
										src="imgs/respect.png"
										data-tab="1"
										className="img-fluid recipes  active"
										alt="respect"
									/>
								</div>
								<div className="card-body">
									<h2>Respect</h2>
									<p>
										{" "}
										We build self-esteem by treating each
										other fairly,communicating directly and
										respectfully. We have empathy discipline
										and build onour diversity as a source of
										strength, creativity and innovation.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card" width="22rem">
								<div className="img-container">
									<img
										src="imgs/integrity.png"
										data-tab="1"
										className="img-fluid recipes  active"
										alt="integrity"
									/>
								</div>
								<div className="card-body">
									<h2>integrity</h2>
									<p>
										We uphold the highest professional and
										ethical standards.We guard the reputaion
										of our brands. Our promises are
										bankable.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-4">
						<div className="card" width="22rem">
							<div className="img-container">
								<img
									src="imgs/commitment.png"
									data-tab="1"
									className="img-fluid recipes  active"
									alt="bakers inn shop"
								/>
							</div>
							<div className="card-body">
								<h2>Commitment</h2>
								<p>
									We are accountable to our stakeholders and
									commit to deliver wat we promise. We
									translate plans into actions; strategies
									into achievements and tangible returns.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" width="22rem">
							<div className="img-container">
								<img
									src="imgs/excellence.png"
									data-tab="1"
									className="img-fluid recipes  active"
									alt="bakers inn shop"
								/>
							</div>
							<div className="card-body">
								<h2>Commitment</h2>
								<p>
									We strive to be the best in our business. We
									improve all the time, In all aspects and
									passionately deliver at the highest level.We
									offer superior value and present our
									offering with pride.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
			</section>
			<section className="donate" id="donate">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12">
							<div className="img-container">
								<img
									src="imgs/ceo.png"
									className="img-fluid"
									alt="ceo"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12 text">
							<h1>Promise of quality</h1>
							<p>
								Thank you for visiting our website. At baker's
								Inn, we are commited to delivering quality
								premium bread to our customers. We work with a
								team of over 1500 employees nationwide.Our aim
								is to uphold the highest ethical standards and
								perpectuate excellence in the delivery of our
								products. For us at baker's Inn, we aim to
								improve the accesibility of our bread. We are
								accountable to our stakeholders to deliver what
								we promise.{" "}
							</p>
							<p>
								We translate plans into action; dreams into
								reality; strategies into achievements and
								tangible returns. We strive to be the best in
								our business and i our partnerships.We are
								committed to every retail outlet, tuckshop,
								vender and consumer in Zimbabwe. We have built
								our top quality brand and continue to grow as a
								company because of you. Thank you for your
								continues support of our brand.
							</p>
							<p>
								We ser inspiring goals we set with passion,
								unity and focus. We support each other, build on
								our strengths and ensure that every player in
								our team contributes fully. We play to win and
								realise that energy , communication and
								alignment bind us together.
							</p>
							<div className="signature">
								<h1>C:E:O:</h1>
								<div className="sig-container">
									<img
										src="imgs/signature.png"
										className="img-fluid"
										alt="signature"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
  );
}
