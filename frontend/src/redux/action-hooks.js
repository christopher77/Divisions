import React from "react";
import { useDispatch } from "react-redux";

import { addDivisions, reset } from "./actions";

export function useAddDivisions() {
	const dispatch = useDispatch();
	return React.useCallback((divisions) => dispatch(addDivisions(divisions)), [
		dispatch,
	]);
}

export function useReset() {
	const dispatch = useDispatch();
	return React.useCallback(() => dispatch(reset()), [dispatch]);
}
