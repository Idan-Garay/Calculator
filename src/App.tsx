import React, { useReducer} from 'react';
import './App.css';
import Screen from './components/Screen';
import Table from './components/Table';
import {ArithmeticData, CalculatorAction, DO_OPERATION, UPDATE_OPERATION, UPDATE_NUMBER, IS_APPEND, CLEAR, DECIMAL} from './customTypes';

const initialState = {
  n1: 0,
  n2: 0,
  sign: '',
  isAppend: true,
  isDecimal: false,
  equal: false
}

const calculatorReducer = (state:ArithmeticData, action: CalculatorAction):ArithmeticData => {
  switch (action.type) {
    case DO_OPERATION: {
      const {sign} = state;
      let {n1, n2} = state;
      let res = n2;

      if (sign === '+')
        res = n1 + n2;
      else if (sign === '-')
        res = n1 - n2;
      else if (sign === 'x')
        res = n1 * n2;
      else if (sign === '/')
        res = n1 / n2;
      else if (sign === '%')
        res = n1 % n2;

      return {...state, n1: n2, n2: res, equal: true};
    }
    case UPDATE_OPERATION: {  
      let {n1, n2, sign, equal} = state;
      let res = n2;

      if (!equal) {
        if (sign === '+')
          res = n1 + n2;
        else if (sign === '-')
          res = n1 - n2;
        else if (sign === 'x')
          res = n1 * n2;
        else if (sign === '/')
          res = n1 / n2;
        else if (sign === '%')
          res = n1 % n2;
      } 

      return {...state, n1:n2, n2:res, sign: action.payload, isAppend: false, equal: false};
    }
    case UPDATE_NUMBER: {
      let {n2, isAppend} = state;
      let newState = {...state};
      
      if (isAppend)
        newState.n2 = +(n2.toString().concat(action.payload.toString()));
      else{
        newState.n1 = n2;
        newState.n2 = action.payload;
        newState.isAppend = true;
      }

      if (newState.isDecimal) {
        n2 = +(n2.toString().concat(action.payload.toString()));
        n2 /= 10;
        newState.n2 = n2;
        newState.isDecimal = false;
      }

      return newState;
    }
    case IS_APPEND: {
      return {...state, isAppend: action.payload}
    }
    case CLEAR: {
      return {...initialState};
    }
    case DECIMAL: {

      return {...state, isDecimal: true};
    }
    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <div className="content">
      <Screen value={state.n2} isDecimal={state.isDecimal}/>
      <Table dispatch={dispatch}/>
    </div>
  );
}

export default App;
