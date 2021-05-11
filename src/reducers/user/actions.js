import { dispatch } from "@octaldev/react-store";
import { C } from "./reducer";

export function updateName(name) {
	return dispatch({ type: C.UPDATE_NAME, name });
}

export function resetUser() {
	return dispatch({ type: C.RESET });
}
