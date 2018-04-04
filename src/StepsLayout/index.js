import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class StepsLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentComponent: this.props.startAtComponent,
            navState: this.getNavStates(this.props.startAtComponent, this.props.components.length),
        }

        this.jumpToComponent = this.jumpToComponent.bind(this);
        this.moveToNextComponent = this.moveToNextComponent.bind(this);
        this.moveToPreviousComponent = this.moveToPreviousComponent.bind(this);
    }
    
    jumpToComponent(index){
        const calNextComponentIndex = this.state.currentComponent + index;
        const lastComponentIndex = this.props.components.length - 1;

        if(calNextComponentIndex >= 0 && calNextComponentIndex <= lastComponentIndex  )
            this.setState(prevState => {   
                    return { currentComponent: calNextComponentIndex }
                },()=>this.setState(() => {
                    return {navState: this.getNavStates(this.state.currentComponent, this.props.components.length)}
                }
            )
        ); 
    }
    moveToNextComponent() {
        this.jumpToComponent(1);
    }
    moveToPreviousComponent() {
        this.jumpToComponent(-1);
    }
    
    renderProgressSteps() {
        const stepWidth = (100 / this.props.components.length ).toFixed(2) + "%";
        const style = { width : stepWidth }
        return this.props.components.map((s, i) => (
            <li className={this.getClassName("progress", i)} style={style} key={i} value={i}>
                {this.props.components[i].title}
            </li>
        ));
    }

    getNavStates(indx, length) {
        let styles = [];

        for (let i = 0; i < length; i++) {
            if (i < indx) {
                styles.push('done');
            }
            else if (i === indx) {
                styles.push('doing');
            }
            else {
                styles.push('todo');
            }
        }
        return styles 
    }

    getClassName(className, i) {
        let liClassName = className + "-" + this.state.navState[i];
        return liClassName;
    }

    render() {
        let compToRender;
        let cloneExtensions = {
            moveToNextComponent: () => {
                this.moveToNextComponent();
            },
            moveToPreviousComponent: () => {
                this.moveToPreviousComponent();
            },
            jumpToComponent: (incComponentIndex) => {
                this.jumpToComponent(incComponentIndex);
            },
        };
        const componentPointer = this.props.components[this.state.currentComponent].component;
        if (componentPointer instanceof Component || (componentPointer.type && componentPointer.type.prototype instanceof Component)) {
            cloneExtensions.ref = 'activeComponent';
        }
        compToRender = React.cloneElement(componentPointer, cloneExtensions);
        
        return (
            <div className="steps-layout">
                <ol className="steps-layout__progress">
                    {this.renderProgressSteps()}
                </ol> 
                <div className="steps-layout__component">         
                    {compToRender}
                </div>
            </div>
        );
    }
}


StepsLayout.propTypes = {
    components: PropTypes.array.isRequired,
    startAtComponent: PropTypes.number
}

StepsLayout.defaultProps = {
    startAtComponent: 0
}
export default StepsLayout;