import React from 'react'

export default class BlogIndex extends React.Component {
  state = {
    test: 'name',
  }

  handleClick = () => {

  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>list</p>
      </div>
    )
  }
}
