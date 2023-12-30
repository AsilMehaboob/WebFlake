import React, { useState } from 'react';
import './RecipeStyle.css';

const PeppermintCheesecake = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    grahamCrackerCrust: '2 cups, crushed',
    creamCheese: '16 ounces, softened',
    sugar: '1 cup',
    sourCream: '1 cup',
    vanillaExtract: '1 teaspoon',
    eggs: '4 large',
    peppermintExtract: '1 teaspoon',
    crushedPeppermintCandy: '1/2 cup',
    whippedCream: '1 cup',
    chocolateSauce: '1/4 cup',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven to 325°F (163°C).',
    'In a bowl, combine the crushed graham crackers and melted butter to make the crust. Press the mixture into the bottom of a springform pan.',
    'In a large mixing bowl, beat the cream cheese until smooth. Add sugar and beat until well combined.',
    'Mix in sour cream, vanilla extract, and peppermint extract.',
    'Add eggs one at a time, beating well after each addition.',
    'Fold in crushed peppermint candy.',
    'Pour the cream cheese mixture over the graham cracker crust.',
    'Bake in the preheated oven for 50-60 minutes or until the center is set.',
    'Allow the cheesecake to cool, then refrigerate for at least 4 hours or overnight.',
    'Before serving, top the cheesecake with whipped cream and drizzle with chocolate sauce.',
    'Slice and enjoy your delicious Peppermint Cheesecake!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('1 hour 30 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Peppermint Cheesecake</h1>
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
          src="https://www.justsotasty.com/wp-content/uploads/2023/11/Peppermint-Cheesecake-3.jpg" // Replace with the actual image URL
          alt="Peppermint Cheesecake"
        />
      </div>
    </div>
  );
};

export default PeppermintCheesecake;
