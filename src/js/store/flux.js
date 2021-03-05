import React from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],

			planets: [],

			favorites: []
		},
		actions: {
			logout: () => {
				setStore({ boolean: false });
			},
			Home: () => {
				const testPrivado = () => {
					fetch("https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/profile", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + sessionStorage.getItem("token")
						}
						// body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							console.log("Success:", data);
							// sessionStorage.setItem("u_token", data.token);
							// setRedirect(true);
						})
						.catch(error => {
							console.error("Error:", error);
						});
				};
			},
			validateRegister: async (email, password) => {
				const url = "https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/register";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				const info = await response.json();
				console.log(info.msg);
			},

			validateLogin: async (email, password) => {
				const url = "https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/login";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json" //Lo que se va a enviar es json, por eso se pone el header
					},
					body: JSON.stringify({
						email: email,
						password: password
					}) //Convierte todo a un String , se envia como stringfy porque en el back end, se recibe como "email", "password"
				});
				const body = await response.json();
				console.log(body);
				if (body.status) {
					sessionStorage.setItem("u_token", body.token);
					sessionStorage.setItem("status", body.status);
					setStore({ boolean: true });
				} else {
					console.log("Incorrect password");
				}
			},
			// Use getActions to call a function within a fuction
			loadPeople: async () => {
				// const url = "https://swapi.dev/api/people/";
				const url = "https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/get_characters";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data });
			},

			loadPlanet: async () => {
				//const url = "https://swapi.dev/api/planets/";
				const url = "https://3000-cyan-harrier-dkrxu9b6.ws-us03.gitpod.io/get_planets";
				const response = await fetch(url);
				// el response.json funciona para hacer los string a formato json
				const data = await response.json();
				setStore({ planets: data });
			},

			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
