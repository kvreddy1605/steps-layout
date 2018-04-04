import React, { Component } from 'react';


export default class MyComponent3 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() { }

    componentWillUnmount() { }

    // not required as this component has no forms or user entry
    // isValidated() {}
    render() {
        return (
            <div>
                <p>Confirm</p>
                <button onClick={() => this.props.moveToNextComponent()}>Confirm</button>
                <button onClick={() => this.props.jumpToComponent(-2)}>Edit</button>
                <button onClick={() => this.props.moveToPreviousComponent()}>Cancel</button>
            </div>
        )
    }
}
