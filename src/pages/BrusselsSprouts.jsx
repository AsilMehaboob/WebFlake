import React, { useState } from 'react';
import './RecipeStyle.css';

const BrusselsSprouts = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    brusselsSprouts: '1 pound, trimmed and halved',
    oliveOil: '3 tablespoons',
    balsamicVinegar: '2 tablespoons',
    honey: '1 tablespoon',
    garlic: '3 cloves, minced',
    salt: '1/2 teaspoon',
    blackPepper: '1/4 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven to 400°F (200°C).',
    'In a large bowl, toss the halved Brussels sprouts with olive oil, balsamic vinegar, honey, minced garlic, salt, and black pepper until evenly coated.',
    'Spread the Brussels sprouts in a single layer on a baking sheet.',
    'Roast in the preheated oven for 20-25 minutes or until the Brussels sprouts are golden brown and crispy on the edges, tossing halfway through for even cooking.',
    'Remove from the oven and drizzle with additional balsamic vinegar if desired.',
    'Transfer to a serving dish and serve hot.',
    'Enjoy your delicious roasted Brussels sprouts!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('30 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Roasted Brussels Sprouts</h1>
        <div className="preparation-time">
          <u>
            <h2>Preparation Time:</h2>
          </u>
          <p>{preparationTime}</p>
        </div>
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
          src="https://cdn.loveandlemons.com/wp-content/uploads/2019/10/brussel-sprouts.jpg" // Replace with the actual image URL
          alt="Roasted Brussels Sprouts"
        />
      </div>
    </div>
  );
};

export default BrusselsSprouts;
