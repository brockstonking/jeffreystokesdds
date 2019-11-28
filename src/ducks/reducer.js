let initialState = {
    currentRoute: '/',
    os: 'Mac'
}

const SET_ROUTE_PATH = 'SET_ROUTE_PATH';
const SET_OS = 'SET_OS';

export const updateRoutePath = (currentRoute) => {
    return {
        type: 'SET_ROUTE_PATH',
        payload: {
            currentRoute: currentRoute
        }
    }
}

export const updateOs = (currentOs) => {
    return {
        type: 'SET_OS',
        payload: {
            os: currentOs
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
        case SET_OS:
            return {
                ...state,
                os: payload.os
            }
        default: 
            return state
    }
}

export default reducer