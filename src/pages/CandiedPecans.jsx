import React, { useState } from 'react';
import './RecipeStyle.css';

const CandiedPecans = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    pecanHalves: '2 cups',
    eggWhite: '1 large',
    whiteSugar: '1/2 cup',
    brownSugar: '1/4 cup, packed',
    groundCinnamon: '1 teaspoon',
    salt: '1/4 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven to 250°F (120°C). Line a baking sheet with parchment paper.',
    'In a mixing bowl, whisk the egg white until frothy.',
    'Add pecan halves to the egg white and toss to coat evenly.',
    'In a separate bowl, mix together white sugar, brown sugar, ground cinnamon, and salt.',
    'Sprinkle the sugar mixture over the coated pecans and toss until evenly coated.',
    'Spread the pecans in a single layer on the prepared baking sheet.',
    'Bake in the preheated oven for 1 hour, stirring every 15 minutes to ensure even coating.',
    'Remove from the oven and let the candied pecans cool completely.',
    'Once cooled, break the pecans apart and store in an airtight container.',
    'Enjoy these delicious Candied Pecans as a snack or as a topping for salads and desserts!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('1 hour 15 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Candied Pecans</h1>
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
          src="https://stripedspatula.com/wp-content/uploads/2018/10/caramelized-pecans-3.jpg" // Replace with the actual image URL
          alt="Candied Pecans"
        />
      </div>
    </div>
  );
};

export default CandiedPecans;
