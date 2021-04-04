import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [domains, setDomains] = useState([]);
  const [urls, setUrls] = useState([]);
  const [formValue, setValue] = useState();

  // Get all existing domains
  useEffect(() => {
    console.log('in use effect')
    axios.get('/domain')
      .then((response) => {
        console.log(response.data.domains);
        let keys = Object.keys(response.data.domains);
        setDomains(keys);
        setUrls(response.data.domains);
      });
  });

  const newShortUrl = () => {
    if (formValue.substring(0,4) == "http") {
      axios.post('/shorten', {
        url: formValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      let h = 'http://'
      let res = h.concat(formValue);
      console.log('url:', res)
      axios.post('/shorten', {
        url: res,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  }
  const expandDomain = (domainName) => {
    let urlsArr = urls.domainName;
    urlsArr.map((u) => {
      <h5>{u}</h5>
    })
  }
  const domainsArray = domains.map((m) => {
    <h2 key={m} onClick={expandDomain(m)}>{m}</h2>
  })

  return (
    <div className="App">

      <header className="App-header">
        <div style={{paddingBottom: "50px"}}>
          Domains Registered:
          {domainsArray}
          {expandDomain}
        </div>

        <form onSubmit={newShortUrl}>
          <label>
            <input type="text" value={formValue} onChange={e => setValue(e.target.value)} />
          </label>
          <input type="submit" value="Add New short url" />
        </form>
      </header>
    </div>
  );
}

export default App;
