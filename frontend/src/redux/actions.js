function reset() {
	return { type: "RESET" };
}

function addDivisions(divisions) {
	return {
		type: "ADD_DIVISIONS",
		payload: divisions,
	};
}

export { addDivisions };
