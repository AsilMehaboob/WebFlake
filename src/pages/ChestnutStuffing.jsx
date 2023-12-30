import React, { useState } from 'react';
import './RecipeStyle.css';

const ChestnutStuffing = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    chestnuts: '1 pound, roasted and peeled',
    unsaltedButter: '1/2 cup (1 stick)',
    yellowOnion: '1 large, finely chopped',
    celery: '2 stalks, finely chopped',
    freshThyme: '1 tablespoon, chopped',
    freshRosemary: '1 tablespoon, chopped',
    sage: '1 tablespoon, chopped',
    dayOldBread: '8 cups, cubed',
    chickenBroth: '2 to 3 cups',
    salt: '1 teaspoon (or to taste)',
    blackPepper: '1/2 teaspoon (or to taste)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven to 375°F (190°C).',
    'In a large skillet, melt the unsalted butter over medium heat.',
    'Add chopped onion and celery to the skillet. Sauté until softened, about 5 minutes.',
    'Stir in the fresh thyme, rosemary, and sage. Cook for an additional 2 minutes.',
    'Add the roasted and peeled chestnuts to the skillet. Stir to combine with the vegetable and herb mixture.',
    'Place the cubed day-old bread in a large mixing bowl. Pour the chestnut mixture over the bread.',
    'Pour enough chicken broth over the bread mixture to moisten it, starting with 2 cups and adding more as needed.',
    'Season the stuffing with salt and black pepper to taste. Mix until well combined.',
    'Transfer the stuffing to a greased baking dish and cover with aluminum foil.',
    'Bake in the preheated oven for 30 minutes. Remove the foil and bake for an additional 15-20 minutes or until the top is golden brown and crispy.',
    'Serve the chestnut stuffing as a delicious side dish for your holiday feast!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('45 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Chestnut Stuffing</h1>
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
          src="https://www.wellplated.com/wp-content/uploads/2015/10/This-Bacon-Mushroom-Stuffing-will-steal-the-show-at-Thanksgiving-Rosemary-and-dried-plums-make-it-extra-special.jpg" // Replace with the actual image URL
          alt="Chestnut Stuffing"
        />
      </div>
    </div>
  );
};

export default ChestnutStuffing;
