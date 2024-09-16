import s from './Buttons.module.scss';
import { useReducer, useState } from 'react';

export const Buttons = ({ operand1, setOperand1, operand2, setOperand2, operator, setOperator, setResult }) => {
  const initialState = { value: '' };

  function calcReducer(state, action) {
    const operand1 = parseFloat(action.operand1);
    const operand2 = parseFloat(action.operand2);

    if (isNaN(operand1) || isNaN(operand2)) return initialState;
    switch (action.type) {
      case 'PLUS':
        return { value: operand1 + operand2 };
      case 'MINUS':
        return { value: operand1 - operand2 };
      case 'MULTIPLY':
        return { value: operand1 * operand2 };
      case 'DIVIDE':
        return { value: operand1 / operand2 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(calcReducer, initialState);
  const [currentOperand, setCurrentOperand] = useState('operand1');

  const handleNumberClick = (value) => {
    if (currentOperand === 'operand1') {
      setOperand1((prev) => prev + value);
    } else {
      setOperand2((prev) => prev + value);
    }
  };

  const handleOperatorClick = (operatorType) => {
    if (operand1 !== '') {
      setOperator(operatorType);
      setCurrentOperand('operand2'); // Switch to entering operand2
    }
  };

  const handleEqualClick = () => {
    if (operand1 && operand2 && operator) {
      dispatch({
        type: operator,
        operand1: operand1,
        operand2: operand2,
      });
      setResult(state.value); // Set result to display
      setCurrentOperand('operand1'); // Reset to operand1 for the next calculation
    }
  };

  return (
    <>
      <div className={s.calculatorStyle}>
        <section className={s.firstRow}>
          <div className={s.upperGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button key={num} onClick={() => handleNumberClick(num.toString())}>
                {num}
              </button>
            ))}
          </div>
          <div className={s.underGrid}>
            <button onClick={() => handleNumberClick('.')}>.</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={handleEqualClick}>=</button>
          </div>
        </section>
        <section className={s.secondRow}>
          <div>
            <button onClick={() => handleOperatorClick('PLUS')}>+</button>
            <button onClick={() => handleOperatorClick('MINUS')}>−</button>
            <button onClick={() => handleOperatorClick('MULTIPLY')}>×</button>
            <button onClick={() => handleOperatorClick('DIVIDE')}>÷</button>
          </div>
        </section>
      </div>
    </>
  );
};
