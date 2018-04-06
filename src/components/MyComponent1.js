import React, { Component } from 'react';


export default class MyComponent1 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        
    }
    handleClick(){
        this.props.moveToNextComponent()
           
    }
    componentDidMount() { }

    componentWillUnmount() { }

    // not required as this component has no forms or user entry
    // isValidated() {}
    render() {
        return (
            <div>
                <p >Enter</p>
                <button onClick={this.handleClick.bind(this)}>Trade Selected</button>
                <button onClick={() => this.props.moveToPreviousComponent()}>Cancel</button>
            </div>
        )
    }
}
