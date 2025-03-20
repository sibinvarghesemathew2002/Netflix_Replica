import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css";
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, action} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;