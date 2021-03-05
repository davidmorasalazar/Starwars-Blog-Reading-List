import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";
import { Spinner, Carousel } from "react-bootstrap";
import injectContext from "./store/appContext";

import { Menu } from "./component/menu";
import { Planets } from "./component/planets";
import { People } from "./component/people";
import { PeopleDetails } from "./views/peopleDetails";
import { PlanetDetails } from "./views/planetDetails";
import { Home } from "./component/carousel";
import { Register } from "./views/register";
import { Login } from "./views/login";
import ScrollToTop from "./component/scrollToTop";

import { Register1 } from "./views/register1";
import { Login1 } from "./views/login1";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
		setLoading(false);
	}, []);

	return (
		<BrowserRouter basename={basename}>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Menu />
						<Home />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login1 />
					</Route>
					<Route exact path="/menu">
						<Menu />
						<Home />
						<People data={store.peoples} />
						<Planets data={store.planets} />
					</Route>
					{/* <Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route> */}
					<Route exact path="/characters">
						<Menu />
						<Home />
						<People data={store.peoples} />
					</Route>
					<Route exact path="/planetsView">
						<Menu />
						<Home />
						<Planets data={store.planets} />
					</Route>
					<Route exact path="/people/:id">
						<PeopleDetails data={store.peoples} />
					</Route>
					<Route exact path="/planet/:id">
						<PlanetDetails data={store.planets} />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
