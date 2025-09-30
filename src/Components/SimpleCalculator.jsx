import "./SimpleCalculator.css";
import { useState } from "react";

const SimpleCalculator = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [opr, setOpr] = useState("Select Any Operator");
    const [answer, setAnswer] = useState(null);

    const changeHandler1 = (e)=> setNum1(e.target.value);
    const changeHandler2 = (e)=> setOpr(e.target.value);
    const changeHandler3 = (e)=> setNum2(e.target.value);

    function calculate(){
        let res;
        let n1 = Number(num1);
        let n2 = Number(num2);
        switch(opr){
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
                res = n1 * n2;
                break;
            case "/":
                n2===0 ? alert("Can't divide by 0 😑") : res = n1 / n2;
                break;
            default:
                res = "Invalid Operation";
        }

        setAnswer(`Answer is ${res} 😎`);
        setNum1("");
        setNum2("");
        setOpr("Select Any Operator");
    }

    return (
        <div className="calculator">
            <h1>Simple Calculator</h1>
          <input type="number" placeholder="Enter first no."  value={num1} onChange={changeHandler1} />
          <select value={opr} onChange={changeHandler2}>
                <option value="">Select Any Operator</option>
                <option value="+">add</option>
                <option value="-">sub</option>
                <option value="*">Mul</option>
                <option value="/">div</option>
          </select>
          <input type="number" placeholder="Enter second no." value={num2} onChange={changeHandler3}/>
          <button onClick={calculate}>Calculate</button>
          <p>{answer}</p> 
        </div>
    );
};

export default SimpleCalculator;