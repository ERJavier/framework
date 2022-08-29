import logo from './logo.svg';
import './App.css';
import Form  from './from';
const movies = [
  {
  name: 'nope',
  available: 5,
  },
  {
    name: 'GOT',
    available: 2,
  },

];

function App() {
  return (
    <div className="App">
      <div>
        <h2>Movies</h2>
        {movies.map((movie) => (
          <Form movie = {movie} />
        ))}
      </div>
    </div>
  );
}


export default App;
