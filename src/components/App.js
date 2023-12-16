
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [value,setValue] = useState("");

function modifyValue(value){
  setValue("Hello "+value+"!")
}
  return (
    <div>
       <p>Enter your name:</p>
       <input type="text" onChange={(e)=>{
        modifyValue(e.target.value)
       }}></input>

      <p>{value}</p>

    </div>
  )
}

export default App
