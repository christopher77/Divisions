import React from "react";
import { useDispatch } from "react-redux";

import { addDivisions } from "./actions";

export function useAddDivisions() {
	const dispatch = useDispatch();
	return React.useCallback((divisions) => dispatch(addDivisions(divisions)), [
		dispatch,
	]);
}
