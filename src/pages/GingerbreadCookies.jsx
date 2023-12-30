import React, { useState } from 'react';
import './RecipeStyle.css';

const GingerbreadCookies = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    allPurposeFlour: '3 cups',
    groundGinger: '1 tablespoon',
    groundCinnamon: '1 tablespoon',
    bakingSoda: '1 teaspoon',
    unsaltedButter: '3/4 cup (1 1/2 sticks), softened',
    granulatedSugar: '1 cup',
    largeEgg: '1',
    molasses: '1/4 cup',
    vanillaExtract: '1 teaspoon',
    salt: '1/4 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'In a medium bowl, whisk together all-purpose flour, ground ginger, ground cinnamon, baking soda, and salt. Set aside.',
    'In a large mixing bowl, cream together softened unsalted butter and granulated sugar until light and fluffy.',
    'Add the egg, molasses, and vanilla extract to the butter-sugar mixture. Mix until well combined.',
    'Gradually add the dry ingredients to the wet ingredients, mixing well to form a cookie dough.',
    'Divide the dough in half, wrap each portion in plastic wrap, and refrigerate for at least 1 hour.',
    'Preheat the oven to 350°F (180°C) and line baking sheets with parchment paper.',
    'On a floured surface, roll out the cookie dough to about 1/4 inch thickness. Use cookie cutters to cut out shapes.',
    'Place the cut-out cookies on the prepared baking sheets, leaving space between each cookie.',
    'Bake for 8-10 minutes or until the edges are lightly browned.',
    'Allow the cookies to cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely.',
    'Once cooled, you can decorate the gingerbread cookies with icing and festive sprinkles if desired.',
    'Enjoy your delicious homemade gingerbread cookies!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('30 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Gingerbread Cookies</h1>
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
          src="https://bakewithshivesh.com/wp-content/uploads/2020/12/IMG-1129-scaled.jpg" // Replace with the actual image URL
          alt="Gingerbread Cookies"
        />
      </div>
    </div>
  );
};

export default GingerbreadCookies;
