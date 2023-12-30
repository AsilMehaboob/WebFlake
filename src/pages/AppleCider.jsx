import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeStyle.css';

const AppleCider = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    appleCider: '4 cups',
    cinnamonSticks: '2',
    cloves: '6',
    orangePeel: '1 strip',
    brownSugar: '1/4 cup',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'In a large pot, combine apple cider, cinnamon sticks, cloves, orange peel, and brown sugar.',
    'Bring the mixture to a simmer over medium heat, stirring occasionally to dissolve the sugar.',
    'Reduce heat to low and let it simmer for 15-20 minutes to allow the flavors to meld.',
    'Strain the cider to remove the spices and orange peel.',
    'Serve the warm apple cider in mugs.',
    'Optional: Garnish with a cinnamon stick or orange slice for extra flavor.',
    'Enjoy your delicious homemade apple cider!',
  ]);

  // Cooking time
  const cookingTime = 'Cooking Time: 15-20 minutes';

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Homemade Apple Cider</h1>
        <div className="ingredients">
          <u>
            <h2>Ingredients:</h2>
          </u>
          <ul>
            {Object.entries(ingredients).map(([ingredient, quantity]) => (
              <li key={ingredient}>
                <strong>{ingredient}:</strong> {quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="cooking-time">
          <u>
            <h2>{cookingTime}</h2>
          </u>
        </div>
        <div className="instructions">
          <u>
            <h2>Instructions:</h2>
          </u>
          <ol>
            {recipeSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="recipeimage">
        <img
          src="https://example.com/apple-cider-image.jpg" // Replace with the actual image URL
          alt="Homemade Apple Cider"
        />
      </div>
    </div>
  );
};

export default AppleCider;
