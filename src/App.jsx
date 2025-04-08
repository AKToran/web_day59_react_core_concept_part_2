import "./App.css";

function App() {
  function handleClick() {
    alert("button the first");
  }

  const handleClickProper = () => {
    alert("we will use this one.");
  };

  const addFive = (num) =>{
    let newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert("button the second");
        }}
      >
        Click Me
      </button>

      <button onClick={handleClickProper}>Proper</button>

      <button onClick={addFive(5)}>Add</button>
      
      {/* proper way to pass an argument */}
      <button onClick={()=> addFive(5)}>Add</button>
    </>
  );
}

export default App;
