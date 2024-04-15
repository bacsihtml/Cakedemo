import React from 'react'
import './Home.css'
import Caruosel from '../../components/carousel/Caruosel'
import Collection from '../../components/collection/Collection'
import Handmadecakes from '../../components/handmadecakes/handmadecakes'
import Featuredproduct from '../../components/featuredproduct/Featuredproduct'
import Recipedunuts from '../../components/recipedonuts/Recipedonuts'
import Ourarticle from '../../components/Ourarticle/Ourarticle'


const Home = () => {
  return (
    <>
      <Caruosel/>
      <Collection/>
      <Handmadecakes/>
      <Featuredproduct/>
      <Recipedunuts/>
      <Ourarticle/>
    </>
  )
}

export default Home