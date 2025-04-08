export default function Counter(){
  const counterStyle = {
    border: "2px solid red",

  }
  return(
    <div style={counterStyle}>
      <h3>Count:  </h3>
      <button>Add</button>
    </div>
  )
}