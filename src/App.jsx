import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const fourNumber = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click 2 </button>
      <button onClick={() => alert('third click')}>Third</button>
      {/* vejal ace */} 
      <button onClick={() => fourNumber(3)}>Four</button>

    </>
  );
}

export default App;
