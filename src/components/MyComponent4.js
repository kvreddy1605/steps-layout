import React, { Component } from 'react';


export default class MyComponent4 extends Component {
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
            <p>Settle</p>
            <button  onClick={()=>this.props.moveToNextComponent()}>Return to trade overview</button>
          </div>
        )
    }
}
