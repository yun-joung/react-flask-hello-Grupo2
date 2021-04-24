import React, { Component } from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

class MyScrollUpButton extends Component {
	render() {
		return (
			<div>
				<ScrollUpButton
					StopPosition={0}
					ShowAtPosition={150}
					EasingType="easeOutCubic"
					AnimationDuration={500}
					ContainerClassName="ScrollUpButton__Container"
					TransitionClassName="ScrollUpButton__Toggled"
					style={{ border: "4px solid blue", zIndex: "1000", width: "38px", height: "38px" }}
					ToggledStyle={{}}
				/>
			</div>
		);
	}
}

export default MyScrollUpButton;
