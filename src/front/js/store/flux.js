import emailjs from "emailjs-com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://3000-lavender-snail-4xztmo5b.ws-us04.gitpod.io/",

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
				user: "",
				id: "",
				userName: "",
				tipo_user: ""
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
				portafolioFoto: "",
				merit: "",
				email_oferente: ""
			},
			userAll: [],
			favorito: {
				id_user: "",
				id_servicio_registrados: "",
				name_servicio: ""
			},
			comments: {
				id_user: "",
				id_servicios_prestados: "",
				id_servicio_registrados: "",
				text_comment: "",
				evaluacion: ""
			},
			serviceByCategory: [],
			serviceByIdUser: [],
			favoritos: [],
			serviceInfo: [],
			searchInfo: null,
			serviceInfoById: {},
			CompraByService: [],
			comment: {
				id_servicios_prestados: "",
				id_servicio_registrados: "",
				text_comment: "",
				evaluacion: ""
			},
			buyServiceByIdUser: [],
			comments: []
		},

		actions: {
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

			uploadfile: async () => {
				let FormDate = new FormDate();
				FormDate.append("portafolioFoto", values.portafolioFoto);
				return fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
					method: "POST",
					body: FormDate,
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						console.log("--servicio registrado file --", data);
						setStore({ serviceRegistrado: data });
					})
					.catch(error => console.log(error));
			},

			handleUpdateServicio: evento => {
				const store = getStore();
				let { serviceRegistrado } = store;
				serviceRegistrado[evento.target.name] = evento.target.value;
				setStore({ serviceRegistrado: serviceRegistrado });
				console.log(store.serviceRegistrado);
			},

			updateServicio: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/servicio-registrados/" + id, {
					method: "PUT",
					body: JSON.stringify(store.serviceRegistrado),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${store.user.token}`
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--servicio actualizado --", data);
						setStore({ serviceRegistrado: data });
						sweetAlert("¡Excelente!", "El servicio ha sido actualizado correctamente", "success");
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			eliminaServicio: async id => {
				const store = getStore();
				const newList = store.serviceByIdUser.filter(item => item.id !== id);
				setStore({
					serviceByIdUser: newList
				});
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/servicio-registrados/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.user.token}`
						}
					});
					const json = await response.json();
					console.log(json);
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
					const response = await fetch(process.env.BACKEND_URL + "/api/servicio-registrados/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--serviceRegistradoID--", json);
					setStore({ serviceRegistrado: json });
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
							headers: {
								"Content-Type": "application/json"
								// Authorization: `Bearer ${store.user.token}`
							}
						}
					);
					const json = await response.json();
					console.log("--serviceRegistrado--", json);
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

			searchInfo: async search => {
				console.log(search);
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/search/" + search, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--Search_Info--", json);
					setStore({ searchInfo: json });
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
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.user.token}`
						},
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
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.user.token}`
						}
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
			addComment: async ({ text_comment, evaluacion, id_servicios_prestados, id_servicio_registrados }) => {
				try {
					console.log(id_servicio_registrados);
					const response = await fetch(process.env.BACKEND_URL + "/api/comentarios", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${getStore().user.token}`
						},
						body: JSON.stringify({
							id_user: getStore().user.id,
							id_servicios_prestados: id_servicios_prestados,
							id_servicio_registrados: id_servicio_registrados,
							text_comment: text_comment,
							evaluacion: evaluacion
						})
					});
					const json = await response.json();
					console.log(json);
					console.log({ text_comment, evaluacion, id_servicios_prestados, id_servicio_registrados });
					// setStore({ comments: JSON.stringify(json) });
					getActions().listComments(id_servicio_registrados);
				} catch (error) {
					console.log(error);
				}
			},
			listComments: async id => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/comentarios/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log(json);
					setStore({ comments: json });
				} catch (error) {
					console.log(error);
				}
			},
			setRegister: (user, history) => {
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

						if (data.msg === "Este userName ya ha sido registrado") {
							sweetAlert("Error", "Este nombre de usuario ya ha sido registrado", "error");
						} else if (data.msg === "Este correo electrónico ya ha sido registrado") {
							sweetAlert("Error", "Este correo electrónico ya ha sido registrado", "error");
						} else {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.email));
							localStorage.setItem("tipo_user", JSON.stringify(data.tipo_user));
							localStorage.setItem("id", JSON.stringify(data.userId));
							localStorage.setItem("userName", JSON.stringify(data.userName));
							localStorage.setItem("isLogin", JSON.stringify(true));
							setStore({ user: { isLogin: true } });
							sweetAlert("¡Excelente!", "Su cuenta ha sido creada exitosamente", "success");
							history.push("/home");
						}
					})
					.catch(error => console.log("error creating account in the backend", error));
			},
			setLogin: (user, history) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ user: data });
						if (data.msg === "The email is not correct") {
							sweetAlert("Error", "Este email no esta registrado ", "error");
						} else if (data.msg === "The password is not correct") {
							sweetAlert("Error", "Contraseña o email erronea", "error");
						} else {
							localStorage.setItem("token", data.token);
							localStorage.setItem("user", JSON.stringify(data.user.email));
							localStorage.setItem("tipo_user", JSON.stringify(data.user.tipo_user));
							localStorage.setItem("id", JSON.stringify(data.user.id));
							localStorage.setItem("userName", JSON.stringify(data.user.userName));
							localStorage.setItem("isLogin", JSON.stringify(true));
							setStore({ user: { isLogin: true } });
							sweetAlert("¡Bienvenido!", "Su sesión ha iniciado exitosamente", "success");
							history.push("/home");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			setAdminLogin: user => {
				fetch(process.env.BACKEND_URL + "/api/admin-login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ user: data });
						if (data.msg === "admin ruta") {
							sweetAlert("Error", "Contraseña o email erronea", "error");
						} else {
							localStorage.setItem("token", data.access_token);
							localStorage.setItem("user", JSON.stringify(data.user.email));
							localStorage.setItem("tipo_user", "admin");
							localStorage.setItem("userName", "Administrador");
							localStorage.setItem("id", "0");
							localStorage.setItem("isLogin", JSON.stringify(true));
							setStore({ user: { isLogin: true } });
							sweetAlert("¡Bienvenido!", "Su secion ha iniciado exitosamente", "success");
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
						sweetAlert(
							"¡Excelente!",
							"Una nueva contraseña ha sido enviada a tu correo registrado",
							"success"
						);
					})
					.catch(error => console.log("Error sending email", error));
			},
			getTotales: comments => {
				let total1 = 0;
				let total2 = 0;
				let total3 = 0;
				let total4 = 0;
				let total5 = 0;
				comments.map(item => {
					if (item.evaluacion === 1) total1++;
					if (item.evaluacion === 2) total2++;
					if (item.evaluacion === 3) total3++;
					if (item.evaluacion === 4) total4++;
					if (item.evaluacion === 5) total5++;
				});
				return { total5, total4, total3, total2, total1 };
			},
			cerrarSesion: history => {
				const store = getStore();
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				localStorage.removeItem("tipo_user");
				localStorage.removeItem("id");
				localStorage.removeItem("userName");
				localStorage.removeItem("isLogin");
				setStore({ user: { isLogin: false } });
				//setStore({ favoritos: "" });
				history.push("/");
			},
			buyService: buyservice => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/buyservice", {
					method: "POST",
					body: JSON.stringify(buyservice),
					headers: { "Content-type": "application/json", Authorization: `Bearer ${store.user.token}` }
				})
					.then(data => data.json())
					.then(data => {
						console.log(data);
						const templateParams = {
							to_email: data.email_oferente,
							buyer: store.user.user,
							fecha: data.fecha
						};
						emailjs.send(
							"service_gtr9nn8",
							"template_0dswma9",
							templateParams,
							"user_Lg37b3jwPEh5fSo53yOsV"
						);
						sweetAlert(
							"¡Muchas Gracias por tu compra!",
							"El oferente ha sido informado de su requerimiento de servicio. y debería tomar contacto con usted dentro de las siguientes 2 horas.",
							"success"
						);
					})
					.catch(error => console.log("Error sending email", error));
			},

			// getBuyServiceById: async id => {
			// 	try {
			// 		const response = await fetch(process.env.BACKEND_URL + "/api/buyservice/" + id, {
			// 			method: "GET",
			// 			headers: { "Content-Type": "application/json" }
			// 		});
			// 		const json = await response.json();
			// 		console.log("--BuyServiceById--", json);
			// 		setStore({ BuyServiceById: json });
			// 	} catch (error) {
			// 		console.log("Error loading message from backend", error);
			// 	}
			// },

			getBuyServiceByIdUser: async () => {
				const store = getStore();
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/buyservice/user/" + localStorage.getItem("id"),
						{
							method: "GET",
							headers: { "Content-Type": "application/json" }
						}
					);
					const json = await response.json();
					console.log("--buyServiceByIdUser--", json);
					setStore({ buyServiceByIdUser: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			getCompraByService: async id => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/buyservice/service/" + id, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					const json = await response.json();
					console.log("--CompraByService--", json);
					setStore({ CompraByService: json });
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			}
		}
	};
};
export default getState;
