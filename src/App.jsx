import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vite + React</h1>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>


  );
};


function Planet() {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);


  useEffect(() => {
    let planet = data.find((planetObj) => planetObj.name === capitalize(planetName))
    setPlanet(planet);
  }, [planetName])

  function capitalize(word) {
    let first = word.charAt(0);
    return first.toUpperCase() + word.slice(1);
  }

  if (planet === null) {
    return <p>Loading profile...</p>
  }
  return (

    <PlanetContent planetName={planetName} planetObj={planet} />
  )
}





export default App;
