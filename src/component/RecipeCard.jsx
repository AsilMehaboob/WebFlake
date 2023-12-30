import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';


const RecipeCard = () => {
  return (
    <div className='info-card'>
      <article className='CardA'>

        <h2>
          Unlock the magic of the holiday season with our Christmas Recipe
          Wonderland! Click below to explore a treasure trove of festive culinary
          delights. From decadent desserts to savory delights, we've curated a
          collection of Christmas recipes that will make your celebrations truly
          special. Let the joy of cooking fill your home with warmth and the aroma
          of seasonal delights.
        </h2>
        <div>
          <Link to="/recipes">
            <button className='Button'>Go to Recipe Page</button>
          </Link>
        </div>
      </article>

      <article className='CardA'>
        <h2>
          Discover the magic of the holiday season with our Christmas Movie
          Wonderland! Click below to explore a curated selection of festive films
          that will add joy and warmth to your celebrations. From heartwarming
          classics to animated adventures, we've got the perfect movies for your
          holiday movie marathon.
        </h2>
        <div>
          <Link to="/movies">
            <button className='Button'>Go to Movie Page</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default RecipeCard;
