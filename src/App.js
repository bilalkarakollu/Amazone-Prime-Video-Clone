import React, { useEffect } from 'react';
import Layout from './Layouts/Home'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import $ from 'jquery'

function App() {

  useEffect(() => {

    /*  $('.card').hover(() => {
       $('.scrollable-inner').removeClass('overflow-x-hidden')
       $('.scrollable-inner').addClass('overflow-x-visible')
     }, () => {
       $('.scrollable-inner').addClass('overflow-x-hidden')
       $('.scrollable-inner').removeClass('overflow-x-visible')
     }) */

  }, [0])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detay" element={<Detay />} />
        </Route>
      </Routes>
    </>
  );
  function Detay() {
    return (
      <div>
        <h2>Detay</h2>
      </div>
    );
  }

}



export default App;

