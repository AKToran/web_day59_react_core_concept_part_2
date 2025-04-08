import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

function App() {
  const promiseFriends = fetchFriends()

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

      <Suspense fallback={<h3 className="user">Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3 className="user">Loading Friends...</h3>}>
        <Friends promiseFriends={promiseFriends}></Friends>
      </Suspense>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert("button the second");
        }}
      >
        Click Me
      </button>

      <button onClick={handleClickProper}>Proper</button>

      {/* <button onClick={addFive(5)}>Add</button> */}
      
      {/* proper way to pass an argument */}
      <button onClick={()=> addFive(5)}>Add</button>
    </>
  );
}

export default App;
