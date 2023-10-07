import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(14);

const subValue=()=>{
  if(counter>0){
  setCounter(counter-1);
  }
}
  // let counter=5;
  const addValue=()=>{
    setCounter(counter+1);
    //counter++;
  }
  return (
    <>
      
     <h1>Chai Aur React</h1>
     <h2>Counter Value: {counter}</h2>
    
     <button  onClick={addValue}>Add Value</button>
     <br />
     <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
