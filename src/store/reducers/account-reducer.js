import account from '../actions/account-actions';

const INITIAL_STATE = {
    currentAccountStatus: false
}

function isAccountLoggedIn(state, accountStatus) {
    return {
        ...state,
        currentAccountStatus: accountStatus.isLoggedin
    };
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = INITIAL_STATE;
    }
    switch (action.type) {
        case account.ACCOUNT_LOGGED_IN:
            return isAccountLoggedIn(state, action.data);
        default:
            return state;
    }
}