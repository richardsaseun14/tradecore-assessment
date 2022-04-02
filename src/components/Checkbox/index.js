import classNames from "classnames";
import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, value, onChange, className }) => {
	const classes = classNames(
		className,
		styles.Label
		// outlined ? styles.ButtonOutline : styles.ButtonSolid
	);
	return (
		<label className={classes}>
			<input
				className={styles.Checkbox}
				type="checkbox"
				checked={value}
				onChange={onChange}
			/>
			{label}
		</label>
	);
};

export default Checkbox;
