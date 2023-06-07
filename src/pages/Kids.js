import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

export default function Kids(props) {
	return (
		<>
			<Navbar isOpen={props.isOpen} toggle={props.toggle} />
			<Overlay isOpen={props.isOpen} toggle={props.toggle} />
			<section className="header home-header" id="kids-header">
				<div className="container-fluid">
					<div className="row-fluid" id="flex-container">
						<div className="text-container">
							<h1>Kid's Corner</h1>
						</div>

						<div className="img-container">
							<img
								src="imgs/kids group.png"
								className="img-fluid"
								alt="game charectors"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="maze">
				<div className="container" id="maze-background">
					<div className="row">
						<div className="col-md-6">
							<div className="text-container">
								<h1>Spaceship Maze</h1>
								<p>
									Help the spaceship through the maze to get
									back to earth. Move through levels with
									increasing difficulty; each puzzle starts
									the ship in a different location.
								</p>
								<p>
									{" "}
									Develop kids’ skills in strategizing,
									spatial awareness, hand-eye coordination,
									problem solving and more! Free to play,
									priceless for learning
								</p>
								<button className="btn">PLAY GAME</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="img-container">
								<img
									src="imgs/maze.png"
									className="img-fluid"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="maze RISKY">
				<div className="container" id="risky-background">
					<div className="row">
						<div className="col-md-6">
							<div className="text-container">
								<h1>Risky Way</h1>
								<p>
									Risky Way is a free instant game. The
									highways of the future are risky and if you
									want to survive you'll need to be smarter
									than all of them combined. All you have to
									do in this nerve-tingling racing game is
									click, hold, and let go. Of course, if you
									want to be an effective driver who is able
									to survive you'll have to know when to
									click, how long to hold, and only let go at
									the appropriate time.
								</p>
								<button className="btn">PLAY GAME</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="img-container">
								<img
									src="imgs/cubes.png"
									className="img-fluid"
									alt="cubes"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="maze RISKY">
				<div className="container" id="pacman-background">
					<div className="row">
						<div className="col-md-6">
							<div className="text-container">
								<h1>Pacman</h1>
								<p>
									There's nothing like a little old school
									Pacman game right? The great arcade game Pac
									Man was ported to the NES in 1988 and you
									can play it right here. Never played
									before?! What?! Eat all the pellets to
									complete a stage while trying to score as
									many points as possible by eating fruit and
									ghosts along the way! But there's more! Ever
									wonder how Pacman got started? Check out the
									history of Pacman below and see how it all
									began.
								</p>
								<button className="btn">PLAY GAME</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="img-container">
								<img
									src="imgs/pacman.png"
									className="img-fluid"
									alt="cubes"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
