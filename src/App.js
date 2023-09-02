import './App.css';
import React, {useState} from 'react';

function App() {
  const [fnum, setFnum] = useState('');
  const [lnum, setLnum] = useState('');
  const [result, setResult] = useState('');

  const num1 = (e) =>
  {
    const inputValue = e.target.value;
      if(/^\d*\.?\d*$/.test(inputValue))
      {
        setFnum(inputValue);
      }
  };
  const num2 = (e) =>
  {
    const inputValue = e.target.value;
    if(/^\d*\.?\d*$/.test(inputValue))
    {
      setLnum(inputValue);
    }
  };
  const add = () =>
  {
    const sum = parseFloat(fnum) + parseFloat(lnum);
    setResult(sum);
  };
  const sub = () =>
  {
    const sub = parseFloat(fnum) - parseFloat(lnum);
    setResult(sub);
  };
  const multi = () =>
  {
    const prod = parseFloat(fnum) * parseFloat(lnum);
    setResult(prod);
  };
  const divide = () =>
  {
    if(parseFloat(lnum) !==0)
    {
      const quo = parseFloat(fnum)/parseFloat(lnum);
      setResult(quo);
    }
    else
    {
      setResult('Cannot divide by zero');
    }
  };



  return (
    <div>
      <label>Enter 1st Number:<br /> <input type="text" value={fnum} onChange={num1}></input></label><br></br>
      <label>Enter 2nd Number: <br /><input type="text" value={lnum} onChange={num2}></input></label><br></br>
    <br />
      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={divide}>Divide</button>
      <button onClick={multi}>Multiply</button>
      <h1>Result = {result}</h1>
    </div>
  );
}

export default App;
