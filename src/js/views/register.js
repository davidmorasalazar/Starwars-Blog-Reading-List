import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

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

		fetch("https://3000-plum-weasel-pbbypnmk.ws-us03.gitpod.io/register", {
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
		<div className="text-center mt-5 d-flex justify-content-center align-items-center">
			<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						onChange={e => setPass(e.target.value)}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
