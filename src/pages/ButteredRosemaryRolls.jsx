import React, { useState } from 'react';
import './RecipeStyle.css';

const ButteredRosemaryRolls = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    refrigeratedRolls: '1 package (16 ounces)',
    unsaltedButter: '1/2 cup (1 stick), melted',
    freshRosemary: '2 tablespoons, finely chopped',
    garlicPowder: '1/2 teaspoon',
    salt: '1/4 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven according to the instructions on the package of refrigerated rolls.',
    'Take each roll from the package and shape it into a ball. Place the rolls on a greased baking sheet, leaving some space between them.',
    'In a small bowl, mix together melted unsalted butter, finely chopped fresh rosemary, garlic powder, and salt.',
    'Brush the rosemary butter mixture over each roll, making sure they are well-coated.',
    'Bake the rolls in the preheated oven according to the package instructions or until they are golden brown and cooked through.',
    'Remove the rolls from the oven and let them cool slightly before serving.',
    'Serve the buttered rosemary rolls warm and enjoy!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('20 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Buttered Rosemary Rolls</h1>
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
          src="https://britneybreaksbread.com/wp-content/uploads/2022/03/Rosemary-Dinner-Rolls-scaled.jpg" // Replace with the actual image URL
          alt="Buttered Rosemary Rolls"
        />
      </div>
    </div>
  );
};

export default ButteredRosemaryRolls;
