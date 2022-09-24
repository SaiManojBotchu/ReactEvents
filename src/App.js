import WiseSquareWithProps from './01_events/WiseSquareWithProps';
import WiseSquare from './01_events/WiseSquare';
// import Form from './01_events/Form';
// import CopyDemo from './01_events/CopyDemo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>React Events!</h1>
      <WiseSquare />
      <WiseSquareWithProps />
    </div>
  );
}

export default App;
