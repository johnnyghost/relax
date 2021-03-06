import {dataConnect} from 'relate-js';
import Component from 'components/component';
import React, {PropTypes} from 'react';

import Users from './components/users.jsx';

@dataConnect(
  () => ({
    fragments: Users.fragments
  })
)
export default class UsersContainer extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  static defaultProps = {
    users: []
  };

  getInitState () {
    return {
      newOpened: false
    };
  }

  openNew () {
    this.setState({
      newOpened: true
    });
  }

  closeNew () {
    this.setState({
      newOpened: false
    });
  }

  render () {
    const {users} = this.props;
    return (
      <Users
        users={users}
        {...this.state}
        openNew={::this.openNew}
        closeNew={::this.closeNew}
      />
    );
  }
}
