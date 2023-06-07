import React  from 'react'

export default function Slider(props) {

  return (
		<>
			<section className="recipe">
				<div className="container">
					<h1 className="heading">Baker's Recipes</h1>
					<div className="row">
						<div className="center">
							<ul className="tab-links">
								<li
									className={`tabs taber1  ${
										props.activeTab === 1 ? "active" : ""
									}`}
									onClick={() => props.handleTabClick(1)}
								>
									{props.header1}
								</li>
								<li
									className={`tabs taber2  ${
										props.activeTab === 2 ? "active" : ""
									}`}
									onClick={() => props.handleTabClick(2)}
								>
									{props.header2}
								</li>
								<li
									className={`tabs taber3  ${
										props.activeTab === 3 ? "active" : ""
									}`}
									onClick={() => props.handleTabClick(3)}
								>
									{props.header3}
								</li>
								<div className="line"></div>
							</ul>
						</div>

						<div className="row">
							<div className="flex-container">
								<div className="card" width="22rem">
									<div className="img-container">
										{props.activeTab === 1 && (
											<img
												src="imgs/shwarma.png"
												className="img-fluid recipes "
												alt="shwarma"
											/>
										)}
										{props.activeTab === 2 && (
											<img
												src="imgs/shortbread.png"
												className="img-fluid recipes "
												alt="shortbread"
											/>
										)}
										{props.activeTab === 3 && (
											<img
												src="imgs/salmon.png"
												className="img-fluid recipes "
												alt="salmon"
											/>
										)}
									</div>
									<div className="card-body">
										{props.activeTab === 1 && (
											<h4 className="card-title recipes">
												Shwarma Sandwich
											</h4>
										)}
										{props.activeTab === 2 && (
											<h4 className="card-title recipes ">
												Sweet Shortbread
											</h4>
										)}
										{props.activeTab === 3 && (
											<h4 className="card-title recipes ">
												Salmon Strips
											</h4>
										)}
										<div className="flexbox-container">
											<div className="text-container">
												<h5>
													Prep Time :
													<span>20 min</span>
												</h5>
												<h5>
													Serves :{" "}
													<span>6 people</span>{" "}
												</h5>
											</div>
											<div className="arrow">
												<img
													onClick={props.RecipeModal}
													src="imgs/arrow.png"
													className="img-fluid"
													alt="left arrow"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="card" width="22rem">
									<div className="img-container">
										{props.activeTab === 1 && (
											<img
												src="imgs/shwarma.png"
												className="img-fluid recipes  active"
												alt="shwarma"
											/>
										)}
										{props.activeTab === 2 && (
											<img
												src="imgs/shortbread.png"
												className="img-fluid recipes "
												alt="shortbread"
											/>
										)}
										{props.activeTab === 3 && (
											<img
												src="imgs/salmon.png"
												className="img-fluid recipes "
												alt="salmon"
											/>
										)}
									</div>
									<div className="card-body">
										{props.activeTab === 1 && (
											<h4 className="card-title recipes active">
												Shwarma Sandwich
											</h4>
										)}
										{props.activeTab === 2 && (
											<h4 className="card-title recipes">
												Sweet Shortbread
											</h4>
										)}
										{props.activeTab === 3 && (
											<h4 className="card-title recipes ">
												Salmon Strips
											</h4>
										)}
										<div className="flexbox-container">
											<div className="text-container">
												<h5>
													Prep Time :
													<span>20 min</span>
												</h5>
												<h5>
													Serves :{" "}
													<span>6 people</span>{" "}
												</h5>
											</div>
											<div className="arrow">
												<img
													onClick={props.RecipeModal}
													src="imgs/arrow.png"
													className="img-fluid"
													alt="left arrow"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="card" width="22rem">
									<div className="img-container">
										{props.activeTab === 1 && (
											<img
												src="imgs/shwarma.png"
												className="img-fluid recipes  active"
												alt="shwarma"
											/>
										)}
										{props.activeTab === 2 && (
											<img
												src="imgs/shortbread.png"
												className="img-fluid recipes"
												alt="shortbread"
											/>
										)}
										{props.activeTab === 3 && (
											<img
												src="imgs/salmon.png"
												className="img-fluid recipes "
												alt="salmon"
											/>
										)}
									</div>
									<div className="card-body">
										{props.activeTab === 1 && (
											<h4
												className="card-title recipes active"
												data-tab="1"
											>
												Shwarma Sandwich
											</h4>
										)}
										{props.activeTab === 2 && (
											<h4 className="card-title recipes ">
												Sweet Shortbread
											</h4>
										)}
										{props.activeTab === 3 && (
											<h4
												className="card-title recipes "
												data-tab="3"
											>
												Salmon Strips
											</h4>
										)}
										<div className="flexbox-container">
											<div className="text-container">
												<h5>
													Prep Time :
													<span>20 min</span>
												</h5>
												<h5>
													Serves :{" "}
													<span>6 people</span>{" "}
												</h5>
											</div>
											<div className="arrow">
												<img
													onClick={props.RecipeModal}
													src="imgs/arrow.png"
													className="img-fluid"
													alt="left arrow"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4"></div>
							<div className="col-md-4"></div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
