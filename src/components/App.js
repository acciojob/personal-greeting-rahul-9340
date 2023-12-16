
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [value,setValue] = useState("");

function modifyValue(value){
  setValue(value)
}
  return (
    <div>
       <input type="text" onChange={(e)=>{
        modifyValue("Hello "+e.target.value+"!")
       }} 
       /> 

      <p>{value}</p>

    </div>
  )
}

export default App
