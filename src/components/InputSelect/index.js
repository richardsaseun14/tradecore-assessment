import classNames from "classnames";
import React from "react";
import styles from "./InputSelect.module.scss";

const InputSelect = ({
	value,
	onChange,
	className,
	name,
	placeholder,
	label,
	type,
	items,
}) => {
	const classes = classNames(
		className,
		styles.InputSelect,
		"reset-sizing",
		"mb-16"
	);
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
			<select
				className={classes}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			>
				<option value="">{label}</option>
				{items.map((el, index) => (
					<option key={index} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
};

export default InputSelect;
