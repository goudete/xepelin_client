import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [domains, setDomains] = useState([]);

  // Get all existing domains
  useEffect(() => {
    axios.get('/domain')
      .then((response) => {
        console.log(response);
        setDomains(response)
      });
  });

  const newShortUrl = (newUrl) => {
    axios.post('/shorten', {
      url: newUrl,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{paddingBottom: "50px"}}>
          Domains Registered:
          {/* display domains here */}
        </div>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add New short url" />
        </form>
      </header>
    </div>
  );
}

export default App;
