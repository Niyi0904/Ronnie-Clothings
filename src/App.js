import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return (<div>
    <h1>HATS PAGE</h1>
  </div>
)};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/hats' Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
