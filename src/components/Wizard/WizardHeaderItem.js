import classNames from "classnames";
import React from "react";
import styles from "./WizardHeaderItem.module.scss";

const WizardHeaderItem = ({ active, step, title }) => {
	const classes = classNames(styles.Item, active ? styles.Active : "");
	return (
		<>
			<div className={classes}>{step}</div>
			<p className="text-center">{title}</p>
		</>
	);
};

export default WizardHeaderItem;
