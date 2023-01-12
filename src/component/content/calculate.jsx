import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../redux/action';
import DigitButton from './calculator/digitButton';
import OperationButton from './calculator/operationButton';

class Calculate extends Component {
    state = { 
        formater: Intl.NumberFormat('en-us'),
    };

    format = (number) => {
        const [integer,decimal] = number.split('.');
        if(decimal === undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`;
    };

    render() { 
        return (
            <div className="calculate">
                <div className="output">
                    <div className="last-output">
                        {this.format(this.props.lastOperand)} {this.props.operation}
                    </div>
                    <div className="current-output">
                        {this.format(this.props.currentOperand)}
                    </div>
                </div>
                <button className='button-ac' onClick={this.props.clear}>AC</button>
                <button onClick={this.props.delete_digit}>Del</button>
                <OperationButton>/</OperationButton>
                <DigitButton>7</DigitButton>
                <DigitButton>8</DigitButton>
                <DigitButton>9</DigitButton>
                <OperationButton>*</OperationButton>
                <DigitButton>4</DigitButton>
                <DigitButton>5</DigitButton>
                <DigitButton>6</DigitButton>
                <OperationButton>-</OperationButton>
                <DigitButton>1</DigitButton>
                <DigitButton>2</DigitButton>
                <DigitButton>3</DigitButton>
                <OperationButton>+</OperationButton>
                <DigitButton>0</DigitButton>
                <DigitButton>.</DigitButton>
                <button className='button-equal' onClick={this.props.evaluate}>=</button>
            </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
        overwrite: state.overwrite,
    }
}

const mapDeleteToProps = {
    delete_digit:() => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    },
}

export default connect(mapStateToProps,mapDeleteToProps)(Calculate);