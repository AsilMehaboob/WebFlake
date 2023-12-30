import React, { useState } from 'react';
import './RecipeStyle.css';

const Eggnog = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    eggYolks: '4 large',
    granulatedSugar: '1/2 cup',
    wholeMilk: '2 cups',
    heavyCream: '1 cup',
    groundNutmeg: '1/2 teaspoon (plus more for garnish)',
    vanillaExtract: '1 teaspoon',
    spicedRum: '1/2 cup (optional)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'In a medium bowl, whisk together egg yolks and granulated sugar until well combined and slightly thickened.',
    'In a saucepan over medium heat, heat the whole milk and heavy cream until it begins to steam. Do not boil.',
    'Slowly whisk the hot milk mixture into the egg yolk mixture to temper the eggs.',
    'Pour the entire mixture back into the saucepan and cook over medium heat, stirring constantly, until it reaches 160°F (71°C) and slightly thickens. Do not boil.',
    'Remove from heat and stir in ground nutmeg and vanilla extract.',
    'If using spiced rum, stir it into the eggnog mixture.',
    'Strain the eggnog through a fine-mesh sieve into a bowl to remove any cooked egg bits. Allow the eggnog to cool to room temperature.',
    'Cover and refrigerate the eggnog for at least 4 hours or overnight to allow the flavors to meld.',
    'Before serving, whisk the eggnog and pour it into glasses. Garnish with a sprinkle of ground nutmeg.',
    'Optional: Serve with a cinnamon stick or a splash of additional spiced rum for an extra kick.',
    'Enjoy your homemade eggnog!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('20 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Eggnog</h1>
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
          src="https://kalejunkie.com/wp-content/uploads/2020/12/KALEJUNKIE-EGGNOG-LATTE-6.jpg" // Replace with the actual image URL
          alt="Eggnog"
        />
      </div>
    </div>
  );
};

export default Eggnog;
