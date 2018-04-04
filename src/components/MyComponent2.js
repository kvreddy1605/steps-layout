import React, { Component } from 'react';


export default class MyComponent2 extends Component {
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
                <p >Verify</p>
                <button onClick={() => this.props.moveToNextComponent()}>View Trade Settlement</button>
                <button onClick={() => this.props.moveToPreviousComponent()}>Cancel</button>
            </div>
        )
    }
}
