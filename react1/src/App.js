import logo from './logo.svg';
import './App.css';
const movies = [
  {
  name: 'nope',
  aviable: 5,
  },
  {
    name: 'GOT',
    aviable: 2,
  },

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

      <div>
        <h2>Movies</h2>

      </div>
    </div>
  );
}


export default App;
