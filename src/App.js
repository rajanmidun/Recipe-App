import React from 'react';
import RecipeState from './context/recipe/RecipeState';

//  USER COMPONENTS
import Home from './component/pages/Home';
import Recipes from './component/recipe/Recipes';

const App = () => {
  return (
    <RecipeState>
      <header>
        <Home />
      </header>
      <main>
        <Recipes />
      </main>
    </RecipeState>
  )
}
export default App;
