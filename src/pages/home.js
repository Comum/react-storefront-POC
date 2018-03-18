import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const userStatus = this.props.user.currentUserStatus ? 'logged in' : 'logged out';
        console.log('home.js props', this.props, this.props.user.currentUserStatus);
        
        return (
            <div className="HomePage">
                Home Page
                <br />
                User status: {userStatus}
            </div>
        );
    }
}

export default Home;