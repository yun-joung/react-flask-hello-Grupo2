import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const StarRating = props => {
	const { store, actions } = useContext(Context);
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const starValue = i + 1;
				return (
					<label key={i}>
						<button
							type="button"
							className="btn btn-default btn-grey btn-sm"
							aria-label="Left Align"
							color={starValue <= (hover || rating) ? "#ffc107" : "#C0C0C0"}
							style={{ margin: "1px", backgroundColor: "#C0C0C0" }}
							onClick={props.onClick}>
							<span className="fas fa-star" aria-hidden="true"></span>
						</button>
					</label>
				);
			})}
		</div>
	);
};
StarRating.propTypes = {
	starValue: PropTypes.array,
	onClick: PropTypes.func
};
export default StarRating;
