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
			<Menu />
			<Switch>
				<Route exact path="/">
					<div>
						<Home />
						<People data={store.peoples} />
						<Planets data={store.planets} />
					</div>
				</Route>
				<Route exact path="/characters">
					<People data={store.peoples} />
				</Route>
				<Route exact path="/planetsView">
					<Planets data={store.planets} />
				</Route>
				<Route exact path="/people/:id">
					<PeopleDetails data={store.peoples} />
				</Route>
				<Route exact path="/planet/:id">
					<PlanetDetails data={store.planets} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
