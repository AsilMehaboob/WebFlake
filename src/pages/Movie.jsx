import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';
import Carousel from '../component/Carousel';

const Movie = () => {
    
  const christmasRecipes = [
    // Add more Christmas recipes with their details
    {
      id: 1,
      name: 'Home Alone (1990)',
      imagePath: 'https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200',
      detailsLink: 'https://www.imdb.com/title/tt0099785/',
    },
    {
      id: 2,
      name: 'Elf (2003)',
      imagePath: 'https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      detailsLink: 'https://www.imdb.com/title/tt0319343/',
    },

    {
        id: 3,
        name: 'The Grinch (2018)',
        imagePath: 'https://www.slashfilm.com/wp/wp-content/images/the-grinch-poster.jpg',
        detailsLink: 'https://www.imdb.com/title/tt2709692/',
      },

      
    {
        id: 4,
        name: 'Die Hard (1988)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt0095016/',
      },

      {
        id: 5,
        name: 'Love Actually (2003)',
        imagePath: 'https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2015/12/025192329326_poster.jpg?itok=JBo-qf0l',
        detailsLink: 'https://www.imdb.com/title/tt0314331/',
      },

      {
        id: 6,
        name: 'Scrooged (1988)',
        imagePath: 'https://alternativemovieposters.com/wp-content/uploads/2021/12/AlanGillett_Scrooged.jpg',
        detailsLink: 'https://www.imdb.com/title/tt0096061/',
      },

      {
        id: 7,
        name: 'Home Alone 2: Lost in New York (1992)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt0104431/',
      },

      {
        id: 8,
        name: "It's a Wonderful Life (1946)",
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg',
        detailsLink: 'https://www.imdb.com/title/tt0038650/',
      },

      {
        id: 9,
        name: 'The Polar Express (2004)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt0338348/',
      },


      {
        id: 10,
        name: 'How the Grinch Stole Christmas (2000)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BYmZjYTQ4YWUtMDY3Ni00NDI4LWE2YWYtYzU1NDlkMzQyZjIwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
        detailsLink: 'https://m.imdb.com/title/tt0170016',
      },

      {
        id: 11,
        name: 'Arthur Christmas (2011)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt1430607/',
      },


      {
        id: 12,
        name: 'The Holiday Calendar (2018)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BY2ZhYWRlMWYtMDA2YS00ZDQ5LWFmMzctZjg2ZDAwOThmNmJjXkEyXkFqcGdeQXVyNjk2Mjc2OTI@._V1_FMjpg_UX1000_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt8262802/',
      },

      {
        id: 13,
        name: 'Krampus (2015)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BMjk0MjMzMTI3NV5BMl5BanBnXkFtZTgwODEyODkxNzE@._V1_FMjpg_UX1000_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt3850590/',
      },

      {
        id: 14,
        name: 'Noelle (2019)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZWYzNDQyOTYtMDkzNy00N2E4LWJlMGEtNTliZGZlYzhiNGQyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
        detailsLink: 'https://m.imdb.com/title/tt5097410/',
      },

      {
        id: 15,
        name: 'Serendipity (2001)',
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Serendipity_poster.jpg',
        detailsLink: 'https://m.imdb.com/title/tt0240890/',
      },

      {
        id: 16,
        name: 'The Family Stone (2005)',
        imagePath: 'https://m.media-amazon.com/images/M/MV5BNGM1MmRlMzItZjNmMi00NDNlLTgxYjktMzE0OWJmYTk2YTgxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
        detailsLink: 'https://www.imdb.com/title/tt0356680/',
      },



      // Add more Christmas recipes
    // Add more Christmas recipes as needed
  ];

  const [loadedRecipes, setLoadedRecipes] = useState(christmasRecipes);

  return (
    <>

    <h2 className='recipe-title'>MOVIES</h2>
    <div className='recipes'>
      {loadedRecipes.map((recipe) => (
        <div key={recipe.id} className='recipe-item'>
          <img
            className='movie-image'
            src={recipe.imagePath}
            alt={recipe.name}
          />
          <div className='recipe-name'>
          <Link to={recipe.detailsLink}>{recipe.name}</Link>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Movie;