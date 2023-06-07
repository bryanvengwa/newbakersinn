import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Overlay from "../components/Overlay";
import HomeProductsRange from "../components/HomeProductsRange";
import HomeHeader from "../components/HomeHeader";
import HomeAbout from "../components/HomeAbout";
import Promotions from "../components/Promotions";
import Kids from "../components/Kids";
import SliderModal from "../components/SliderModal";
export default function Home(props) {
	const [showmodal, setShowModal] = useState(false);
	const [showDonation, setShowDonation] = useState(false);
	//        //////////////// current data

	function booking() {
		setShowModal((old) => !old);
	}
	function donation() {
		setShowDonation((old) => !old);
	}
	

	return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<HomeHeader />
			<HomeAbout />
			<HomeProductsRange />

			<section className="bookings">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-7  text">
							<h1>Book A Factory Tour</h1>
							<p>
								Keep on seeing how Baker's Inn products are
								made? Are you intrested in a feild trip day for
								your school's className? Get in touch with us to
								book a tour of our factory that is closest to
								you. Fill in the booking form and will get back
								to you.
							</p>
							<button
								className="btn openModalA"
								onClick={booking}
							>
								BOOK FACTORY TOUR
							</button>
						</div>
						<div className="col-lg-6 col-md-5  ">
							<div className="img-container">
								<img
									src="imgs/factory bread.png"
									className="img-fluid"
									alt="factory bread"
								/>
							</div>
						</div>
					</div>
				</div>
				{showmodal && (
					<div className="modalA">
						<button className="close-modalA" onClick={booking}>
							&times;
						</button>
						<h1>Book A Factory Tour</h1>
						<form action="">
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Name of Organisation"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Name of Contact Person"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Organization Address"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Organization’s Resident Town"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Contact Person’s Telephone"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Contact Person’s E-mail"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Date of Visit"
									/>
								</div>
								<div className="div">
									<select
										name="participants"
										className="w50"
										id="participants"
									>
										<option value="30">
											Number of participants
										</option>
										<option value="30">30</option>
										<option value="60">60</option>
										<option value="100">100</option>
									</select>
								</div>
							</div>
							<div className="div">
								<select name="age" className="w50" id="">
									<option value="">
										Age Range Of Participants
									</option>
									<option value="">6-12</option>
									<option value="">12-18</option>
									<option value="">18-25</option>
									<option value="">25+</option>
								</select>
							</div>
						</form>
						<div className="flex-containers">
							<div className="parag">
								<p className="left">
									Plant Visit{" "}
									<a href="/">Terms & Conditions</a>
								</p>
							</div>
							<div className="parag">
								<p className="right">
									Plant Visit{" "}
									<a href="/">Safety Regulations</a>
								</p>
							</div>
						</div>
						<div className="div">
							<div className="flex">
								<form action="">
									<input type="checkbox" id="knowledge" />
								</form>
								<p className="your">
									Your organisation has agreed to the
									submission of this application and you have
									authorisation to submit it. The information
									you have provided on behalf of your
									organisation is accurate, full and correct.
								</p>
							</div>
							<div className="flex">
								<form action="">
									<input type="checkbox" id="knowledge" />
								</form>
								<p>Have Read The Safety Regulations</p>
							</div>

							<div className="div ">
								<button className="btn button">Submit</button>
							</div>
						</div>
					</div>
				)}
				<div className="overlays"></div>
			</section>
			<section className="donate">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-5 ">
							<div className="img-container">
								<img
									src="imgs/donate .png"
									className="img-fluid"
									alt="donate"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-7  text">
							<h1>Request A Donation</h1>
							<p>
								If you are holding an event that you wish to
								have us donate to we're more than glad to help.
								Fill in the donation form for us to best
								understand how we can increase your event's
								impact in the local community.{" "}
							</p>
							<button
								className="btn openModalB"
								onClick={donation}
							>
								REQUEST DONATION
							</button>
						</div>
					</div>
				</div>

				{showDonation && (
					<div className="modalA modalB ">
						<button className="close-modalB" onClick={donation}>
							&times;
						</button>
						<h1>Request Product Donations</h1>
						<p className="p-tag">
							You can apply for product donations by completing
							this form, we will contact you should your
							application be successful. Please bear in mind that
							we will need at least 3 weeks’ notice to the date of
							your event
						</p>
						<form action="">
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Name of Organisation"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Name of Contact Person"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Contact Person Position"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Organization Address"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Contact Person’s Telephone"
									/>
								</div>
								<div className="div">
									<input
										type="text"
										placeholder="Contact Person’s E-mail"
									/>
								</div>
							</div>
							<div className="flex-container">
								<div className="div">
									<input
										type="text"
										placeholder="Date of Event"
									/>
								</div>
								<div className="div">
									<select
										name="donations"
										className="w50"
										id="donations"
									>
										<option value="30">
											intended use of Donations
										</option>
										<option value="30">Charity</option>
										<option value="60">Fundraising</option>
										<option value="100">Sponsorship</option>
									</select>
								</div>
							</div>
							<div className="flex-containerB">
								<div className="div">
									<select
										name="participants"
										className="w50"
										id="participants"
									>
										<option value="30">
											Number of Attendants
										</option>
										<option value="30">30</option>
										<option value="60">60</option>
										<option value="100">100</option>
									</select>
								</div>
								<div className="div">
									<select name="age" className="w50" id="">
										<option value="">
											What Product Are Specifically
											Looking For?
										</option>
										<option value="">6-12</option>
										<option value="">12-18</option>
										<option value="">18-25</option>
										<option value="">25+</option>
									</select>
								</div>
							</div>
						</form>

						<div className="div ">
							<button
								className="btn button openNext"
								onClick={donation}
							>
								Proceed to next step
							</button>
						</div>
					</div>
				)}
				<div className="modalC hidden">
					<button className="close-modalC">&times;</button>
					<h1>Request Product Donations</h1>
					<form action="">
						<div className="flex-container">
							<div className="div">
								<textarea
									name="productUse"
									id="products"
									cols=""
									rows="10"
									placeholder="How Do You Inted On Using the Product?"
								></textarea>
							</div>
						</div>
						<div className="flex-containerB">
							<div className="div">
								<textarea
									name="benefit"
									id="benefit"
									className="benefit"
									cols="10"
									rows="10"
									placeholder="How will the community benefit from you as a result of our donation?"
								></textarea>
							</div>
						</div>
					</form>
					<div className="div ">
						<button className="btn buttons">
							Submit Application
						</button>
					</div>
				</div>
			</section>
			<Kids />

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

			<Promotions />
			<Footer />
		</>
	);
}
