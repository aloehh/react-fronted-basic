import React from 'react'
import ListPage from "./list"
import AddPage from "./add"

import { Route } from 'react-router-dom'

export default class BlogIndex extends React.Component {
    render(){
        return (
            <div>
                <p>UserIndex</p>
                <Route path="/user/list" component={ListPage} />
                <Route path="/user/add" component={AddPage} />
            </div>
        )
    }
}