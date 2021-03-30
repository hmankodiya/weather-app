import './App.css';
import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun,faAnkh } from "@fortawesome/free-solid-svg-icons";

const api = {
  key: '74f6afcdfb007dfff61c9d9deb9e6a61',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          // console.log(query);
          if (result['message'] === undefined) {
            setWeather(result);
          }
          setQuery('');
        });
    }
  }
  const time=(d) => {
    return d.getHours();
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    // return `${day} ${date} ${month} ${year}`;
    return day + " " + date + " " + month + " " + year;
  }
  return (
    <div className={(typeof weather.main != 'undefined') ?
      (weather.main.temp > 16) ? 'app warm' : 'app'
      : 'app'}
    >
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name},{weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}°C
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}

        <div className='day-night'>
          <FontAwesomeIcon icon={(time(new Date())>6 && time(new Date())<20 )?faSun:faAnkh} />
        </div>
      </main>
    </div>
  );
}
// <i className={"fas fa-sun"}></i>

export default App;
