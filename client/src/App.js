import React from 'react';
import './App.css';
import {Router, Redirect} from '@reach/router';

import AllPirates from './components/AllPirates';
import CreatePirate from './components/CreatePirate';
import ShowPirate from './components/ShowPirate';
import EditPirate from './components/EditPirate';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPirates path="/pirates"/>   
        <CreatePirate path="/pirate/new"/>
        <ShowPirate path="/pirate/:id"/>
        <EditPirate path="/pirate/:id/edit"/>
      </Router>
      <Redirect from="/" to="/pirates" noThrow/> 
    </div>
  );
}

export default App;
