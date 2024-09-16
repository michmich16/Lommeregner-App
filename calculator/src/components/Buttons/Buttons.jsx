export const Button = () => {

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
            <section>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div>
                    <button>.</button>
                    <button>0</button>
                    <button>=</button>
                </div>
            </section>
            <section>
                <div>
                    <button>+</button>
                    <button>−</button>
                    <button>×</button>
                    <button>÷</button>
                </div>
            </section >
        </>
    )

}