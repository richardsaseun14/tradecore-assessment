import React from "react";
import WizardHeaderItem from "./WizardHeaderItem";
import styles from "./WizardHeader.module.scss";
import classNames from "classnames";

const WizardHeader = ({ currentStep, isAdd }) => {
	const classes = classNames(
		styles.WizardHeader,
		"d-flex",
		"align-item-center",
		"justify-content-between"
	);
	return currentStep === 5 ? null : (
		<ul className={classes}>
			<li className="d-flex flex-column align-items-center">
				<WizardHeaderItem step="1" title="Genre" active={currentStep === 1} />
			</li>
			<li className="d-flex flex-column align-items-center">
				<WizardHeaderItem
					step="2"
					title="Subgenre"
					active={currentStep === 2}
				/>
			</li>
			{currentStep < 3 ? (
				<li className="d-flex flex-column align-items-center">
					<WizardHeaderItem step="..." title="" />
				</li>
			) : isAdd ? (
				<>
					<li className="d-flex flex-column align-items-center">
						<WizardHeaderItem
							step="3"
							title="Add New Subgenre"
							active={currentStep === 3}
						/>
					</li>
					<li className="d-flex flex-column align-items-center">
						<WizardHeaderItem
							step="4"
							title="Information"
							active={currentStep === 4}
						/>
					</li>
				</>
			) : (
				<li className="d-flex flex-column align-items-center">
					<WizardHeaderItem
						step="3"
						title="Information"
						active={currentStep === 4}
					/>
				</li>
			)}
		</ul>
	);
};

export default WizardHeader;
