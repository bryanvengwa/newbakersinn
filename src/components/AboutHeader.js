import React from 'react'

export default function AboutHeader() {
  return (
		<>
			<header className="home-header">
				<div className="container back" id="back">
					<div className="gradient"></div>

					<div className="text">
						<h2>About Us</h2>
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
		</>
  );
}
