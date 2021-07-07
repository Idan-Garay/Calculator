import React, {useState} from 'react';
import './App.css';
import Screen from './components/Screen';
import Table from './components/Table';


interface Props {
  n1?: number,
  n2?: number,
  sign?: String,
  isChanged?: boolean,
}

function App() {
  const [props, setProps] = useState<Props>({n1:0, n2: 0, sign: '', isChanged: false});

  function handleClick(input:number | String) {
    let {n1, n2, sign, isChanged} = props;
    if (typeof input === 'number') {
      
      if (isChanged) {
        n2 = n1;
        n1 = input;
        isChanged = false; 
      } else {
        n1 = +(''+ n1 +input);
      }

    } else {

      if (input === 'clear') {
        setProps({n1: 0, n2: 0, sign: '', isChanged: false});
        return;
      }

      if (input === '=') {
        isChanged = false; 
        n1 = operation({n1, n2, sign});
      } else {
        isChanged = true;
        sign = input;
      }
    }

    setProps({n1, n2, sign, isChanged});
  }

  const operation = ({n1, n2, sign}: Props) => {
      [n1,n2] = [n2,n1];
      switch(sign) {
        case '+': n1 = n1! + n2!;
                  break;
        case '-': n1 = n1! - n2!;
                  break;

        case 'x': n1 = n1! * n2!;
        break;

        case '/': n1 = n1! / n2!;
                  break;
      }
      return n1;
  }

  return (
    <div className="content">
      <Screen value={props.n1!}/>
      <Table handleClick={handleClick}/>
    </div>
  );
}

export default App;
