import React, { useState } from 'react';
import './RecipeStyle.css';

const RedVelvetCake = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    flour: '2 1/2 cups',
    cocoaPowder: '2 tablespoons',
    bakingPowder: '1 teaspoon',
    bakingSoda: '1 teaspoon',
    salt: '1/2 teaspoon',
    buttermilk: '1 cup',
    vegetableOil: '1 1/2 cups',
    granulatedSugar: '2 cups',
    eggs: '2 large',
    vanillaExtract: '2 teaspoons',
    redFoodColoring: '2 tablespoons',
    whiteVinegar: '1 teaspoon',
    creamCheese: '16 ounces (softened)',
    powderedSugar: '4 cups',
    unsaltedButter: '1/2 cup (softened)',
    vanillaExtractIcing: '1 teaspoon',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat oven to 350°F (180°C). Grease and flour two 9-inch round cake pans.',
    'In a medium bowl, sift together flour, cocoa powder, baking powder, baking soda, and salt.',
    'In a separate large bowl, whisk together buttermilk, vegetable oil, granulated sugar, eggs, vanilla extract, red food coloring, and white vinegar.',
    'Gradually add the dry ingredients to the wet ingredients, mixing until well combined.',
    'Divide the batter evenly between the prepared pans and smooth the tops with a spatula.',
    'Bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.',
    'Allow the cakes to cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely.',
    'For the cream cheese icing, beat together cream cheese, powdered sugar, unsalted butter, and vanilla extract until smooth and creamy.',
    'Spread a layer of icing on top of one cake layer, then place the second layer on top and frost the entire cake with the remaining icing.',
    'Optional: Decorate the cake with additional toppings like grated chocolate or red velvet cake crumbs.',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('1 hour 30 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Red Velvet Cake</h1>
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
          src="https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE-768x768.jpg" // Replace with the actual image URL
          alt="Red Velvet Cake"
        />
      </div>
    </div>
  );
};

export default RedVelvetCake;
