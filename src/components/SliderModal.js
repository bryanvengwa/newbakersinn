import React from "react";

export default function SliderModal(props) {
	return (
		<>
			<div className="background-modal">
				<div className="left-container">
					<div className="img-container">
						<img
							src={props.bigimg}
							className="img-fluid big"
							alt=""
						/>
					</div>
					<div className="bottom">
						<div className="flex-containers">
							<div className="img-container">
								<img
									src={props.smallimg}
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="img-container">
								<img
									src={props.smallimg}
									className="img-fluid"
									alt=""
								/>
							</div>
						</div>
						<div className="flex-containers">
							<div className="img-container">
								<img
									src={props.smallimg}
									className="img-fluid"
									alt=""
								/>
							</div>
							<div className="img-container">
								<img
									src={props.smallimg}
									className="img-fluid"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				{/* the Right container */}
				<div className="right-container">
					<button onClick={props.RecipeModal}>x</button>
					<h1>{props.heading}</h1>
					<div className="flex-container gaba">
						<div className="flex-containerA">
							<div className="circle-container">
								<img
									src="imgs/watch.png"
									className="img-fluid"
									alt="watch"
								/>
							</div>
							<h3> 5 Minutes</h3>
						</div>
						<div className="flex-containerA">
							<div className="circle-container">
								<img
									src="imgs/numpeople.png"
									className="img-fluid"
									alt="watch"
								/>
							</div>
							<h3>6 people</h3>
						</div>
					</div>
					<div className="headings">
						<h1>Ingredients</h1>
						<div className="line"></div>
						<div className="ball"></div>
					</div>
					<div className="lists">
						<ul>
							<li> ½ cup olive oil</li>
							<li>½ cup ranch dressing</li>
							<li>3 tablespoons Worcestershire sauce</li>
							<li>1 tablespoon minced fresh rosemary</li>
						</ul>
						<ul>
							<li>2 teaspoons salt</li>
							<li>1 teaspoon lemon juice</li>
							<li>1 teaspoon white vinegar</li>
							<li>¼ teaspoon ground black pepper</li>
						</ul>
					</div>
					<div className="headings">
						<h1>Directions</h1>
						<div className="line liner"></div>
						<div className="ball"></div>
					</div>
					<div className="directions">
						<div className="direction">
							<h4>Step 1</h4>
							<p>
								In a medium bowl, stir together the olive oil,
								ranch dressing, Worcestershire sauce, rosemary,
								salt, lemon juice, white vinegar, pepper, and
								sugar. Let stand for 5 minutes. Place chicken in
								the bowl, and stir to coat with the marinade.
								Cover and refrigerate for 30 minutes.
							</p>
						</div>
						<div className="direction">
							<h4>Step 2</h4>
							<p>
								`Preheat the grill for medium-high heat. Thread
								chicken onto skewers and discard marinade.
							</p>
						</div>
						<div className="direction">
							<h4>Step 3</h4>
							<p>
								Lightly oil the grill grate. Grill skewers for 8
								to 12 minutes, or until the chicken is no longer
								pink in the center, and the juices run clear.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
