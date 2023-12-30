import React, { useState } from 'react';
import './RecipeStyle.css';

const MashedPotatoes = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    potatoes: '4 large, peeled and cut into chunks',
    garlicCloves: '4 cloves, minced',
    butter: '1/2 cup (1 stick)',
    milk: '1/2 cup',
    ParmesanCheese: '1/2 cup, grated',
    salt: '1 teaspoon (or to taste)',
    blackPepper: '1/2 teaspoon (or to taste)',
    chives: '2 tablespoons, chopped (for garnish)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Place the peeled and cut potatoes in a large pot, cover with cold water, and add a pinch of salt.',
    'Bring the water to a boil and cook the potatoes until they are fork-tender, about 15-20 minutes.',
    'In a small saucepan, melt the butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant but not browned.',
    'Drain the cooked potatoes and return them to the pot. Mash the potatoes with a potato masher or fork.',
    'Add the garlic butter mixture, milk, grated Parmesan cheese, salt, and black pepper to the mashed potatoes. Mix until smooth and creamy.',
    'Adjust seasoning to taste. If the mashed potatoes are too thick, add more milk; if too thin, add more cheese.',
    'Transfer the mashed potatoes to a serving bowl and garnish with chopped chives.',
    'Serve hot and enjoy!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('30 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Mashed Potatoes with Garlic and Parmesan</h1>
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
          src="https://www.skinnytaste.com/wp-content/uploads/2017/11/Garlic-Mashed-Potatoes-7.jpg" // Replace with the actual image URL
          alt="Mashed Potatoes with Garlic and Parmesan"
        />
      </div>
    </div>
  );
};

export default MashedPotatoes;
