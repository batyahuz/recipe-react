import React, { useEffect } from 'react';
import './App.css';
import HeaderComp from './general-components/header';
import RoutesComp from './general-components/routs';
import Footer from './general-components/footer'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function App() {
  const dispatch = useDispatch();
  const reload = useSelector(state => state.user.reload)
  useEffect(() => {
    axios.get(`http://localhost:8080/api/category`)
      .then(res => {
        dispatch({ type: "SET_CATEGORIES", payload: res.data })
      })
      .catch(err => {
        console.log(err.response.data);
        alert(err.response.data);
      });
    axios.get(`http://localhost:8080/api/recipe`)
      .then(res => {
        dispatch({ type: "SET_RECIPES", payload: res.data })
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        if (err?.response?.data != undefined)
          alert(err.response.data);
      });
  }, [])
  return (
    <div className="App">
      <HeaderComp />
      <RoutesComp />
      <Footer />
    </div>
  );
}

export default App;
