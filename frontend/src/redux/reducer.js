const initialState = {
	columns: [
		"Divisiones",
		"Division superior",
		"Colaboradores",
		"Nivel",
		"Subdivisiones",
		"Embajadores",
	],
	divisions: [],
};

function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case "ADD_DIVISIONS": {
			return {
				...state,
				divisions: action.payload,
			};
		}
		case "RESET": {
			return initialState;
		}
		default: {
			return state;
		}
	}
}

export default reducer;
