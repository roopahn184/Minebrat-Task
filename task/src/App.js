import React, { useState } from 'react';
import Listcomponent from './Listcomponent';
import ResultComponent from './ResultComponent';

function App(){
const[selectedCityName, setSelectedCityName] = useState('');
const[selectedStateName, setSelectedStateName] = useState('');
const[showResult, setShowResult] = useState(false);

const handleSelection = (city, state) =>{
  setSelectedCityName(city);
  setSelectedStateName(state);
  setShowResult(true)
}
  return (
    <div>
      {!showResult ? (
      <Listcomponent handleSelection={handleSelection} /> ):(
        <ResultComponent selectedCity={selectedCityName} selectedState={selectedStateName} />
      
      )}
      
    </div>
  );
} export default App