import fetch from 'cross-fetch';

import accountActions from './account-actions'

const SERVER_URL = 'http://localhost:3001';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};

        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

const receiveAccountLoggedInStatus = createAction(accountActions.ACCOUNT_LOGGED_IN);
export const accountLoggedIn = _ => {
    return dispatch => {
        return fetch(`${SERVER_URL}/currentUser`)
            .then(response => response.json())
            .then(json => dispatch(receiveAccountLoggedInStatus(json)));
    }
}