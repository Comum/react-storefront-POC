import user from '../actions/userActions';

const INITIAL_STATE = {
    currentUserStatus: false,
    currentUserInfo: {},
    userRoutes: {}
}

function isUserLoggedIn(state, userStatus) {
    return {
        ...state,
        currentUserStatus: userStatus.isLoggedin
    };
}

function sendUserRoutes(state, userRoutes) { console.log('aqui');
    return {
        ...state,
        userRoutes: userRoutes
    };
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = INITIAL_STATE;
    }
    switch (action.type) {
        case user.USER_LOGGED_IN:
            return isUserLoggedIn(state, action.data);
        case user.USER_LOGGED_IN:
            return sendUserRoutes(state, action.data);
        default:
            return state;
    }
}