import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';
import Carousel from '../component/Carousel';

const Recipe = () => {
    
  const christmasRecipes = [
    // Add more Christmas recipes with their details
    {
      id: 1,
      name: 'Christmas Sugar Cookies',
      imagePath: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/12/decorated-christmas-sugar-cookies-with-icing-2.jpg',
      detailsLink: '/recipe/SugarCookies',
      cookingTime: '30 mts',
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      imagePath: 'https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE-768x768.jpg',
      detailsLink: '/recipe/RedVelvetCake',
      cookingTime: '1 hr',
    },
    {
      id: 3,
      name: 'Cranberry Juice',
      imagePath: 'https://iambaker.net/wp-content/uploads/2022/12/christmas-slush-4-1146x1536.jpg',
      detailsLink: '/recipe/CranberryJuice',
      cookingTime: '15 mts',
    },
    {
      id: 4,
      name: 'Roast Turkey',
      imagePath: 'https://img.jamieoliver.com/jamieoliver/recipe-database/99656825.jpg?tr=w-800,h-1066',
      detailsLink: '/recipe/RoastTurkey',
      cookingTime: '3 hrs',
    },
    {
      id: 5,
      name: 'Mashed Potatoes with Garlic and Parmesan',
      imagePath: 'https://www.skinnytaste.com/wp-content/uploads/2017/11/Garlic-Mashed-Potatoes-7.jpg',
      detailsLink: '/recipe/MashedPotatoes',
      cookingTime: '45 mts',
    },
    {
      id: 6,
      name: 'Chocolate Fudge',
      imagePath: 'https://www.crazyforcrust.com/wp-content/uploads/2020/06/creamy-chocolate-fudge-7.jpg',
      detailsLink: '/recipe/ChoclateFudge',
      cookingTime: '2 hrs',
    },
    {
      id: 7,
      name: 'Eggnog',
      imagePath: 'https://kalejunkie.com/wp-content/uploads/2020/12/KALEJUNKIE-EGGNOG-LATTE-6.jpg',
      detailsLink: '/recipe/Eggnog',
      cookingTime: '20 mts',
    },
    {
      id: 8,
      name: 'Brussel Sprouts',
      imagePath: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/10/brussel-sprouts.jpg',
      detailsLink: '/recipe/BrusselSprouts',
      cookingTime: '30 mts',
    },
    {
      id: 9,
      name: 'Chestnut Stuffing',
      imagePath: 'https://www.wellplated.com/wp-content/uploads/2015/10/This-Bacon-Mushroom-Stuffing-will-steal-the-show-at-Thanksgiving-Rosemary-and-dried-plums-make-it-extra-special.jpg',
      detailsLink: '/recipe/ChestnutStuffing',
      cookingTime: '1 hr',
    },
    {
      id: 10,
      name: 'Peppermint Cheesecake',
      imagePath: 'https://www.justsotasty.com/wp-content/uploads/2023/11/Peppermint-Cheesecake-3.jpg',
      detailsLink: '/recipe/PeppermintCheesecake',
      cookingTime: '4 hrs',
    },
    {
      id: 11,
      name: 'Buttered Rosemary Rolls',
      imagePath: 'https://britneybreaksbread.com/wp-content/uploads/2022/03/Rosemary-Dinner-Rolls-scaled.jpg',
      detailsLink: '/recipe/ButteredRosemaryRolls',
      cookingTime: '1 hr 30 mts',
    },
    {
      id: 12,
      name: 'Candied Pecans',
      imagePath: 'https://stripedspatula.com/wp-content/uploads/2018/10/caramelized-pecans-3.jpg',
      detailsLink: '/recipe/CandiedPecans',
      cookingTime: '40 mts',
    },
    {
      id: 13,
      name: 'Christmas Punch',
      imagePath: 'https://sugarandcharm.com/wp-content/uploads/2022/11/best_christmas_punch_no_alcohol-1.jpg',
      detailsLink: '/recipe/ChristmasPunch',
      cookingTime: '15 mts',
    },
    {
      id: 14,
      name: 'Peppermint Bark',
      imagePath: 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/11/Homemade-Peppermint-Bark-1-680x1020.jpg',
      detailsLink: '/recipe/PeppermintBark',
      cookingTime: '1 hr',
    },
    {
      id: 15,
      name: 'Pumpkin Pie',
      imagePath: 'https://tastesbetterfromscratch.com/wp-content/uploads/2022/10/PumpkinPie2-2.jpg',
      detailsLink: '/recipe/PumpkinPie',
      cookingTime: '1 hr 15 mts',
    },
    {
      id: 16,
      name: 'Cranberry Sauce',
      imagePath: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/11/cranberry-sauce-1.jpg',
      detailsLink: '/recipe/CranberrySauce',
      cookingTime: '20 mts',
    },
    {
      id: 17,
      name: 'Gingerbread Cookies',
      imagePath: 'https://bakewithshivesh.com/wp-content/uploads/2020/12/IMG-1129-scaled.jpg',
      detailsLink: '/recipe/GingerbreadCookies',
      cookingTime: '25 mts',
    },
    {
      id: 18,
      name: 'Apple Cider',
      imagePath: 'https://homecookedroots.com/wp-content/uploads/2022/12/How-to-Make-Hot-Apple-Cider-Non-Alcoholic-1How-to-Make-Hot-Apple-Cider-Non-Alcoholic.jpg',
      detailsLink: '/recipe/AppleCider',
      cookingTime: '15 mts',
    },


      // Add more Christmas recipes
    // Add more Christmas recipes as needed
  ];

  const [loadedRecipes, setLoadedRecipes] = useState(christmasRecipes);

  return (
    <>
      <h2 className='recipe-title'>RECIPES</h2>
      <div className='recipes'>
        {loadedRecipes.map((recipe) => (
          <div key={recipe.id} className='recipe-item'>
            <img
              className='recipe-image'
              src={recipe.imagePath}
              alt={recipe.name}
            />
            <div className='tag'>
              <div className='cooking-time'>{recipe.cookingTime}</div>
            </div>
            <div className='recipe-name'>
              <Link to={recipe.detailsLink}>{recipe.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipe;
