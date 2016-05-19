import React, { Component } from 'react'
import { render } from 'react-dom'

class Home extends Component {
    render() {
        return (
        <div>Hello, World!</div>
    )
    }
}

render((<Home />), document.getElementById('app'));