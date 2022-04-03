import classNames from "classnames";
import React from "react";
import { useWizard } from "../../context/WizardContext";
import Button from "../Button";
import { Check } from "../Icon/check";
import styles from "./Steps.module.scss";

const Success = () => {
	const { resetWizard } = useWizard();
	const classes = classNames(styles.Success);

	return (
		<div className={classes}>
			<div>
				<Check />
				<p className="text-center my-6" style={{ marginTop: "20px" }}>
					Book added successfully
				</p>
			</div>
			<div className="text-center">
				<Button label="Add another book" onClick={resetWizard}></Button>
			</div>
		</div>
	);
};

export default Success;
