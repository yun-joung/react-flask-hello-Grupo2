import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import ServicioCategory from "./pages/servicio-category";
import Servicioindividual from "./pages/servicio-Individual";
import injectContext from "./store/appContext";

import MyNavbar from "./component/navbar";
import { Footer } from "./component/footer";
import Landingpage from "./pages/landingPage";
import { PasswordRecovery } from "./component/PasswordRecovery";
import { PasswordRecovery2 } from "./component/PasswordRecovery2";
import Register from "./pages/register";
import RegisterService from "./pages/registerService";
import MiServicio from "./pages/MiServicio";
import MiCompra from "./pages/MiCompra";
import MiServicioId from "./pages/MiServicioId";
import MiDato from "./pages/MiDato";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/loginAdmin";
import { GraciasCompra } from "./pages/GraciasCompra";
import ServicioindividualComments from "./pages/servicio-Individual-comment";
import MyScrollUpButton from "./component/ScrollupButton";
import { ServiceEmpresa } from "./pages/servicioEmpresa";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<MyNavbar />
				<ScrollToTop>
					<MyScrollUpButton />
					<Switch>
						<Route exact path="/">
							<Landingpage />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/servicio/category/:id" component={Servicioindividual} />
						<Route exact path="/servicio/:category" component={ServicioCategory} />
						<Route exact path="/MiServicio" component={MiServicio} />
						<Route exact path="/MiServicio/id/:id" component={MiServicioId} />
						<Route exact path="/MiDato" component={MiDato} />
						<Route
							exact
							path="/MiCompra/id/:id/servicio/:idservicio"
							component={ServicioindividualComments}
						/>
						{/* <Route
							exact
							path="/MiCompra/:idcompra/category/:idcategory"
							component={ServicioindividualComments}
						/> */}
						<Route exact path="/MiCompra">
							<MiCompra />
						</Route>
						<Route exact path="/passwordrecovery">
							<PasswordRecovery />
						</Route>
						<Route exact path="/passwordrecovery2">
							<PasswordRecovery2 />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/registerservice">
							<RegisterService />
						</Route>
						<Route exact path="/service-empresa">
							<ServiceEmpresa />
						</Route>
						<Route exact path="/compra">
							<GraciasCompra />
						</Route>
						<Route exact path="/MiEvaluacion">
							<MiCompra />
						</Route>
						<Route exact path="/login-admin">
							<LoginAdmin />
						</Route>
						<Route exact path="/Admin">
							<Admin />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
