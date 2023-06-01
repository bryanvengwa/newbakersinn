import React , {useState , useEffect , useRef} from 'react'

export default function RecipesHeader() {
	let currentState = useRef(1)
          const [active, setActive] = useState(currentState.current)
          
          useEffect(()=>{
          const myInterval =  setInterval(()=>{
	setActive((prevState) => {
			let nextState = prevState + 1;
			if (nextState > 4) {
				nextState = 1
			}
			return nextState;
		});
                          
                    },4000)
		return ()=>{
			clearInterval(myInterval)
		}
          })

  return (
		<>
	<header className="home-header" id="recipes-header">
				<div className="container-fluid back">
					<div className="row">
						<div className="col-lg-6 col-md-6  header-text">
							<h1>
								The Finest of Baker’s Tik Tok Community Recipes
							</h1>
							<p
								className={`texts ${
									active === 4 ? " " : "hidden"
								} `}
							>
								Ever wondered how our bread is made? Check this
								out #Baker’s_Inn #Baker #Zimbabwe
							</p>
							<p
								className={`texts ${
									active === 1 ? "" : "hidden"
								} `}
							>
								Make the finest croissants worthy of 🎢 Paris
								from your 🇿🇼 home#Croissant #Zimbabwe #Paris
								#Baker’s_Inn
							</p>
							<p
								className={`texts ${
									active === 2 ? "" : "hidden"
								} `}
							>
								English breakfast done right with Baker’s Inn
								Bread#British #Bakers #Breakfast
							</p>
							<p
								className={`texts ${
									active === 3 ? "" : "hidden"
								} `}
							>
								Forget Chimodho, here’s a better recipe that
								makes use of those same ingredients #Chimodho
								#Local #Baker’s_Inn
							</p>
							<h3>@The_Bakers_Inn</h3>
						</div>

						<div className="col-lg-6 col-md-6  header-bread">
							<div className="row" id="flex-container">
								<div className="img-container right">
									<div className="abs-container">
										<div
											className={`${
												active === 1
													? "anime"
													: "hidden"
											}`}
										>
											<img src="imgs/gif.gif" alt="" />
										</div>
										<img
											src="imgs/bunfinal.png"
											className="img-fluid"
											alt="bun"
										/>
										<div
											className={`layer ${
												active === 1 ? "" : "gif"
											}`}
										></div>
									</div>
								</div>
								<div className="img-container right">
									<div className="abs-container">
										<div
											className={`${
												active === 2
													? "anime"
													: "hidden"
											}`}
										>
											<img src="imgs/gif.gif" alt="" />
										</div>

										<img
											src="imgs/plate.png"
											className="img-fluid  "
											alt="plate"
										/>
										<div
											className={`layer ${
												active === 2 ? "" : "gif"
											}`}
										></div>
									</div>
								</div>
							</div>
							<div className="row" id="flex-container">
								<div className="img-container right">
									<div className="abs-container">
										<div
											className={`${
												active === 3
													? "anime"
													: "hidden"
											}`}
										>
											<img src="imgs/gif.gif" alt="" />
										</div>

										<img
											src="imgs/bunslices.png"
											className="img-fluid"
											alt="bun"
										/>
										<div
											className={`layer ${
												active === 3 ? "" : "gif"
											}`}
										></div>
									</div>
								</div>
								<div className="img-container right">
									<div className="abs-container">
										<div
											className={`${
												active === 4
													? "anime"
													: "hidden"
											}`}
										>
											<img src="imgs/gif.gif" alt="" />
										</div>

										<img
											src="imgs/recipes banner.png"
											className=" drop img-fluid"
											alt="bun"
										/>
										<div
											className={`layer ${
												active === 4 ? "" : "gif"
											}`}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
  );
}
