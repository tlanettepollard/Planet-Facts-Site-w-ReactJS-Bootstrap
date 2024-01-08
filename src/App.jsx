import React, { useState, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from 'react-router-dom';*/
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Header from './layout/Header';
import PlanetMainCard from './layout/PlanetMainCard';


const App = () => {


  return (

    <div className="App">
      <Header />
      <PlanetMainCard />

    </div>

  );
};






export default App;
