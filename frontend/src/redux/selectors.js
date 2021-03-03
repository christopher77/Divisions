import { useSelector, shallowEqual } from "react-redux";

function useColumns() {
	return useSelector((state) => state.columns, shallowEqual);
}

function useDivisions() {
	return useSelector((state) => state.divisions, shallowEqual);
}

export { useColumns, useDivisions };
