import { makeObservable, observable, action } from 'mobx'

class UserListStore {
  name = 'my name is user list'
  constructor() {
    makeObservable(this, {
      name: observable,
    })
  }
  setList = (val) => {
    this.name = val
  }
}

export default new UserListStore()
