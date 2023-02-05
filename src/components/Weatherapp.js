import React, { useEffect, useState } from 'react';
import './css/style.css';
import logo from './image/1.png';

const Weatherapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Meerut");

  useEffect( () =>{
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d3b3a32c93aa80fb20c9424e96e9f32c`
      const response = await fetch(url);
      
      const resJson = await response.json();
      // console.log(resJson)
      setCity(resJson.main);
    }
    fetchApi();
  },[search]  )

  return (
    <div>
      <div className='box'>
        <div className='inputData'>
          <input
          type ="search"
          className='inputField' 
          value={search}
          onChange={(event) =>{
              setSearch(event.target.value)
          }}
          />
       </div>
    {!city ? (
      <p className='errorMsg'>No Data Found</p>
    ) : (
      <div>
      <div className='info'>
      <img src={logo} alt="logo"/>
      <h2 className='location'>
        <i className='fas  fa-location-dot'></i>{search}
      </h2>
      <h1 className='temp'>{city.temp}°C</h1>
      <h3 className='tempmin_max'> min : {city.temp_min}°C | max : {city.temp_max}°C</h3>
   </div>
   
   </div>
    )}

    </div>
    </div>
  )
}

export default Weatherapp
