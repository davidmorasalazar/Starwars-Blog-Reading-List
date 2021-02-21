import React, { useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Planets = props => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<h1 className="text-center mt-5">Planets</h1>
			<CardDeck className="overflow-X: auto">
				{props.data.map((planet, i) => {
					return (
						<Col className="mt-5" md={4} key={i}>
							<Card className="overflow-X: auto">
								<Card.Img variant="top" src="#" />
								<Card.Body>
									<Card.Title>{planet.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Population:</strong>
											<span>{planet.population}</span>
										</p>
										<p>
											<strong>Terrain:</strong>
											<span>{planet.terrain}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/planet/${i}`}>
											<Button variant="primary">Learn More</Button>
										</Link>
										<Link onClick={() => actions.addFavorite(planet.name, "planet")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</Container>
	);
};

Planets.propTypes = {
	data: PropTypes.any
};
