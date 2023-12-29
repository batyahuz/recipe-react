import React from 'react';
import './App.css';
import HeaderComp from './general/header';
import RoutesComp from './general/routs';
import Footer from './general/footer'
import { useSelector } from 'react-redux';


function App() {
  const reload = useSelector(state => state.user.reload)

  return (
    <div className="App">
      <HeaderComp />
      <RoutesComp />
      <Footer />
    </div>
  );
}

export default App;
