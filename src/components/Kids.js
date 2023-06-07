import React from "react";

export default function Kids() {
	return (
		<>
			<section className="kids">
				<div className="container back">
					<div className="gradient">
						<div className="row">
							<div className="col-lg-6 col-md-7 mario">
								<img
									src="imgs/mariofinal.png"
									className="img-fluid"
									alt="mario"
								/>
							</div>
							<div className="col-lg-6 col-md-5 text">
								<h1>Kid's Corner</h1>
								<p>
									let your children join the fun. Explore a
									place with exciting games and the top
									winners stand a chance to win exciting
									monthly prices!
								</p>
								<button className="btn play">PLAY GAMES</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
