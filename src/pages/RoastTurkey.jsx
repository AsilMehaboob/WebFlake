import React, { useState } from 'react';
import './RecipeStyle.css';

const RoastTurkey = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    wholeTurkey: '1 (12-15 pounds)',
    salt: '1/2 cup',
    blackPepper: '2 tablespoons',
    garlicPowder: '1 tablespoon',
    onionPowder: '1 tablespoon',
    driedThyme: '1 tablespoon',
    rosemary: '1 tablespoon',
    sage: '1 tablespoon',
    oliveOil: '1/2 cup',
    chickenBroth: '2 cups',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat oven to 325°F (165°C).',
    'Remove giblets and neck from the turkey cavity and pat the turkey dry with paper towels.',
    'In a small bowl, mix together salt, black pepper, garlic powder, onion powder, dried thyme, rosemary, and sage to create the seasoning rub.',
    'Rub the seasoning mixture all over the outside and inside of the turkey.',
    'Place the turkey on a rack in a roasting pan, breast side up.',
    'Tie the turkey legs together with kitchen twine for even cooking.',
    'Brush the turkey with olive oil to help achieve a golden brown skin.',
    'Pour chicken broth into the bottom of the roasting pan to keep the turkey moist during cooking.',
    'Roast the turkey in the preheated oven, basting every 30 minutes with pan juices, until the internal temperature reaches 165°F (74°C). This will take about 3 to 4 hours, depending on the size of the turkey.',
    'If the skin is getting too dark, cover the turkey loosely with aluminum foil.',
    'Once done, let the turkey rest for 20-30 minutes before carving.',
    'Carve and serve the roast turkey with your favorite side dishes.',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('3 to 4 hours');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Roast Turkey</h1>
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
          src="https://img.jamieoliver.com/jamieoliver/recipe-database/99656825.jpg?tr=w-800,h-1066" // Replace with the actual image URL
          alt="Roast Turkey"
        />
      </div>
    </div>
  );
};

export default RoastTurkey;
