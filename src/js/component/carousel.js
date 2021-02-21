import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { People } from "./component/people";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";

export const Home = () => {
	return (
		<Container>
			{/* <switch> */}
			<div>
				{/* <Dropdown align={"center"}>
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
					</Dropdown.Menu>
				</Dropdown>{" "} */}
			</div>
		</Container>
	);
};
