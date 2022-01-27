import React, {useState, useReducer} from 'react';
import './App.css';
import Screen from './components/Screen';
import Table from './components/Table';
import {CalculatorAction} from './customTypes'

interface ArithmeticData {
  n1: number,
  n2: number,
  sign: string,
  isAppend: boolean,
  // history: Array<Array<string | number>>
}

const initialState = {
  n1: 0,
  n2: 0,
  sign: '',
  isAppend: true,
}

const DO_OPERATION = "Do Operation";
const UPDATE_OPERATION = "Change Operation";
const UPDATE_NUMBER = "Change Number";
const IS_APPEND = "Is Append";
const CLEAR = "Clear";

const calculatorReducer = (state:ArithmeticData, action: CalculatorAction):ArithmeticData => {
  switch (action.type) {
    case DO_OPERATION: {
      const {sign} = state;
      let {n1, n2} = state;
      let res = 0;

      if (sign === '+')
        res = n1 + n2;
      else if (sign === '-')
        res = n1 - n2;
      else if (sign === '*')
        res = n1 * n2;
      else if (sign === '/')
        res = n1 / n2;
      else if (sign === '%')
        res = n1 % n2;

      return {...state, n2: res};
    }
    case UPDATE_OPERATION: {  

      return {...state, sign: action.payload, isAppend: false};
    }
    case UPDATE_NUMBER: {
      let {n1, n2, isAppend} = state;
      let newState = {...state};
      
      if (isAppend)
        newState.n2 = +(n2.toString().concat(action.payload.toString()));
      else{
        newState.n1 = n2;
        newState.n2 = action.payload;
        newState.isAppend = true;
      }

      return newState;
    }
    case IS_APPEND: {
      return {...state, isAppend: action.payload}
    }
    case CLEAR: {
      return {...initialState};
    }
    default: return state;
  }
}

function App() {
  // const [props, setProps] = useState<ArithmeticData>({n1:0, n2: 0, sign: '', isChanged: false});
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  // function handleClick(input:number | string) {
  //   let {n1, n2, sign, isChanged} = props;

  //   if (typeof input === 'number') {
  //     if (isChanged) {
  //       n2 = n1;
  //       n1 = input;
  //       isChanged = false; 
  //       n1 = operation({n1, n2, sign});
  //     } else {
  //       n1 = +(''+ n1 +input);
  //     }

  //   } else {

  //     if (input === 'clear') {
  //       setProps({n1: 0, n2: 0, sign: '', isChanged: false});
  //       return;
  //     }

  //     if (input === '=') {
  //       n1 = operation({n1, n2, sign});
  //       isChanged = true; 
  //     } else {
  //       isChanged = true;
  //       sign = input;
  //     }
  //   }

  //   setProps({n1, n2, sign, isChanged});
  // }

  // const operation = ({n1, n2, sign}: ArithmeticData) => {
  //     [n1,n2] = [n2,n1];
  //     switch(sign) {
  //       case '+': n1 = n1! + n2!;
  //                 break;
  //       case '-': n1 = n1! - n2!;
  //                 break;

  //       case 'x': n1 = n1! * n2!;
  //                 break;

  //       case '/': n1 = n1! / n2!;
  //                 break;
  //       case '%': n1 = n1! % n2!;
  //     }
  //     return n1;
  // }

  return (
    <div className="content">
      <Screen value={state.n2}/>
      <Table dispatch={dispatch}/>
    </div>
  );
}

export default App;
