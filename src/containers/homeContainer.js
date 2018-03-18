import {connect} from 'react-redux';

import {getUserRoutes} from '../actions';
import Home from '../pages/home';

const stateToProps = state => {
    return {
        user: state.user
    };
}

const dispatchToProps = dispatch => {
    return {
        onClickUserIcon: (...args) => {
            dispatch(getUserRoutes(...args))
        }
    };
}

const homeContainer = connect(stateToProps, dispatchToProps)(Home);

export default homeContainer;