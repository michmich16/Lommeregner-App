import s from './Buttons.module.scss'

export const Buttons = () => {

    const calcReducer = (state, action) => {
        switch (action.type) {
          case "PLUS":
            return 
  
          case "MINUS":
            return 
  
          case "MULTIPLY":
            return 
  
          case "DIVIDE":
            return 
  
          default:
            return state;
        }
      };
    

    return (
        <>
        <div className={s.calculatorStyle}>
            <section className={s.firstRow}>
                <div className={s.upperGrid}>
                    <button value={1}>1</button>
                    <button value={2}>2</button>
                    <button value={3}>3</button>
                    <button value={4}>4</button>
                    <button value={5}>5</button>
                    <button value={6}>6</button>
                    <button value={7}>7</button>
                    <button value={8}>8</button>
                    <button value={9}>9</button>
                </div>
                <div className={s.underGrid}>
                    <button>.</button>
                    <button value={0}>0</button>
                    <button>=</button>
                </div>
            </section>
            <section className={s.secondRow}>
                <div>
                    <button>+</button>
                    <button>−</button>
                    <button>×</button>
                    <button>÷</button>
                </div>
            </section>
            </div>
        </>
    )

}