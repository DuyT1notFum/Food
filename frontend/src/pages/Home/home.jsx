import React, { useState } from 'react';// eslint-disable-line no-unused-vars
import './home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
  const [category,setCategory] = useState("all");
  return (
   <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category}/>
    <AppDownload/>
   </div>
  )
}

export default Home