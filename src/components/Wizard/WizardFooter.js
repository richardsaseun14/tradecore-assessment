import React from "react";
import Button from "../Button";

const WizardFooter = ({ prev, next }) => {
	return (
		<div className="d-flex align-items-center justify-content-end">
			<Button className="mr-2" outlined onClick={prev} label="Back" />
			<Button onClick={next} label="Next" />
		</div>
	);
};

export default WizardFooter;
