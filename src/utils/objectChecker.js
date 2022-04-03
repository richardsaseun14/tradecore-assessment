export const objectChecker = (obj) => {
	const tmpObject = { ...obj };
	return Object.values(tmpObject).every((el) => !!el);
};
