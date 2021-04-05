
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuItem, Popover, Menu, Position, Button } from "@blueprintjs/core";
import Domains from './components/Domains';
function App() {

  const [domains, setDomains] = useState(['google.com','xepelin.com','amazon.com']);
  const [urls, setUrls] = useState(
    {
      'google.com': [ '232323', '5958484' ],
      'xepelin.com': [ '948584' ],
      'amazon.com': [ '0fif9r9r9', '99d9gt8u' ]
    }
  );
  const [formValue, setValue] = useState();

  // Get all existing domains & urls
  // useEffect(() => {

  //   axios.get('/domain')
  //     .then((response) => {
  //       console.log(response.data.domains);
  //       let keys = Object.keys(response.data.domains);
  //       setDomains(keys);
  //       setUrls(response.data.domains);
  //     });
  // });

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
  // const domainsArray = domains && domains.map((m) => {
  //   <Popover 
  //     content={
  //       <Menu>
  //         {
  //           urls && urls.m && urls.m.map((u) => <MenuItem text={u} />)
  //         }
  //       </Menu>
  //     } 
  //     position={Position.RIGHT_TOP}>
  //     <Button icon="share" text={m} />
  //   </Popover>
  // })

  return (
    <div className="App">

      <header className="App-header">
        <div style={{paddingBottom: "50px"}}>
          <h2 style={{marginBottom: ".5em"}}>Domains Registered:</h2>
          <Domains domainsProps={domains} urlsProps={urls} />
        </div>

        <form>
          <label>
            <input type="text" value={formValue} onChange={e => setValue(e.target.value)} />
          </label>
          <input type="submit" value="Add New short url" onClick={newShortUrl}/>
        </form>
      </header>
    </div>
  );
}

export default App;
