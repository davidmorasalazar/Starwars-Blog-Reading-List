import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Form, Col, Row, Button, Card, Accordion, footer } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
				// "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYxNDc5NjMxNSwianRpIjoiNGU5MjlhZDctYTlhOC00YTc2LTk0ZjctMTNlNGEwNGI4ZDc0IiwibmJmIjoxNjE0Nzk2MzE1LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiZGF2aWRtb3JhQGdtYWlsLmNvbSIsImV4cCI6MTYxNTA1NTUxNX0.WL3DkzV7eCqkO6Y3EWQzo4E36G-a4Gxeez1aQv57ZuA"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};
	return (
		<div className="container log text-center d-flex justify-content-center " fluid>
			<Card style={{ width: "18rem" }} className="w-50 h-50 mt-3">
				<Card.Img variant="top" src="https://images4.alphacoders.com/673/thumb-1920-673740.jpg" />
				<Card.Body>
					<Card.Title>WELCOME</Card.Title>
					<Card.Text>
						<div className="container text-center " fluid>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="0">
											Login
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<div className="text-center">
												<Form>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control type="password" placeholder="Password" />
														</Form.Group>
													</Form.Row>
													<Link to="/menu">
														<Button variant="primary" type="submit">
															Login
														</Button>
													</Link>
												</Form>
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
											Register
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											<div className="text-center">
												<Form>
													<Form.Group controlId="formGridAddress1">
														<Form.Label>Name</Form.Label>
														<Form.Control placeholder="Write your name" />
													</Form.Group>
													<Form.Row>
														<Form.Group as={Col} controlId="formGridEmail">
															<Form.Label>Email</Form.Label>
															<Form.Control
																type="email"
																placeholder="someuser@gmail.com"
															/>
														</Form.Group>

														<Form.Group as={Col} controlId="formGridPassword">
															<Form.Label>Password</Form.Label>
															<Form.Control type="password" placeholder="Password" />
														</Form.Group>
													</Form.Row>
													<Button variant="primary" type="submit">
														Register
													</Button>
												</Form>
											</div>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);

	// return (
	// 	<div className="text-center mt-5 d-flex justify-content-center align-items-center">
	// 		<input type="submit" className="btn btn-primary" value="Register" />
	// 		<input type="submit" className="btn btn-primary" value="Login" />
	// 		<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
	// 			<div className="form-floating mb-3">
	// 				<input
	// 					type="email"
	// 					className="form-control"
	// 					id="floatingInput"
	// 					placeholder="name@example.com"
	// 					onChange={e => setEmail(e.target.value)}
	// 				/>
	// 				<label htmlFor="floatingInput">Email address</label>
	// 			</div>
	// 			<div className="form-floating">
	// 				<input
	// 					type="password"
	// 					className="form-control"
	// 					id="floatingPassword"
	// 					placeholder="Password"
	// 					onChange={e => setPass(e.target.value)}
	// 				/>
	// 				<label htmlFor="floatingPassword">Password</label>
	// 			</div>
	// 			<input type="submit" className="btn btn-primary" value="Register" />
	// 		</form>
	// 		{redirect ? <Redirect to="/login" /> : ""}
	// 	</div>
	// );
};
