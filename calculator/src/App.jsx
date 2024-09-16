import './App.scss';
import { useState } from 'react';
import { Buttons } from './components/Buttons/Buttons';
import { Display } from './components/Display/Display';

function App() {
  const [operand1, setOperand1] = useState('');  // First operand
  const [operand2, setOperand2] = useState('');  // Second operand
  const [operator, setOperator] = useState(null); // Operator (+, -, *, /)
  const [result, setResult] = useState('');       // Calculation result

  // Clear all values
  const handleClear = () => {
    setOperand1('');
    setOperand2('');
    setOperator(null);
    setResult('');
  };

  return (
    <>
      <Display
        operand1={operand1}
        operand2={operand2}
        operator={operator}
        result={result}
        handleClear={handleClear}
      />
      <Buttons
        operand1={operand1}
        setOperand1={setOperand1}
        operand2={operand2}
        setOperand2={setOperand2}
        operator={operator}
        setOperator={setOperator}
        setResult={setResult}
      />
    </>
  );
}

export default App;
