import React, { useState } from 'react';
import './RecipeStyle.css';

const PeppermintBark = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    semiSweetChocolate: '12 ounces, chopped',
    whiteChocolate: '12 ounces, chopped',
    peppermintExtract: '1/2 teaspoon',
    candyCanes: '4-6, crushed',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Line a baking sheet with parchment paper or a silicone baking mat.',
    'Melt the semi-sweet chocolate using a double boiler or in the microwave, stirring until smooth.',
    'Stir in peppermint extract into the melted semi-sweet chocolate.',
    'Spread the melted semi-sweet chocolate evenly onto the prepared baking sheet, creating a thin layer.',
    'Place the baking sheet in the refrigerator to allow the semi-sweet chocolate to set, about 15-20 minutes.',
    'Melt the white chocolate using a double boiler or in the microwave, stirring until smooth.',
    'Spread the melted white chocolate over the set semi-sweet chocolate layer.',
    'Sprinkle crushed candy canes over the melted white chocolate, pressing them lightly into the surface.',
    'Return the baking sheet to the refrigerator and let the peppermint bark set completely, about 1-2 hours.',
    'Once set, break the peppermint bark into pieces.',
    'Store in an airtight container in the refrigerator.',
    'Enjoy the delicious Peppermint Bark as a festive treat!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('2 hours');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Peppermint Bark</h1>
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
          src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/11/Homemade-Peppermint-Bark-1-680x1020.jpg" // Replace with the actual image URL
          alt="Peppermint Bark"
        />
      </div>
    </div>
  );
};

export default PeppermintBark;
