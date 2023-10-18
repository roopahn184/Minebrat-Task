import React from 'react';

const ResultComponent = ({ selectedCityName, selectedStateName }) => {
  return (
    <div>
      <h1>You Have Selected {selectedCityName}, {selectedStateName}</h1>
    </div>
  );
}
export default ResultComponent