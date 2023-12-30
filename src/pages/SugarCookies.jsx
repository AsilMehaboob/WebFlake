import React, { useState } from 'react';
import './RecipeStyle.css';

const SugarCookies = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    flour: '2 3/4 cups',
    bakingPowder: '1 teaspoon',
    salt: '1/2 teaspoon',
    butter: '1 cup (unsalted, softened)',
    sugar: '1 1/2 cups',
    eggs: '1 large',
    vanillaExtract: '1 teaspoon',
    milk: '2 tablespoons',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat oven to 350°F (180°C).',
    'In a medium bowl, whisk together flour, baking powder, and salt.',
    'In a large bowl, cream together butter and sugar until smooth.',
    'Beat in the egg and vanilla extract.',
    'Gradually add the dry ingredients to the wet ingredients, mixing well.',
    'If the dough is too dry, add milk, one tablespoon at a time, until it comes together.',
    'Divide the dough into two equal parts, wrap in plastic wrap, and refrigerate for at least 1 hour.',
    'On a floured surface, roll out the dough to about 1/4 inch thickness.',
    'Cut out shapes with cookie cutters and place on a parchment-lined baking sheet.',
    'Bake for 8-10 minutes or until the edges are lightly golden.',
    'Cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.',
    'Decorate with icing and festive sprinkles as desired.',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('2 hours');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Christmas Sugar Cookies</h1>
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
              <li className='listed-ingredients' key={ingredient}>
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
          src="https://sallysbakingaddiction.com/wp-content/uploads/2014/12/decorated-christmas-sugar-cookies-with-icing-2.jpg" // Replace with the actual image URL
          alt="Christmas Sugar Cookies"
        />
      </div>
    </div>
  );
};

export default SugarCookies;
