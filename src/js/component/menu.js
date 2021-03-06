import React, { useContext, useEffect } from "react";
import { Dropdown, Container, DropdownButton, Navbar, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Menu = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		// <Container>
		<Navbar bg="light">
			<Link to="/menu">
				<Navbar.Brand href="#home">
					<img
						src="https://www.vippng.com/png/detail/1-13632_star-wars-logo-png-star-wars-logo-black.png"
						width="70"
						height="45"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
			</Link>
			{/* <Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link> */}
			<Navbar.Collapse className="justify-content-end">
				<DropdownButton id="dropdown-basic-button" variant="info" title={"Favorites " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Empty</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{favorite.type == "people" ? (
										<div>
											<i className="fas fa-id-card">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i className="fas fa-globe-americas">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</Navbar.Collapse>
			<Link to="/register">
				<Button variant="primary" type="submit" className="ml-3">
					Logout
				</Button>
			</Link>
			<Link to="/register">
				<button className="btn btn-primary">Register</button>
			</Link>

			{/* <div>
				<Dropdown align={"center"}>
					<Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
						Index
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">
							{" "}
							<Link to="/characters">
								<label>characters</label>
							</Link>
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2">
							{" "}
							<Link to="/planetsView">
								<label>planets</label>
							</Link>
						</Dropdown.Item>
						<Dropdown.Item href="#/action-1">
							{" "}
							<Link to="/menu">
								<label>Principal</label>
							</Link>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>{" "}
			</div> */}
		</Navbar>
	);
};
