import React, { Component } from 'react';
import ACTIONS from '../../../redux/action';
import { connect } from 'react-redux';

class OperationButtion extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={() => {
                this.props.choose_operation(this.props.children);
            }}>
                {this.props.children}
            </button>
        );
    }
}

const mapOperationToProps = {
    choose_operation: (operation) => {
        return {
            type: ACTIONS.CHOOSE_OPERATION,
            operation: operation,
        }
    }
}

export default connect(null,mapOperationToProps)(OperationButtion);