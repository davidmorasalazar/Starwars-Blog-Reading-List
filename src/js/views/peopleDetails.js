import React from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function PeopleDetails(props) {
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
											src="https://api.time.com/wp-content/uploads/2019/12/cute-star-wars-characters-10.jpg"
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
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
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

PeopleDetails.propTypes = {
	data: PropTypes.any
};
