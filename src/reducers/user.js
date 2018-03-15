import actions from '../actions';
import user from '../actions/userActions';

const INITIAL_STATE = {
    currentUserStatus: false,
    currentUserInfo: {}
}

function isUserLoggedIn(state, userStatus) {
    console.log(userStatus.isLoggedin);
    
    return {
        ...state,
        currentUserStatus: userStatus.isLoggedin
    };
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = INITIAL_STATE;
    }
    switch (action.type) {
        case user.USER_LOGGED_IN:
            return isUserLoggedIn(state, action.data);
        default:
            return state;
    }
}