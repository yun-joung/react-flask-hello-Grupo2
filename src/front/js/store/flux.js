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
				isLogin: false,
				token: "",
				email: "",
				id: "",
				userName: "",
				type_user: ""
			},
			serviceRegistrado: {
				id_user: "",
				userName: "",
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
			favorito: {
				id_user: "",
				id_servicio_registrados: "",
				name_servicio: ""
			},
			reServicio: {
				id: "",
				tipo_membresia: "",
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
			serviceByCategory: [],
			serviceByIdUser: [],
			favoritos: [],
			serviceInfo: [],
			serviceInfoById: {},
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
						alert("El servicio ha sido registrado correctamente");
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			updateServicio: reServicio => {
				fetch(process.env.BACKEND_URL + "/api/servicio-registrados" + id, {
					method: "POST",
					body: JSON.stringify(reServicio),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--servicio registrado --", data);
						setStore({ serviceRegistrado: data });
						alert("El servicio ha sido actualizado correctamente");
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

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

			// getUserInfoById: async id => {
			// 	try {
			// 		const response = await fetch("https://3001-emerald-booby-ixturige.ws-us03.gitpod.io/api/user/1", {
			// 			method: "GET",
			// 			headers: { "Content-Type": "application/json" }
			// 		});
			// 		const json = await response.json();
			// 		console.log("--User--", json);
			// 		setStore({ user: JSON.stringify(json) });
			// 	} catch (error) {
			// 		console.log("Error loading message from backend", error);
			// 	}
			// },

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
					const response = await fetch(process.env.BACKEND_URL + "/api/servicio-registrados/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--ServicioByID--", json);
					setStore({ serviceInfoById: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getServiceByIdUser: async id => {
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/servicio-registrados/user/" + localStorage.getItem("id"),
						{
							method: "GET",
							headers: { "Content-Type": "application/json" }
						}
					);
					const json = await response.json();
					console.log("--serviceByIdUser--", json);
					setStore({ serviceByIdUser: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getServiceByCategory: async category => {
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/servicio-registrados/category/" + category,
						{
							method: "GET",
							headers: { "Content-Type": "application/json" }
						}
					);
					const json = await response.json();
					console.log("--serviceByCategory--", json);
					setStore({ serviceByCategory: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			addUserFavorites: async favorito => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, favorito] });
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/favoritos", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(favorito)
					});
					const json = await response.json();
					console.log({ "--favorito registrado--": json });
					setStore({ favorito: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			showUserFavorites: async id => {
				const store = getStore();
				console.log(store.user.id);
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/favoritos/" + localStorage.getItem("id"),
						{
							method: "GET",
							headers: { "Content-Type": "application/json" }
						}
					);
					const json = await response.json();
					console.log({ "--userFavoritos--": json });
					setStore({ favoritos: json });
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
					const response = await fetch(process.env.BACKEND_URL + "/api/favoritos/" + id, {
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
				const userNameLocal = JSON.parse(localStorage.getItem("userName"));
				const isLoginLocal = JSON.parse(localStorage.getItem("isLogin"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal,
						type_user: typeuserLocal,
						id: idLocal,
						userName: userNameLocal,
						isLogin: isLoginLocal
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
							localStorage.setItem("userName", JSON.stringify(data.userName));
							localStorage.setItem("isLogin", JSON.stringify(true));
							setStore({ user: { isLogin: true } });
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
							localStorage.setItem("tipo_user", JSON.stringify(data.tipo_user && ""));
							localStorage.setItem("id", JSON.stringify(data.id));
							localStorage.setItem("userName", JSON.stringify(data.userName && ""));
							localStorage.setItem("isLogin", JSON.stringify(true));
							setStore({ user: { isLogin: true } });
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
			},
			cerrarSesion: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				localStorage.removeItem("tipo_user");
				localStorage.removeItem("id");
				localStorage.removeItem("userName");
				localStorage.removeItem("isLogin");
				setStore({ user: { isLogin: false } });
			},
			buyService: buyservice => {
				fetch(process.env.BACKEND_URL + "/api/buyservice", {
					method: "POST",
					body: JSON.stringify(buyservice),
					headers: { "Content-type": "application/json" }
				})
					// .then(data => data.json())
					// .then(data=>{
					//     const templateParams = {
					//         to_email: data.emailOfferer,
					//         cc_email: data.emailBuyer,
					//         service: "",
					//         buyer: "",

					//     };
					//     emailjs.send(
					// 			"service_gtr9nn8",
					// 			"Agregar el template de la compra del servicio",
					// 			templateParams,
					// 			"user_Lg37b3jwPEh5fSo53yOsV"
					// 		);
					// 		alert("El oferente ha sido informado de su requerimiento de servicio y debería tomar contacto con usted dentro de las siguientes 2 horas. Una copia de este requerimiento ha sido enviado a su correo electrónico.");
					// 	})
					.catch(error => console.log("Error sending email", error));
			}
		}
	};
};
export default getState;
