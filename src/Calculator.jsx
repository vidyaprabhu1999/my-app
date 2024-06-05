import React, { useState } from 'react';


const Calculator =()=>{
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    
    const handleClick = (value)=>{
        setInput(input+value);
    };
    const handleClear = () => {
       setInput('');
       setResult('');
    };
    const handleCalculate = () => {
        try {
          setResult(eval(input)); // Note: using eval() can be unsafe in production
        } catch (error) {
          setResult('Error');
        }
      };
      

    // const buttonStyle = {
    //     width: '50px',
    //     height: '50px',
    //     margin: '5px',
    //     fontSize: '20px'
    // };

    // const containerStyle = {
    //     width: '220px',
    //     margin: '100px auto',
    //     padding: '10px',
    //     border: '1px solid #ccc',
    //     borderRadius: '5px',
    //     textAlign: 'center'
    // };

    // const displayStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-end',
    //     marginBottom: '10px'
    // };

    // const inputStyle = {
    //     width: '100%',
    //     height: '40px',
    //     fontSize: '20px',
    //     textAlign: 'right',
    //     padding: '5px',
    //     marginBottom: '5px',
    //     border: '1px solid #ccc',
    //     borderRadius: '5px'
    // };

    // const resultStyle = {
    //     height: '30px',
    //     fontSize: '18px',
    //     color: '#666'
    // };

    return (
        // <div style={containerStyle}>
        //   <div style={displayStyle}>
        <div>
            <input type="text" value={input} readOnly  />
            <div>{result}</div>
        {/* //   </div> */}
          <div className='buttons1'>
            <button  onClick={() => handleClick('1')}>1</button>
            <button  onClick={() => handleClick('2')}>2</button>
            <button  onClick={() => handleClick('3')}>3</button>
            <button  onClick={() => handleClick('+')}>+</button>
            </div>
            <div className='buttons1'>
            <button  onClick={() => handleClick('4')}>4</button>
            <button  onClick={() => handleClick('5')}>5</button>
            <button  onClick={() => handleClick('6')}>6</button>
            <button  onClick={() => handleClick('-')}>-</button>
            </div>
            <div className='buttons1'>
            <button  onClick={() => handleClick('7')}>7</button>
            <button  onClick={() => handleClick('8')}>8</button>
            <button  onClick={() => handleClick('9')}>9</button>
            <button  onClick={() => handleClick('*')}>*</button>
            </div>
            <div className='buttons1'>
            <button  onClick={() => handleClick('0')}>0</button>
            <button  onClick={() => handleClick('.')}>.</button>
            <button  onClick={handleClear}>C</button>
            <button  onClick={() => handleClick('/')}>/</button>
            <button  onClick={handleCalculate}>=</button>
          </div>
        </div>
      );
 
};
export default Calculator;