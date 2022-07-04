import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

// in the below, <Counter> etc. is auto completed and the 
// import is added above.
// also, that is how one calls a class, I guess. can then input
// your arguments etc. 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sherlock is not that fat. Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
