import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
const CustomProgressBar = ({ comments }) => {
	const { store, actions } = useContext(Context);
	const { total1, total2, total3, total4, total5 } = actions.getTotales(comments);

	return (
		<>
			<div>
				<div className="pull-left">
					<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
						<div style={{ height: "9px", margin: "{5px 0}" }}>
							<span className="fas fa-star" style={{ position: "relative", left: "-20px" }}></span>
						</div>
					</div>
					<div className="pull-left" style={{ width: "180px" }}>
						<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
							<ProgressBar now={(total5 * 100) / comments.length} style={{ width: "100%" }} />
						</div>
					</div>
					<div
						className="pull-right"
						style={{ marginLeft: "-35px", marginTop: "-20px", fontFamily: "Catamaran" }}>
						5
					</div>
				</div>

				<div className="pull-left">
					<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
						<div style={{ height: "9px", margin: "{5px 0}" }}>
							<span className="fas fa-star" style={{ position: "relative", left: "-20px" }}></span>
						</div>
					</div>
					<div className="pull-left" style={{ width: "180px" }}>
						<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
							<ProgressBar now={(total4 * 100) / comments.length} style={{ width: "100%" }} />
						</div>
					</div>
					<div
						className="pull-right"
						style={{ marginLeft: "-35px", marginTop: "-20px", fontFamily: "Catamaran" }}>
						4
					</div>
				</div>

				<div className="pull-left">
					<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
						<div style={{ height: "9px", margin: "{5px 0}" }}>
							<span className="fas fa-star" style={{ position: "relative", left: "-20px" }}></span>
						</div>
					</div>
					<div className="pull-left" style={{ width: "180px" }}>
						<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
							<ProgressBar now={(total3 * 100) / comments.length} style={{ width: "100%" }} />
						</div>
					</div>
					<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
						3
					</div>
				</div>

				<div className="pull-left">
					<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
						<div style={{ height: "9px", margin: "{5px 0}" }}>
							<span className="fas fa-star" style={{ position: "relative", left: "-20px" }}></span>
						</div>
					</div>
					<div className="pull-left" style={{ width: "180px" }}>
						<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
							<ProgressBar now={(total2 * 100) / comments.length} style={{ width: "100%" }} />
						</div>
					</div>
					<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
						2
					</div>
				</div>

				<div className="pull-left">
					<div className="pull-left" style={{ width: "35px", lineHeight: "1.5" }}>
						<div style={{ height: "9px", margin: "{5px 0}" }}>
							<span className="fas fa-star" style={{ position: "relative", left: "-20px" }}></span>
						</div>
					</div>
					<div className="pull-left" style={{ width: "180px" }}>
						<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
							<ProgressBar now={(total1 * 100) / comments.length} style={{ width: "100%" }} />
							<span className="sr-only">80% Complete (danger)</span>
						</div>
					</div>
					<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
						1
					</div>
				</div>
			</div>
		</>
	);
};
CustomProgressBar.propTypes = {
	comments: PropTypes.array
};
export default CustomProgressBar;
