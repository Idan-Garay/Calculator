import React from 'react';
// import Screen from './Screen'
import {TableProps} from '../customTypes'

const Table = ({dispatch}: TableProps) => {


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="saddlebrown" colSpan={2} onClick={e => dispatch({type: "Clear"})}>clear</td>
                        <td className="blue" onClick={e => dispatch({type: "Change Operation", payload: '%'})}>%</td>
                        <td className="blue" onClick={e => dispatch({type: "Change Operation", payload: '+'})}>+</td>
                    </tr>
                    <tr>
                        <td onClick={e => dispatch({type: "Change Number", payload: 7})}>7</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 8})}>8</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 9})}>9</td>
                        <td className="blue" onClick={e => dispatch({type: "Change Operation", payload: '/'})}>/</td>
                    </tr>
                    <tr>
                        <td onClick={e => dispatch({type: "Change Number", payload: 4})}>4</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 5})}>5</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 6})}>6</td>
                        <td className="blue" onClick={e => dispatch({type: "Change Operation", payload: 'x'})}>x</td>
                    </tr>
                    <tr>
                        <td onClick={e => dispatch({type: "Change Number", payload: 1})}>1</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 2})}>2</td>
                        <td onClick={e => dispatch({type: "Change Number", payload: 3})}>3</td>
                        <td className="blue" onClick={e => dispatch({type: "Change Operation", payload: '-'})}>-</td>
                    </tr>
                    <tr>
                        <td colSpan={2} onClick={e => dispatch({type: "Change Number", payload: 0})}>0</td>
                        <td onClick={e =>dispatch({type: "Change Number", payload: '.'})}>.</td>
                        <td className="blue" onClick={e => dispatch({type: "Do Operation", payload: '='})}>=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;