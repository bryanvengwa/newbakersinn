import React from "react";

export default function ProductsSlider(props) {

	const containerStyles={
		width: '200%',
		paddingTop: '2em',
	}
	return (
		<>
			<section className="recipe" id="recipe">
				<div>
					<div>
						<div className="center">
							<h1 className="heading">Baker's Recipes</h1>
							<ul className="tab-links">
								<li
									onClick={() => {
										props.changeTab(1);
									}}
									className={`tabs taber1 ${
										props.activeTab === 1 ? "active" : " "
									}`}
								>
									Bread
								</li>
								<li
									onClick={() => {
										props.changeTab(2);
									}}
									className={`tabs taber2 ${
										props.activeTab === 2 ? "active" : " "
									}`}
								>
									Meat Pies
								</li>
								<li
									onClick={() => {
										props.changeTab(3);
									}}
									className={`tabs taber3 ${
										props.activeTab === 3 ? "active" : " "
									}`}
								>
									scones
								</li>
								<li
									onClick={() => {
										props.changeTab(4);
									}}
									className={`tabs taber4 ${
										props.activeTab === 4 ? "active" : " "
									}`}
								>
									Donuts
								</li>
								<div className="line"></div>
							</ul>
						</div>

						<div id="flex">
							<div className="scrollable-div">
								<div
									className="flex-container "
									style={
										props.activeTab === 1
											? containerStyles
											: { width: "100%" }
									}
								>
									<div
										className={`card ${
											props.activeTab === 1
												? "manager"
												: ""
										}`}
										width="22rem"
									>
										<div className="img-container">
											{props.activeTab === 1 && (
												<img
													src="imgs/blue bread.png"
													data-tab="1"
													className="img-fluid recipes  "
													alt="shwarma"
												/>
											)}
											{props.activeTab === 2 && (
												<img
													src="imgs/pie copy.png"
													data-tab="2"
													className="img-fluid recipes down                                                                              "
													alt="shortbread"
												/>
											)}
											{props.activeTab === 3 && (
												<img
													src="imgs/sconer.png"
													data-tab="3"
													className="img-fluid recipes down"
													alt="salmon"
												/>
											)}
											{props.activeTab === 4 && (
												<img
													src="imgs/cream.png"
													data-tab="4"
													className="img-fluid recipes down"
													alt="doughnut"
												/>
											)}
										</div>
										<div className="card-body">
											{props.activeTab === 1 && (
												<h3
													className="card-title recipes "
													data-tab="1"
												>
													Premium Soft White
												</h3>
											)}
											{props.activeTab === 2 && (
												<h3
													className="card-title recipes "
													data-tab="2"
												>
													{" "}
													Highly Nutricous Steak Pie
												</h3>
											)}
											{props.activeTab === 3 && (
												<h3
													className="card-title recipes "
													data-tab="3"
												>
													{" "}
													Cherry Scones
												</h3>
											)}
											{props.activeTab === 4 && (
												<h3
													className="card-title recipes "
													data-tab="4"
												>
													{" "}
													Chocolate Cream Doughnut
												</h3>
											)}
											{props.activeTab === 1 && (
												<p
													className="card-title recipes active"
													data-tab="1"
												>
													Our premium soft white
													loaves are delightfully soft
													, fresh and delicious.They
													are loaded with energy and
													fortified with vitamins and
													minerals for the classNameic
													everyday bread. The standard
													loaf has 18 slices.
												</p>
											)}
											{props.activeTab === 2 && (
												<p
													className="card-title recipes"
													data-tab="2"
												>
													{" "}
													Our Steak Pie is a highly
													nutricious pie cooked using
													highly nutritious
													ingredients to make it our
													best pie treat for your
													health
												</p>
											)}
											{props.activeTab === 3 && (
												<p
													className="card-title recipes"
													data-tab="3"
												>
													{" "}
													Our Cherry are simply
													described by perfection and
													baked to give you the
													perfect taste and nutrition
													for you daily needs!{" "}
												</p>
											)}
											{props.activeTab === 4 && (
												<p
													className="card-title recipes"
													data-tab="4"
												>
													{" "}
													Our Chocolate Cream Doughnut
													are baked with the right
													ingredients to make you
													enjoy your cup of coffee!!{" "}
												</p>
											)}
										</div>
									</div>
									<div
										className={`card ${
											props.activeTab === 1
												? "manager"
												: ""
										}`}
										width="22rem"
									>
										<div className="img-container">
											{props.activeTab === 1 && (
												<img
													src="imgs/yellow bread.png"
													data-tab="1"
													height="1rem"
													className="img-fluid recipes  active"
													alt="shwarma"
												/>
											)}
											{props.activeTab === 2 && (
												<img
													src="imgs/pie copy.png"
													data-tab="2"
													className="img-fluid recipes down"
													alt="shortbread"
												/>
											)}
											{props.activeTab === 3 && (
												<img
													src="imgs/sconer.png"
													data-tab="3"
													className="img-fluid recipes down"
													alt="salmon"
												/>
											)}
											{props.activeTab === 4 && (
												<img
													src="imgs/donut.png"
													data-tab="4"
													className="img-fluid recipes down"
													alt="doughnut"
												/>
											)}
										</div>
										<div className="card-body">
											{props.activeTab === 1 && (
												<h3
													className="card-title recipes active"
													data-tab="1"
												>
													Family Loaf High Energy
													Brown
												</h3>
											)}
											{props.activeTab === 2 && (
												<h3
													className="card-title recipes"
													data-tab="2"
												>
													{" "}
													Highly Nutritious Steak Pie
												</h3>
											)}
											{props.activeTab === 3 && (
												<h3
													className="card-title recipes"
													data-tab="3"
												>
													{" "}
													Cherry Scones
												</h3>
											)}
											{props.activeTab === 4 && (
												<h3
													className="card-title recipes"
													data-tab="4"
												>
													{" "}
													Sugar Dipped Doughnuts{" "}
												</h3>
											)}
											{props.activeTab === 1 && (
												<p
													className="card-title recipes active"
													data-tab="1"
												>
													Our Family Loaf High Energy
													Brown loaves are a great
													source of fibre, high energy
													and fortified with vitamins
													and minerals! They are
													perfect for sandwiches,
													toast breadcrumbs-
													anything!The family loaf has
													21 slices.
												</p>
											)}
											{props.activeTab === 2 && (
												<p
													className="card-title recipes"
													data-tab="2"
												>
													{" "}
													Our Steak Pie is a highly
													nutricious pie cooked using
													highly nutritious
													ingredients to make it our
													best pie treat for your
													health
												</p>
											)}
											{props.activeTab === 3 && (
												<p className="card-title recipes">
													{" "}
													Our Cherry are simply
													described by perfection and
													baked to give you the
													perfect taste and nutrition
													for you daily needs!{" "}
												</p>
											)}
											{props.activeTab === 4 && (
												<p className="card-title recipes">
													{" "}
													Our Sugar Dipped Doughnuts
													are baked with the perfect
													amount of sugar to take care
													of your sweet tooth!{" "}
												</p>
											)}
										</div>
									</div>
									<div
										className={`card ${
											props.activeTab === 1
												? "manager"
												: ""
										}`}
										width="22rem"
									>
										<div className="img-container">
											{props.activeTab === 1 && (
												<img
													src="imgs/red bread.png"
													data-tab="1"
													height="1rem"
													className="img-fluid recipes  active"
													alt="shwarma"
												/>
											)}
											{props.activeTab === 2 && (
												<img
													src="imgs/pie copy.png"
													data-tab="2"
													className="img-fluid   down"
													alt="shortbread"
												/>
											)}
											{props.activeTab === 3 && (
												<img
													src="imgs/sconer.png"
													data-tab="3"
													className="img-fluid recipes  down"
													alt="salmon"
												/>
											)}
											{props.activeTab === 4 && (
												<img
													src="imgs/cream.png"
													data-tab="4"
													className="img-fluid recipes  down"
													alt="doughnut"
												/>
											)}
										</div>
										<div className="card-body">
											{props.activeTab === 1 && (
												<h3
													className="card-title recipes active"
													data-tab="1"
												>
													Family Loaf High Energy
													White
												</h3>
											)}
											{props.activeTab === 2 && (
												<h3
													className="card-title recipes"
													data-tab="2"
												>
													{" "}
													Our Delicious Meat Pie
												</h3>
											)}
											{props.activeTab === 3 && (
												<h3
													className="card-title recipes"
													data-tab="3"
												>
													{" "}
													Cherry Scones
												</h3>
											)}
											{props.activeTab === 4 && (
												<h3
													className="card-title recipes"
													data-tab="4"
												>
													{" "}
													Vannila Cream Doughnut
												</h3>
											)}
											{props.activeTab === 1 && (
												<p className="card-title recipes active">
													Our Family Loaf Soft White
													loaves are delightfully
													soft, fresh and delicious.
													They are loaded with energy
													and fortified with vitamins
													and minerals for the
													classNameic everyday bread.
													The family loaf has 21
													slices.
												</p>
											)}
											{props.activeTab === 2 && (
												<p
													className="card-title recipes"
													data-tab="2"
												>
													Our Delicious meat pie is
													one of the most delicious
													pie you will ever come
													across and you can only find
													it within our retail outlets
													across zimbabwe
												</p>
											)}
											{props.activeTab === 3 && (
												<p
													className="card-title recipes"
													data-tab="3"
												>
													{" "}
													Our Cherry are simply
													described by perfection and
													baked to give you the
													perfect taste and nutrition
													for you daily needs!{" "}
												</p>
											)}
											{props.activeTab === 4 && (
												<p
													className="card-title recipes"
													data-tab="4"
												>
													{" "}
													Our Vannilla Cream will get
													you confused if it is ice
													cream or a regular doughnut
													, that's how good it is!{" "}
												</p>
											)}
										</div>
									</div>

									{props.activeTab === 1 && (
										<div
											className={`card ${
												props.activeTab === 1
													? "manager"
													: ""
											}`}
											width="22rem"
										>
											<div className="img-container">
												{props.activeTab === 1 && (
													<img
														src="imgs/greenbread.png"
														height="1rem"
														className="img-fluid recipes  active"
														alt="shwarma"
													/>
												)}
											</div>
											<div className="card-body">
												{props.activeTab === 1 && (
													<h3 className="card-title recipes active">
														Premium Low Gi Seed-loaf
													</h3>
												)}

												{props.activeTab === 1 && (
													<p className="card-title recipes active">
														Our Premium Low Gi
														Seed-loaves are
														delightfully soft, fresh
														and delicious. They are
														loaded with energy and
														fortified with vitamins
														and minerals for the
														classic everyday bread.
														The family loaf has 18
														slices.
													</p>
												)}
											</div>
										</div>
									)}
									{props.activeTab === 1 && (
										<div
											className={`card ${
												props.activeTab === 1
													? "manager"
													: ""
											}`}
											width="22rem"
										>
											<div className="img-container">
												{props.activeTab === 1 && (
													<img
														src="imgs/brownbread.png"
														data-tab="1"
														height="1rem"
														className="img-fluid recipes  active"
														alt="shwarma"
													/>
												)}
											</div>
											<div className="card-body">
												{props.activeTab === 1 && (
													<h3
														className="card-title recipes active"
														data-tab="1"
													>
														Premium High Energy
														Brown Loaf
													</h3>
												)}

												{props.activeTab === 1 && (
													<p
														className="card-title recipes active"
														data-tab="1"
													>
														Our Premium High Energy
														Brown Loaves are
														delightfully soft, fresh
														and delicious. They are
														loaded with energy and
														fortified with vitamins
														and minerals for the
														classic everyday bread.
														The family loaf has 21
														slices.
													</p>
												)}
											</div>
										</div>
									)}

									{props.activeTab === 1 && (
										<div
											className={`card ${
												props.activeTab === 1
													? "manager"
													: ""
											}`}
											width="22rem"
										>
											<div className="img-container">
												{props.activeTab === 1 && (
													<img
														src="imgs/red bread.png"
														data-tab="1"
														height="1rem"
														className="img-fluid recipes  active"
														alt="shwarma"
													/>
												)}
											</div>
											<div className="card-body">
												{props.activeTab === 1 && (
													<h3
														className="card-title recipes active"
														data-tab="1"
													>
														Family Loaf High Energy
														White
													</h3>
												)}

												{props.activeTab === 1 && (
													<p
														className="card-title recipes active"
														data-tab="1"
													>
														Our Family Loaf Soft
														White loaves are
														delightfully soft, fresh
														and delicious. They are
														loaded with energy and
														fortified with vitamins
														and minerals for the
														classic everyday bread.
														The family loaf has 21
														slices.
													</p>
												)}
											</div>
										</div>
									)}
								</div>
								{/*  */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
