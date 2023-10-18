import React,{useEffect, useState} from 'react';
import CitiesList from './CitiesList';
import axios from 'axios';

const Listcomponent = ({handleSelection}) => {
const[states, setStates] = useState([]);
const[selectedState, setSelectedState] = useState('');

useEffect(()=>{
 // axios.defaults.baseURL = 'http://localhost:3000';
/*   axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'; */
 axios.get("http://api.minebrat.com/api/v1/states",{corsdomain:true})
.then((response) => {
  setStates(response.data);
  console.log(response.data)
})
.catch(error => {
  console.log('Error fetching states:', error);
})
// const response = fetch('http://api.minebrat.com/api/v1/states', 
// {
//   method: "GET",
//   mode:"cors",
//   "Content-Type":"application/json" ,

// },
// )
// console.log(response.data);
},[]);

const handleStateChange = (e) =>{
  setSelectedState(e.target.value);
};
const handleSubmit = (e) =>{
  e.preventDefault()
 handleSelection(null, selectedState)
}
  return (
  <div>
    <pre>{JSON.stringify(states)}</pre>
 <select value={selectedState} onChange={handleStateChange}>
   <option value="">Select a State</option>
   { 
    states.map(state => (
      <option key={state.id} value={state.name}>{state.name} </option>
    ))

   }
 </select>
 <CitiesList selectedState={selectedState} />
 <button onClick={handleSubmit}>Submit</button>

  </div>
)
}
 export default Listcomponent