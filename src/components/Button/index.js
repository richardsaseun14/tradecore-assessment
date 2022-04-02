import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, onClick, outlined, className, disabled }) => {
	const classes = classNames(
		className,
		styles.Button,
		outlined ? styles.ButtonOutline : styles.ButtonSolid
	);
	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
