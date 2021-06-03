import React from 'react'
import { withRouter } from "react-router-dom";
import { toJS } from "mobx";
// import { inject, observer } from 'mobx-react'
// import store from "../store";

// @inject('UserListStore')
// @observer
class UserIndex extends React.Component {
  push = () => {
    this.props.history.push("/user/add?name=231");
  }
  render() {
    const { UserListStore } = this.props
    console.log('UserListStore', toJS(UserListStore));
    return (
      <div>
        <p>UserListPage</p>
        <p>组件：{UserListStore.name}</p>
        <Button onClick={this.push}>添加用户</Button>
      </div>
    )
  }
}

export default withRouter(UserIndex)
