import React, { useState } from 'react';
import './RecipeStyle.css';

const PumpkinPie = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    pieCrust: '1 unbaked pie crust (9 inches)',
    cannedPumpkin: '1 can (15 ounces)',
    sweetenedCondensedMilk: '1 can (14 ounces)',
    eggs: '2 large',
    groundCinnamon: '1 teaspoon',
    groundGinger: '1/2 teaspoon',
    groundNutmeg: '1/2 teaspoon',
    salt: '1/2 teaspoon',
    whippedCream: 'For serving (optional)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Preheat the oven to 425°F (220°C).',
    'In a large mixing bowl, combine canned pumpkin, sweetened condensed milk, eggs, ground cinnamon, ground ginger, ground nutmeg, and salt. Mix until well combined.',
    'Pour the pumpkin mixture into the unbaked pie crust, spreading it evenly.',
    'Bake in the preheated oven for 15 minutes. Reduce the oven temperature to 350°F (175°C) and continue baking for an additional 35-40 minutes or until a knife inserted near the center comes out clean.',
    'Remove the pumpkin pie from the oven and let it cool on a wire rack.',
    'Once cooled, refrigerate the pie for at least 4 hours or overnight to set.',
    'Serve the pumpkin pie chilled. Optionally, top with whipped cream before serving.',
    'Enjoy your delicious homemade pumpkin pie!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('15 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Pumpkin Pie</h1>
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
          src="https://tastesbetterfromscratch.com/wp-content/uploads/2022/10/PumpkinPie2-2.jpg" // Replace with the actual image URL
          alt="Pumpkin Pie"
        />
      </div>
    </div>
  );
};

export default PumpkinPie;
