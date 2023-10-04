import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const root = 5
  const a = 11
  const b = 21
const [selectedcolor,setselectedcolor]=useState("black")
  
  
  // function handleRed() {
  //   console.log("red")
  // }
  // function handleBlue() {
  //   console.log("blue")
  // }
  // function handleGreen() {
  //   console.log("green")
  // }
 const handleColor=(Color)=>{
  console.log(Color)

  setselectedcolor(Color)
 }

  



  return (

    <div>
     <button onClick={()=>handleColor("red")}>
        red
     </button>
     <button onClick={()=>handleColor("blue")}>
        blue

      </button>
      <button onClick={()=>handleColor("green")}>
        green

      </button>
      <div className='box' style={{backgroundColor:selectedcolor}}>
        
      </div>
 
    </div>
  );
}

export default App;
