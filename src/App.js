import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import MovieRows from './Components/Rows/MovieRows';
import { originals , action, romance, comedy, documentary } from './url';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <MovieRows url={originals} title = 'Netflix Originals'/>
      <MovieRows url={action} title = 'Action' isSmall />
      <MovieRows url={romance} title = 'Romance' isSmall />
      <MovieRows url={comedy} title = 'Comedy' isSmall />
      <MovieRows url={documentary} title = 'Documentaries' isSmall />
    </div>
  );
}

export default App;
