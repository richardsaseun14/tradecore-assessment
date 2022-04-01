import React from "react";
import styles from "./WizardHeaderItem.module.scss";

const WizardHeaderItem = ({ active, step, title }) => {
	return (
		<>
			<div className={styles.Item}>{step}</div>
			<p className="text-center">{title}</p>
		</>
	);
};

export default WizardHeaderItem;
