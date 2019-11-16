let initialState = {
    currentRoute: '/'
}

const SET_ROUTE_PATH = 'SET_ROUTE_PATH';

export const updateRoutePath = (currentRoute) => {
    return {
        type: 'SET_ROUTE_PATH',
        payload: {
            currentRoute: currentRoute
        }
    }
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ROUTE_PATH:
            return {
                ...state,
                currentRoute: payload.currentRoute
            }
        default: 
            return state
    }
}

export default reducer