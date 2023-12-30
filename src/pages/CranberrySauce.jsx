import React, { useState } from 'react';
import './RecipeStyle.css';

const CranberrySauce = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    freshCranberries: '12 ounces',
    orangeJuice: '1 cup',
    granulatedSugar: '3/4 cup',
    water: '1/4 cup',
    orangeZest: '1 tablespoon',
    cinnamonStick: '1',
    pinchOfSalt: '1/8 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'In a medium saucepan, combine fresh cranberries, orange juice, granulated sugar, water, orange zest, cinnamon stick, and a pinch of salt.',
    'Bring the mixture to a boil over medium-high heat, stirring occasionally.',
    'Reduce the heat to low and simmer for about 10-15 minutes, or until the cranberries burst and the sauce thickens to your desired consistency.',
    'Remove the cinnamon stick and discard.',
    'Allow the cranberry sauce to cool to room temperature before serving.',
    'Transfer the cranberry sauce to a serving dish and refrigerate until ready to serve.',
    'Serve chilled cranberry sauce as a delightful accompaniment to your holiday meal!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('20 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Cranberry Sauce</h1>
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
          src="https://sallysbakingaddiction.com/wp-content/uploads/2019/11/cranberry-sauce-1.jpg" // Replace with the actual image URL
          alt="Cranberry Sauce"
        />
      </div>
    </div>
  );
};

export default CranberrySauce;
