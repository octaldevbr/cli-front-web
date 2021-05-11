import * as Actions from "./actions";

export function updateName(name) {
	return Actions.updateName({ name });
}

export function resetUser() {
	return Actions.resetUser();
}
