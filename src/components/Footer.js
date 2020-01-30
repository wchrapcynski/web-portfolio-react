import React from "react";
import "./components.css";

function Footer() {
	let currentTime = new Date();
	let year = currentTime.getFullYear();
	return(
		<div className="footer">
			©{year} - William Chrapcynski
		</div>
	)
}

export default Footer;
