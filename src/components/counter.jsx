//LPT: use react snippets extension
// * the extension must be installed on the remote, if using ec2

//imrc command:
import React, { Component } from 'react'

// cc command; will have two cursors, type name of class:
class Counter extends Component {
    state = {}
    render() {
        return (<h1>Hola Mundo!</h1>); // inside <> this is a jsx exp. NOT. STRING.
    }
}

export default Counter;