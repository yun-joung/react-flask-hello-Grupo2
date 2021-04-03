import emailjs from "emailjs-com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			login_data: {
				userLogin: "",
				userPass: ""
			},
			recovery_data: {
				userEmail: "",
				userToken: ""
			},
			user: {
				token: "",
				email: "",
				id: "",
<<<<<<< HEAD
				userName: ""
=======
				type_user: ""
>>>>>>> 66b7fb89c2ddd3adfb1c2f24d45c3fa35c8f947e
			},
			serviceRegistrado: {
				id_user: "",
				tipo_membresia: "",
				category: "",
				subcategory: "",
				tipo_cobro: "",
				valor: "",
				name_servicio: "",
				descrip_servicio: "",
				duracion: "",
				revision: "",
				proceso: "",
				experiencia: "",
				portafolio: "",
				merit: ""
			},
			userAll: [],
			favoritos: [],
			serviceInfo: [],
			serviceInfoById: [],
			comments: []
		},

		actions: {
			addServicio: servicio => {
				fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
					method: "POST",
					body: JSON.stringify(servicio),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--servicio registrado --", data);
						setStore({ serviceRegistrado: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			// addServicio: async servicio => {
			// 	try {
			// 		const response = await fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
			// 			method: "POST",
			// 			headers: { "Content-Type": "application/json" },
			// 			body: JSON.stringify(servicio)
			// 		});
			// 		const json = await response.json();
			// 		console.log("--service_registrado--", json);
			// 		setStore({ serviceRegistrado: JSON.stringify(json) });
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// },

			// isAuthenticated: () => {
			// 	if (localStorage.getItem("token")) {
			// 		setStore({
			// 			user: {
			// 				token: JSON.parse(localStorage.getItem("token")),
			// 				email: JSON.parse(localStorage.getItem("email"))
			// 			}
			// 		});
			// 		return true;
			// 	} else {
			// 		return false;
			// 	}
			// },

			getUserInfo: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--Users--", json);
					setStore({ userAll: JSON.stringify(json) });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getUserInfoById: async id => {
				try {
					const response = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--User--", json);
					setStore({ user: JSON.stringify(json) });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getServiceInfo: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--Servicios--", json);
					setStore({ serviceInfo: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getServiceInfoById: async id => {
				try {
					const response = await fetch(process.env.BACKEND_URL + `/api/servicio-registrados/${id}`, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--Servicio--", json);
					setStore({ serviceInfoById: JSON.stringify(json) });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			addUserFavorites: async (id_user, id_servicio_registrados, name_servicio) => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/favoritos", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							id_user: store.user.id,
							id_servicio_registrados: "1",
							name_servicio: "name_servicio_front"
						})
					});
					const json = await response.json();
					console.log({ "--favorito--": json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			showUserFavorites: async id => {
				try {
					const response = await fetch("https://3001-blush-goat-luq9mq5y.ws-us03.gitpod.io/api/favoritos/", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log({ "--userFavoritos--": json });
					setStore({ favoritos: JSON.stringify(json) });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			eliminaFavorito: async id => {
				const store = getStore();
				const newList = store.favoritos.filter(item => item.id !== id);
				setStore({
					favoritos: newList
				});
				try {
					const response = await fetch(`process.env.BACKEND_URL/api/favoritos/${id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log(json);
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				const typeuserLocal = JSON.parse(localStorage.getItem("tipo_user"));
				const idLocal = JSON.parse(localStorage.getItem("id"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal,
						type_user: typeuserLocal,
						id: idLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
			},

			createContact: async (e, email, password, confirm, checked) => {
				e.preventDefault();
				try {
					const response = await fetch("http://0.0.0.0:3001/register", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: `${email}`,
							password: `${password}`,
							confirm: `${confirm}`,
							checked: `${checked}`
						})
					});
					const json = await response.json();
					console.log(json);
					setStore({ newContact: JSON.stringify(json) });
					getActions().getAgenda();
				} catch (error) {
					console.log(error);
				}
			},
			addComment: async text_comment => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/comentarios", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							id_servicios_prestados: "1",
							id_servicio_registrados: "1",
							text_comment: text_comment,
							evaluacion: "4"
						})
					});

					const json = await response.json();
					console.log(json);
					// setStore({ comments: JSON.stringify(json) });
					getActions().listComments();
				} catch (error) {
					console.log(error);
				}
			},
			listComments: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/comentarios", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log(json);
					setStore({ comments: json.Comentarios[0] });
				} catch (error) {
					console.log(error);
				}
			},
			setRegister: user => {
				console.log(user);
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ user: data });

						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.email));
							localStorage.setItem("tipo_user", JSON.stringify(data.tipo_user));
							localStorage.setItem("id", JSON.stringify(data.userId));
						}
					})
					.catch(error => console.log("error creating account in the backend", error));
			},
			setLogin: user => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ user: data });
						if (typeof Storage !== "undefined") {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.email));
							localStorage.setItem("tipo_user", JSON.stringify(data.tipo_user));
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			sendEmail: user => {
				fetch(process.env.BACKEND_URL + "/api/passwordrecovery1", {
					method: "PUT",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(data => data.json())
					.then(data => {
						setStore({ recovery_data: data });
						console.log(data);
						const templateParams = {
							to_email: data.email,
							recovery_hash: data.recovery_hash
						};
						emailjs.send(
							"service_gtr9nn8",
							"template_xht2g6m",
							templateParams,
							"user_Lg37b3jwPEh5fSo53yOsV"
						);
						alert("Una nueva contraseña ha sido enviada a tu correo registrado");
					})
					.catch(error => console.log("Error sending email", error));
			}
		}
	};
};
export default getState;
