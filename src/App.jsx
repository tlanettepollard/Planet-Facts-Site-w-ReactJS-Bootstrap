import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from 'react-router-dom';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Header from './layout/Header';
import PlanetMainCard from './layout/PlanetMainCard';


const App = () => {


  return (
    <Router>
      <div className="App">
        <Header />

      </div>
    </Router >
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
    return <p>Loading profile...</p>;
  }
  return (
    <PlanetMainCard planetName={planetName} planetObj={planet} />
  )
}



export default App;
