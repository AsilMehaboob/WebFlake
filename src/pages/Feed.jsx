import React from 'react';
import RecipeCard from '../component/RecipeCard';
import IntroCard from '../component/IntroCard';
import Carousel from '../component/Carousel';





const Feed = () => {
  return (
    <>
      <IntroCard/>

      <h2 className='carousel-title'>TODAY'S CHRISTMAS SPECIALS</h2>
    <div className='carousel-container'>
      <Carousel />      <RecipeCard/>
    </div>



    </>
  );
};

export default Feed;
