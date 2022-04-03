import classNames from "classnames";
import React from "react";
import styles from "./Input.module.scss";

const Input = ({
	value,
	onChange,
	className,
	placeholder,
	label,
	type,
	required,
}) => {
	const classes = classNames(className, styles.Input, "reset-sizing", "mb-16");
	return (
		<div>
			{label ? (
				<>
					<label className="">{label}</label>
					<br></br>
				</>
			) : (
				""
			)}
			<input
				className={classes}
				value={value}
				required={required}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
			></input>
		</div>
	);
};

export default Input;
