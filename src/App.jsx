import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '/src/data.json';
//import Home from './pages/Home';
import Header from './layout/Header';
import PlanetContent from './layout/PlanetContent';
import Footer from './layout/Footer';
import '../dist/css/main.css';



const App = () => {


  return (

    <div className="App">

      <Header />
      <Routes>
        <React.Fragment>
          <Route exact path='/Planet-Facts-Site-w-ReactJS-Bootstrap' />
          <Route path='*' element={<Navigate to='/mercury' replace={true} />} />
          <Route path='/:planetName' element={<Planet />} />
        </React.Fragment>
      </Routes>
      <Footer />
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
