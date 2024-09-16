import s from './Display.module.scss';

export const Display = ({ operand1, operand2, operator, result, handleClear }) => {
  // Decide what to display based on state
  const displayValue = result !== '' ? result : operand2 || operand1 || '0'; // Show result if available, else operand2, else operand1, else 0

  return (
    <>
      <section className={s.displaygrid}>
        <div className={s.displayStyle}>
          {displayValue} {operator && !result ? operator : ''} {/* Display operator if it's set but result is not yet calculated */}
        </div>
        <button onClick={handleClear}>AC</button>
      </section>
    </>
  );
};
