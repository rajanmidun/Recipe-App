import React, { useContext, useEffect } from 'react';
// import DisplayRecipe from './DisplayRecipe';

import RecipeContext from '../../context/recipe/recipeContext';
import Spinner from '../layouts/Spinner';
import DisplayRecipe from './DisplayRecipe';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { items, loading, getRecipies } = recipeContext;

  useEffect(() => {
    getRecipies();

    // eslint-disable-next-line
  }, []);

  if (loading)
    return <Spinner />

  return !loading && items.length > 0 && (
    <div className="container-fluid">
      <h2 className='heading-secondary'>Recipes</h2>
      <div className="row align-items-center">
        {
          items.map((recipe, i) => {
            return <DisplayRecipe key={i} recipe={recipe.recipe} />
          })
        }
      </div>
    </div>
  )
}
export default Recipes;
