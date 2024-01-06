import React from 'react';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import PlanetCard from './layout/PlanetCard';


const App = () => {


  return (
    <div className="App">
      <Header />
      <PlanetCard />
    </div>
  );
};

export default App;
