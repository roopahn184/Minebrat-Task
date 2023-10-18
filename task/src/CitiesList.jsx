import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CitiesList = ({ selectedState}) =>{
const[cities, setCities] = useState([]);
useEffect(()=>{

  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
   axios.get('http://api.minebrat.com/api/v1/states/cities/{stateId}',{mode:'cors'})
   .then(Response =>{
     setCities(Response.data);
   })
   .catch(error => {
     console.log('Error fetching cities:', error);
   });
}, [selectedState]);
  return (
<div>
  <select>
    <option value="">Select a city</option>
    {cities.map(city =>(
      <option key={city.id} value={city.name}>{city.name}</option>
    ))}
  </select>
</div>
  )
} 
export default CitiesList