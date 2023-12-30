import React, { useState } from 'react';
import './RecipeStyle.css';

const CranberryJuice = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    cranberries: '2 cups (fresh or frozen)',
    water: '4 cups',
    sugar: '1/2 cup (adjust to taste)',
    orangeJuice: '1/2 cup (optional)',
    lemonJuice: '1 tablespoon (optional)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Rinse the cranberries thoroughly.',
    'In a medium saucepan, combine cranberries and water.',
    'Bring to a boil and then reduce the heat to simmer for about 10-15 minutes or until the cranberries burst.',
    'Strain the cranberry mixture through a fine-mesh sieve or cheesecloth into a pitcher, pressing to extract the juice.',
    'Discard the cranberry pulp and seeds.',
    'While the juice is still warm, stir in sugar, adjusting to taste.',
    'If desired, add orange juice and lemon juice for extra flavor.',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('20 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Cranberry Juice</h1>
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
          src="https://iambaker.net/wp-content/uploads/2022/12/christmas-slush-4-1146x1536.jpg" // Replace with the actual image URL
          alt="Cranberry Juice"
        />
      </div>
    </div>
  );
};

export default CranberryJuice;
