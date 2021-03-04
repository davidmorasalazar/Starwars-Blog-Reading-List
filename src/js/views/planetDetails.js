import React from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function PlanetDetails(props) {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<Media className="mt-5">
				{props.data.map((each, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://i.redd.it/elmvejoyc7541.png"
											alt="Generic placeholder"
										/>
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{each.name}</h5>
											<p>
												Star Wars is an American epic space opera[1] media franchise created by
												George Lucas, which began with the eponymous 1977 film and quickly
												became a worldwide pop-culture phenomenon. The franchise has been
												expanded into various films and other media, including television
												series, video games, novels, comic books, theme park attractions, and
												themed areas, comprising an all-encompassing fictional universe.
											</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Name</th>
											<th>Climate</th>
											<th>Population</th>
											<th>Orbital Period</th>
											<th>Rotation Period</th>
											<th>Diameter</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.climate}</td>
											<td>{each.population}</td>
											<td>{each.orbital_period}</td>
											<td>{each.rotation_period}</td>
											<td>{each.diameter}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Go Back
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
}

PlanetDetails.propTypes = {
	data: PropTypes.any
};
