import React from 'react';
import '../App.css';

class Table extends React.Component {


    render() {
        return (
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td className="number-btn" colSpan={2} onClick={e => this.props.handleClick('clear')}>clear</td>
                        <td className="sign-btn" defaultValue="clear" onClick={e => this.props.handleClick('=')}>=</td>
                        <td className="sign-btn" defaultValue="clear" onClick={e => this.props.handleClick('+')}>+</td>
                    </tr>
                    <tr>
                        <td className="number-btn" onClick={e => this.props.handleClick('7')}>7</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('8')}>8</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('9')}>9</td>
                        <td className="sign-btn" onClick={e => this.props.handleClick('-')}>-</td>
                    </tr>
                    <tr>
                        <td className="number-btn" onClick={e => this.props.handleClick('4')}>4</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('5')}>5</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('6')}>6</td>
                        <td className="sign-btn" onClick={e => this.props.handleClick('x')}>x</td>
                    </tr>
                    <tr>
                        <td className="number-btn" onClick={e => this.props.handleClick('1')}>1</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('2')}>2</td>
                        <td className="number-btn" onClick={e => this.props.handleClick('3')}>3</td>
                        <td className="sign-btn" onClick={e => this.props.handleClick('÷')}>÷</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;