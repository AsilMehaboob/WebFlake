import React, { useState } from 'react';
import './RecipeStyle.css';

const ChristmasPunch = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    cranberryJuice: '4 cups',
    pineappleJuice: '3 cups',
    orangeJuice: '2 cups',
    gingerAle: '2 cups, chilled',
    cranberries: '1 cup, fresh or frozen (for garnish)',
    orangeSlices: '1-2 (for garnish)',
    ice: '2 cups',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'In a large punch bowl, combine cranberry juice, pineapple juice, and orange juice.',
    'Just before serving, add chilled ginger ale to the punch bowl and stir gently to combine.',
    'Add ice to keep the punch cold.',
    'Garnish with fresh cranberries and orange slices.',
    'Serve the Christmas punch in individual glasses and enjoy!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('10 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Christmas Punch</h1>
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
          src="https://sugarandcharm.com/wp-content/uploads/2022/11/best_christmas_punch_no_alcohol-1.jpg" // Replace with the actual image URL
          alt="Christmas Punch"
        />
      </div>
    </div>
  );
};

export default ChristmasPunch;
