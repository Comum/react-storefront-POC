import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const accountStatus = this.props.account.currentAccountStatus ? 'logged in' : 'logged out';

    return (
      <div>
        <p>Home</p>
        <p>Status: {accountStatus}</p>
      </div>
    )
  }
}
