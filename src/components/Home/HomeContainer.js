import { connect } from 'react-redux'

import Home from './Home'

const stateToProps = state => {
    return {
        account: state.account
    }
}

const dispatchToProps = dispatch => {
    return {

    }
}

const HomeContainer = connect(stateToProps, dispatchToProps)(Home)

export default HomeContainer