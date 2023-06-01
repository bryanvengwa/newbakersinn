import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Overlay from '../components/Overlay';

export default function Contact(props) {
  return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<header className="home-header" id="backs">
				<div className="container backs">
					<div className="gradient"></div>

					<div className="text">
						<h2>Contact Us</h2>
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
			<section className="values" id="factories">
				<div className="container" id="factory-background">
					<br />
					<br />
					<br />

					<div className="row">
						<div className="col-lg-2 col-md-1"></div>
						<div className="col-lg-4 col-md-5">
							<div className="card" width="22rem">
								<div className="img-container">
									<img
										src="imgs/about us header.png"
										data-tab="1"
										className="img-fluid recipes  active"
										alt="bakers inn shop"
									/>
								</div>
								<div className="card-body">
									<h2>Harare Bread Factory</h2>
									<p>
										1 Shepperton Road, Graniteside, Harare{" "}
										<br />
										<br /> +263 242 710334, +263 242 751481,
										<br /> +263 242 751572, +263 242 758659{" "}
										<br />
										<br /> <span>
											VOIP:
										</span> 08677006178 <br />{" "}
										<span>Econet Toll Free:</span> 08080151,
										08080152
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-5">
							<div className="card" width="22rem">
								<div className="img-container">
									<img
										src="imgs/contactstore.png"
										data-tab="1"
										className="img-fluid recipes  active"
										alt="bakers inn shop"
									/>
								</div>
								<div className="card-body">
									<h2>Harare Bread Factory</h2>
									<p>
										22 A Bellevue Road, Belmont, Bulawayo{" "}
										<br />
										<br /> +263 9 78279, +263 9 68826, +263
										9 68381,
										<br /> +263 9 68383, +263 9 69592, +263
										9 76693 <br />
										<br /> <span>
											VOIP:
										</span> 08677006179 <br />{" "}
										<span>Econet Toll Free:</span> 08080151,
										08080152
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-2 col-md-1"></div>
					</div>
				</div>
			</section>
			<section className="depots">
				<div className="container">
					<h2>List Of Baker's Inn Depots</h2>
					<div className="row flex-container">
						<table id="customers">
							<tbody>
								<tr>
									<th>Depot</th>
									<th className="in">Address</th>
									<th>Phone Number</th>
								</tr>
								<tr>
									<td className="heavy">Chinhoyi Depot</td>
									<td>
										94/95 Josiah Tongogara St, Industrial
										Site, Chinhoyi
									</td>
									<td className="heavy">0772 318 309</td>
								</tr>
								<tr>
									<td className="heavy">Bindura Depot</td>
									<td>
										461 Luton Road, Industrial Site, Bindura
									</td>
									<td className="heavy">066 2107317</td>
								</tr>
								<tr>
									<td className="heavy">Murehwa Depot</td>
									<td>
										Stand number 351 Murehwa Growth Point
									</td>
									<td className="heavy">0652 122 514</td>
								</tr>
								<tr>
									<td className="heavy">Mutare Depot</td>
									<td>
										5-7 Glasgow Road, Industrial Site,
										Mutare
									</td>
									<td className="heavy">066 2107317</td>
								</tr>
								<tr id="space">
									<td></td>
									<td className="in"></td>
									<td></td>
								</tr>
								<tr>
									<td className="heavy">Hwange Depot</td>
									<td>
										29 Derby Drive, Hwange Industrial Site
									</td>
									<td className="heavy">0652 122 514</td>
								</tr>
								<tr>
									<td className="heavy">Chiredzi Depot</td>
									<td>329 Lion Drive, Chiredzi</td>
									<td className="heavy">0281 2820105</td>
								</tr>
								<tr>
									<td className="heavy">Masvingo Depot</td>
									<td>1310 Mineral Road, Masvingo</td>
									<td className="heavy">0231 231 2709</td>
								</tr>
								<tr>
									<td className="heavy">Gweru Depot</td>
									<td>1843 Main Street, Gweru</td>
									<td className="heavy">039 266 333</td>
								</tr>
								<tr>
									<td className="heavy">Zvishavane Depot</td>
									<td>
										Shabanie Mine Club, Noelville,
										Zvishavane
									</td>
									<td className="heavy">0772 395567</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section className="enquiries">
				<div className="container">
					<div className="row">
						<img
							src="imgs/contactpeople.png"
							className="img-fluid"
							alt=""
						/>
					</div>
					<div id="bottom">
						<div className="text-container">
							<h4>For job enquiries , email your CV to</h4>
							<p>hr@bakersinnzim.com</p>
						</div>
						<div className="flex-container">
							<h4>For general enquiries, email</h4>
							<p>marketing@bakersinnzim.com</p>
						</div>
					</div>
				</div>
			</section>
			<section className="callback">
				<div className="container">
					<h1>Request A Callback</h1>
					<p>
						Complete the form below and we will respond within 24
						hours.
					</p>
					<form action="">
						<div className="flex-container">
							<div className="div">
								<select
									id="country"
									className="w50"
									name="YourTitle"
									placeholder="Your Title"
								>
									<option value="Mr">Your Title</option>
									<option value="Mrs">Mrs</option>
									<option value="Mrs">Mr</option>
									<option value="DR">Dr</option>
									<option value="DR">Sir</option>
								</select>
							</div>
							<div className="div">
								<input
									type="text"
									id="fname"
									className="w50"
									name="firstname"
									placeholder="Your Name"
								/>
							</div>
						</div>
						<div className="flex-container">
							<div className="div">
								<input
									type="number"
									className="w50"
									id="fname"
									name="phonenumber"
									placeholder="Your Phone Number"
								/>
							</div>
							<div className="div">
								<input
									type="text"
									className="w50"
									id="fname"
									name="email"
									placeholder="Your Email"
								/>
							</div>
						</div>
						<div className="div">
							<select
								id="country"
								className="w100"
								name="YourTitle"
								placeholder="Your Title"
							>
								<option value="Mr">
									Select Area of Intrest
								</option>
								<option value="Mrs">Admin</option>
								<option value="DR">Job</option>
								<option value="DR">Genaral hand</option>
							</select>
						</div>
						<div className="div">
							<select
								id="country"
								className="w100"
								name="YourTitle"
								placeholder="Your Title"
							>
								<option value="Mr">Name of Enquiry</option>
								<option value="Mrs">Donation</option>
								<option value="DR">Job</option>
								<option value="DR">Genaral</option>
							</select>
						</div>
						<div className="div">
							<select
								id="country"
								className="w100"
								name="YourTitle"
								placeholder="Your Title"
							>
								<option value="Mr">
									Do You Want To Be Contacted By Phone
								</option>
								<option value="Mrs">yes</option>
								<option value="DR">NO</option>
							</select>
						</div>
						<div className="div">
							<textarea
								name="textarea"
								className="w100"
								id="message"
								cols="30"
								placeholder="Your Message"
								rows="10"
							></textarea>
						</div>
						<div className="div">
							<input
								type="submit"
								className="w50"
								id="batani"
								value="Submit"
							/>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</>
  );
}
