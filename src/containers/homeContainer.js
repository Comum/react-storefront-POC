import {connect} from 'react-redux';

import Home from '../pages/home';

const stateToProps = state => {
    return {
        user: state.user
    };
}

const dispatchToProps = dispatch => {
    return {};
}

const homeContainer = connect(stateToProps, dispatchToProps)(Home);

export default homeContainer;