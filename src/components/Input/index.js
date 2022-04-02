import classNames from "classnames";
import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, onChange, className, placeholder, type }) => {
	const classes = classNames(
		className,
		styles.Input
		// outlined ? styles.ButtonOutline : styles.ButtonSolid
	);
	return (
		<input
			className={classes}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
		></input>
	);
};

export default Input;
