import React, { Fragment, useState, useContext } from 'react';

import RecipeContext from '../../context/recipe/recipeContext';

const Home = () => {
  const [recipeName, setRecipeName] = useState('');
  const recipeContext = useContext(RecipeContext);

  const handleInput = (e) => {
    setRecipeName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeContext.searchResult(recipeName);
  }
  return (
    <Fragment>
      <h3 className='heading-primary'>Search Over <span>10,000 recipe</span></h3>
      <form onSubmit={handleSubmit}>
        <i className="material-icons">search</i>
        <input type='text' name='recipe' placeholder='Search your favorite recipe..' onChange={handleInput} />
      </form>
    </Fragment>
  )
}

export default Home
