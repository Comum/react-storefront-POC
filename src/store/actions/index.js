import { fetchInfoFromServer } from './action-helpers'
import accountActions from './account-actions'

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
        return fetchInfoFromServer('/currentUser')
            .then(json => dispatch(receiveAccountLoggedInStatus(json)));
    }
}