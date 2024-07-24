import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import "./Searchbar.css"
import { MdGpsFixed } from "react-icons/md"
import CurrentLocation from './CurrentLocation'

const Searchbar = (props) => {
  const [results, setResults] = useState([])
  const [input, setInput] = useState("")
  const currentlocation = CurrentLocation();
  const API_key = 'e60a9ebecf05d0e91736a8dd4539a026'
  const fetchData = (value) => {
    if (value.length >= 3) {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_key}`)
        .then(response => response.json())
        .then(data => {
          let result = data.filter((user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
          });
          setResults(result);
        })
    }
  }


  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const handleLocationClick = () => {

    handleChange(currentlocation);
  }

  useEffect(() => {
    if (input === '') {
      setResults([])
    }
  }, [input])


  return (
    <div className='search-bar-container'>
      <div>
        <div className='input-wrapper'>

          <input placeholder='Search city...'
            value={input}
            onChange={(e) => handleChange(e.target.value)} 
            style={{border:'none'}}
          />
          <FaSearch id='search-icon' />
          <MdGpsFixed id='location-symbol' onClick={handleLocationClick} />
        </div>

      </div>
      <div className='result-list'>
        {
          results.map((result, id) => {
            return (
              <div key={id} className='result-list-box' onClick={
                () => {
                  props.setCity(result.name + ',' + result.country);
                  setInput('')
                }
              } >
                {result.name},{result.country}
              </div>
            )
          })
        }

      </div>

    </div>

  )
}

export default Searchbar
