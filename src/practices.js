import logo from './logo.svg';
import './App.css';

function App() {
  const root = 5
  const a = 11
  const b = 21

  function handleClick() {
    console.log("a="+a +",b="+b)
  }

  return (

    <div>
      <button onClick={handleClick}>
        from gaindakot

      </button>

    </div>
  );
}

export default App;
