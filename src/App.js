import React from 'react';
import Layout from './Layouts/Home'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import TV from './Pages/TV'
import Movie from './Pages/Movie'
import Categories from './Pages/Categories'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="storefront/tv" element={<TV />} />
          <Route path="storefront/movie" element={<Movie />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );

}



export default App;

