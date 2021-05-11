let initialState = {
    user: {
        name: "some username here"
    }
};

export const C = {
    UPDATE_NAME: "UPDATE_NAME",
    RESET: "RESET",
}

/* eslint-disable-next-line */
export default function(state = initialState, action) {
    switch (action.type) {
        case C.UPDATE_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.name,
                },
            }
        }
        case C.RESET: {
            return initialState;
        }
        default:
            return state;
    }
}
