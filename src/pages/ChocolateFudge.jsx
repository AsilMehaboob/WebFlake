import React, { useState } from 'react';
import './RecipeStyle.css';

const ChocolateFudge = () => {
  // State for ingredient quantities
  const [ingredients, setIngredients] = useState({
    semisweetChocolateChips: '2 cups',
    sweetenedCondensedMilk: '1 can (14 ounces)',
    unsaltedButter: '1/4 cup',
    vanillaExtract: '1 teaspoon',
    salt: '1/4 teaspoon',
    choppedNuts: '1 cup (optional)',
  });

  // State for recipe steps
  const [recipeSteps] = useState([
    'Line an 8-inch square baking pan with parchment paper, leaving an overhang on two opposite sides for easy removal.',
    'In a medium saucepan, combine semisweet chocolate chips, sweetened condensed milk, and unsalted butter over low heat. Stir until the chocolate and butter are melted and the mixture is smooth.',
    'Remove the saucepan from heat and stir in vanilla extract and salt. If desired, fold in chopped nuts.',
    'Pour the chocolate mixture into the prepared baking pan, spreading it evenly.',
    'Refrigerate the fudge for at least 2 hours or until set.',
    'Once set, use the parchment paper overhang to lift the fudge out of the pan. Place it on a cutting board and cut into squares.',
    'Store the chocolate fudge in an airtight container in the refrigerator.',
    'Serve and enjoy!',
  ]);

  // Additional state for preparation time
  const [preparationTime] = useState('15 minutes');

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <h1>Chocolate Fudge</h1>
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
          src="https://www.crazyforcrust.com/wp-content/uploads/2020/06/creamy-chocolate-fudge-7.jpg" // Replace with the actual image URL
          alt="Chocolate Fudge"
        />
      </div>
    </div>
  );
};

export default ChocolateFudge;
