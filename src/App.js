import React from 'react';
import Map from './components/Map';
import MapDrawing from './components/MapDrawing';

function App() {
  return (
    <div>
      <h1>Map</h1>
      <Map />

      <br />
      <h1>Map Drawing</h1>
      <MapDrawing />
    </div>
  );
}

export default App;
