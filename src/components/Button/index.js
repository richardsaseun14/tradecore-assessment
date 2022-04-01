import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, onClick, outlined, className }) => {
	const classes = classNames(
		className,
		styles.Button,
		outlined ? styles.ButtonOutline : styles.ButtonSolid
	);
	return (
		<button className={classes} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
