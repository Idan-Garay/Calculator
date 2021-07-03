import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Table from './components/Table';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            val: 0,
            num2: 0,
            sign: "",
            isChanged: false,
        }
        this.handleClick.bind(this);
    }

    operation(sign, val, num2) {
        switch (sign) {
            case '+': val += num2;
                break;
            case '-': val -= num2;
                break;
            case 'x': val *= num2;
                break;
            case '÷': val /= num2;
                break;
            default: ;
        }
        return val;
    }

    handleClick = (input) => {
        let {sign, val, num2, isChanged} = this.state;
        if (isNaN(input)) {
            if (input === '=') {
                let res = this.operation(sign, val, num2);
                this.setState({val: res, isChanged: false});
            } else {
                this.setState({sign: input, isChanged: true});
            }
        } else {
            if (isChanged) {
                let {num1, num2} = {input, val}
                this.setState({val: val, num2: input});
            } else {
                let res = (val === 0)? input: "" + val + input ;
                this.setState({val: res});
            }
        }
    }
 

    render() {
        return (
            <div className="content">
                <Screen value={this.state.val}/>
                <Table handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;