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
      <div>
        <h2>Movies</h2>
        {movies.map((movie) => (
          <form>
            <h3>{movie.name}</h3>
            <button> - </button>
            0
            <button> + </button>
          </form>
        ))}
      </div>
    </div>
  );
}


export default App;
