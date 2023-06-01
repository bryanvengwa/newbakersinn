import React from 'react'

export default function Promotions() {
  return (
		<>
			<section className="promotions">
				<div className="container background">
					<div className="gradient">
						<div className="row">
							<div className="col-md-7">
								<div className="text-container">
									<h2>
										Get Notified About Promotions We Offer
									</h2>
									<label htmlFor="">
										<input
											type="text"
											placeholder="your email"
										/>
										<button>SUBMIT</button>
									</label>
								</div>
							</div>
							<div className="col-md-5">
								<div className="img-container">
									<img
										src="imgs/bottom bread group.png"
										className="img-fluid"
										alt="loaves of bread"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
