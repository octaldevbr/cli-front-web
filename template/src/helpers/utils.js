import { useEffect, useRef } from "react";

export function usePrevious(value) {
	const ref = useRef(value);

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

export function redirect(url, returnAsCallback = false) {
    const redirectFN = () => (window.location.href = url);

    if (returnAsCallback === true)
        return redirectFN;

    return redirectFN();
}

export function searchInto(string1, string2) {
	try {
		return (
			string1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().search(
				string2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
			) > -1
		);
	} catch (e) {
		return false;
	}
}
