import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Home from './Home.js';
import Generos from './Generos.js'
import NovoGenero from './NovoGenero';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/generos" exact component={Generos} />
        <Route path="/generos/novo" exact component={NovoGenero} />
      </div>
    </Router>
  )
}

export default App;
