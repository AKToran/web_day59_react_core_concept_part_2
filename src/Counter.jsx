import { useState } from "react"

export default function Counter(){
  const counterStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px 30px",
    display: "flex",
    justifyContent: "space-between"
  }
  // if initial value is not provided it is undefined.
  const [count, setCount] = useState(0);

  //break down of use state function
  function useStateBreakdown(initialValue){
    let state = initialValue;
    function setState(newState){
      state = newState;
    }
    return [state, setState];
  }

  // const handleAdd = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div style={counterStyle}>
      <h3>Count: {count} </h3>
      <button onClick={()=> setCount(count+1)}>Add</button>
    </div>
  )
}