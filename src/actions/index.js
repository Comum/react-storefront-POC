import fetch from 'cross-fetch';

import userActions from './userActions';

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

const receiveUserLoggedInStatus = createAction(userActions.USER_LOGGED_IN);
export const userLoggedIn = _ => {
    return dispatch => {
        return fetch(`${SERVER_URL}/currentUser`)
            .then(response => response.json())
            .then(json => dispatch(receiveUserLoggedInStatus(json)));
    }
}